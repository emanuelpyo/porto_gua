const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function initPanels() {
  const section = document.querySelector("[data-panels]");
  const track = document.querySelector("[data-panels-track]");
  const slots = document.querySelectorAll(".panel-slot");
  const panels = document.querySelectorAll(".panel");
  const row = document.querySelector("[data-panel-row]");

  if (!section || !track || !slots.length || !panels.length) return;
  if (slots.length !== panels.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduce.matches) return;

  // Horizontal movement stops at 82% of Section 2 scroll progress.
  const HORIZONTAL_STOP_PROGRESS = 0.82;

  // Card 4 center target: 70% of viewport width.
  const FINAL_CARD_CENTER_RATIO = 1.1;

  // Final card scale.
  const FINAL_SCALE = 0.66;

  let sectionTop = 0;
  let sectionHeight = 0;
  let viewport = 0;
  let travel = 0;
  let wordWidth = 0;

  let raf = 0;
  let lastScroll = 0;
  let textX = 0;
  let velocity = 0;
let manualOffset = 0;

  // Measure the last card's original center without transforms.
  const getBaseLastCardCenter = () => {
    const previousTrackTransform = track.style.transform;

    const previousSlotTransforms = Array.from(slots).map(
      (slot) => slot.style.transform,
    );

    track.style.transform = "none";

    slots.forEach((slot) => {
      slot.style.transform = "none";
    });

    const lastSlot = slots[slots.length - 1];
    const rect = lastSlot.getBoundingClientRect();

    const center = rect.left + rect.width / 2;

    // Restore existing transforms.
    track.style.transform = previousTrackTransform;

    slots.forEach((slot, index) => {
      slot.style.transform = previousSlotTransforms[index];
    });

    return center;
  };

  const measure = () => {
    const rect = section.getBoundingClientRect();

    sectionTop = rect.top + window.scrollY;
    sectionHeight = section.offsetHeight;
    viewport = window.innerHeight;

    wordWidth = row
      ? row.firstElementChild?.getBoundingClientRect().width || 0
      : 0;

    // Get Card 4's original center before scaling and translation.
    const lastCardCenter = getBaseLastCardCenter();

    // Calculate the total translation compensation
    // needed to maintain consistent gaps after scaling.
    let finalCompensation = 0;

    for (let i = 0; i < slots.length - 1; i++) {
      finalCompensation += (1 - FINAL_SCALE) * slots[i].offsetWidth;
    }

    // Target position based on the reference screenshot.
    const targetCenter = viewport * FINAL_CARD_CENTER_RATIO;

    // Calculate horizontal travel based on total track width (fallback for mobile where slot widths may be large).
    const trackWidth = track.scrollWidth;
    travel = Math.max(0, trackWidth - viewport);

    lastScroll = window.scrollY;
    velocity = 0;
    manualOffset = 0;

    update(true);
  };

  const update = (force) => {

    const scrollY = window.scrollY;

    // Overall vertical scroll progress through Section 2.
    const progress = clamp(
      (scrollY - sectionTop) / Math.max(1, sectionHeight - viewport),
      0,
      1,
    );

    // Horizontal animation only runs until the stop point.
    const animationProgress = clamp(progress / HORIZONTAL_STOP_PROGRESS, 0, 1);

    // Track scrolling velocity.
    const delta = scrollY - lastScroll;

    lastScroll = scrollY;
    velocity += (delta - velocity) * 0.12;

    // Scaling stops at the same time as horizontal movement.
    const scale = 1 - animationProgress * (1 - FINAL_SCALE);


    // Compute base shift from vertical scroll
    const baseShift = animationProgress * travel;
    const minManual = -baseShift;
    const maxManual = travel - baseShift;
    manualOffset = Math.max(minManual, Math.min(maxManual, manualOffset));
    const shift = Math.max(0, Math.min(travel, baseShift + manualOffset));

    track.style.transform = `translate3d(${-shift}px, 0, 0)`;

    // Maintain consistent visual gaps between scaled cards.
    let compensation = 0;

    slots.forEach((slot, index) => {
      slot.style.transform = `translate3d(${-compensation}px, 0, 0) scale(${scale})`;

      if (index < slots.length - 1) {
        compensation += (1 - scale) * slot.offsetWidth;
      }
    });

    // Preserve the existing Projects marquee animation.
    if (row && !force && Math.abs(velocity) > 0.01) {
      textX -= velocity * 0.9;

      if (wordWidth > 0) {
        const span = wordWidth * 2;

        textX = (((textX % span) + span) % span) - span;
      }

      row.style.transform = `translate3d(${textX.toFixed(2)}px, 0, 0)`;
    }
  };

  const tick = () => {
    raf = 0;

    update(false);

    if (Math.abs(velocity) > 0.05) {
      raf = requestAnimationFrame(tick);
    }
  };

  const onScroll = () => {
    if (raf) return;

    raf = requestAnimationFrame(tick);
  };

  const onResize = () => {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }

measure();
    manualOffset = 0;
  };

  window.addEventListener("scroll", onScroll, {
    passive: true,
  });

  window.addEventListener("resize", onResize);

  reduce.addEventListener("change", onResize);
if (window.innerWidth <= 600) {
  let touchStartX = 0;
  let startOffset = 0;
  const touchThreshold = 10;
    const onTouchStart = (e) => {
      const t = e.touches[0];
      touchStartX = t.clientX;
      // Sync manualOffset with current scroll progress to allow bidirectional drag
      const scrollY = window.scrollY;
      const prog = Math.min(1, Math.max(0, (scrollY - sectionTop) / Math.max(1, sectionHeight - viewport)));
      const animProg = Math.min(1, Math.max(0, prog / HORIZONTAL_STOP_PROGRESS));
      const baseShift = animProg * travel;
      const minManual = -baseShift;
      const maxManual = travel - baseShift;
      manualOffset = Math.max(minManual, Math.min(maxManual, manualOffset));
      startOffset = manualOffset;
    };
    const onTouchMove = (e) => {
      const t = e.touches[0];
      const dx = t.clientX - touchStartX;
      // Horizontal drag only (ignore vertical)
      if (Math.abs(dx) < touchThreshold) return;
      e.preventDefault();
      // Recalculate baseShift in case vertical scroll changed during drag
      const scrollY = window.scrollY;
      const prog = Math.min(1, Math.max(0, (scrollY - sectionTop) / Math.max(1, sectionHeight - viewport)));
      const animProg = Math.min(1, Math.max(0, prog / HORIZONTAL_STOP_PROGRESS));
      const baseShift = animProg * travel;
      const minManual = -baseShift;
      const maxManual = travel - baseShift;
      manualOffset = startOffset - dx;
      manualOffset = Math.max(minManual, Math.min(maxManual, manualOffset));
      update(true);
    };
  const onTouchEnd = () => {};
  track.addEventListener('touchstart', onTouchStart, {passive:true});
  track.addEventListener('touchmove', onTouchMove, {passive:false});
  track.addEventListener('touchend', onTouchEnd);
}

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(onResize);
    observer.observe(section);
  }

  measure();
}

initPanels();
