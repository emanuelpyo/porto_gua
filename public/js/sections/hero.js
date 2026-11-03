function initAbout() {
  const dialog = document.querySelector("[data-about]");
  if (!dialog) return;

  const openBtn = document.querySelector("[data-about-open]");
  const closers = dialog.querySelectorAll("[data-about-close]");
  let lastFocus = null;

  const open = () => {
    lastFocus = document.activeElement;
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
    const closeBtn = dialog.querySelector(".about__close");
    closeBtn?.focus({ preventScroll: true });
  };

  const close = () => {
    dialog.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus instanceof HTMLElement) lastFocus.focus({ preventScroll: true });
  };

  openBtn?.addEventListener("click", open);
  closers.forEach((el) => el.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dialog.hidden) close();
  });

  dialog.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || dialog.hidden) return;
    const focusable = dialog.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])");
    if (!focusable.length) return;
    const first = focusable[0];
    const lastEl = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      lastEl.focus();
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault();
      first.focus();
    }
  });
}

initAbout();
