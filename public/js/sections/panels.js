const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function initPanels() {
  const section = document.querySelector("[data-panels]");
  const track = document.querySelector("[data-panels-track]");
  const slots = document.querySelectorAll(".panel-slot");
  const panels = document.querySelectorAll(".panel");
  const row = document.querySelector("[data-panel-row]");
  if (!section || !track || !panels.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) return;

  let sectionTop = 0;
  let sectionHeight = 0;
  let travel = 0;
  let viewport = 0;
  let gap = 0;
  let baseWidth = 0;
  let wordWidth = 0;
  let raf = 0;
  let lastScroll = 0;
  let textX = 0;
  let velocity = 0;

  const measure = () => {
    const rect = section.getBoundingClientRect();
    sectionTop = rect.top + window.scrollY;
    sectionHeight = section.offsetHeight;
    viewport = window.innerHeight;
    wordWidth = row ? row.firstElementChild?.getBoundingClientRect().width || 0 : 0;
    gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    baseWidth = panels[0].offsetWidth;
    const trackWidth = panels.length * baseWidth + (panels.length - 1) * gap;
    travel = trackWidth > viewport
      ? trackWidth - viewport
      : Math.max(0, (sectionHeight - viewport) / 2);
    lastScroll = window.scrollY;
    velocity = 0;
    update(true);
  };

  const update = (force) => {
    const scrollY = window.scrollY;
    const progress = clamp(
      (scrollY - sectionTop) / Math.max(1, sectionHeight - viewport),
      0,
      1
    );

    const delta = scrollY - lastScroll;
    lastScroll = scrollY;
    velocity += (delta - velocity) * 0.12;

    const scale = 1 - progress * 0.34;
    const shift = progress * travel;
    track.style.transform = `translate3d(${-shift}px, 0, 0)`;
    let acc = 0;
    slots.forEach((slot, i) => {
      slot.style.transform = `translate3d(${-acc}px, 0, 0) scale(${scale})`;
      acc += (1 - scale) * panels[i].offsetWidth;
    });

    if (row && !force && Math.abs(velocity) > 0.01) {
      textX -= velocity * 0.9;
      if (wordWidth > 0) {
        const span = wordWidth * 2;
        textX = ((textX % span) + span) % span - span;
      }
      row.style.transform = `translate3d(${textX.toFixed(2)}px, 0, 0)`;
    }
  };

  const tick = () => {
    raf = 0;
    update(false);
    if (Math.abs(velocity) > 0.05) raf = requestAnimationFrame(tick);
  };

  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(tick);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", measure);
  reduce.addEventListener("change", measure);
  if ("ResizeObserver" in window) {
    new ResizeObserver(measure).observe(section);
  }

  measure();
}

initPanels();