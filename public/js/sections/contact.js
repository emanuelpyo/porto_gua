const EMAIL = "deryl@lawkey.id";

function initContact() {
  const button = document.querySelector("[data-contact-copy]");
  const track = document.querySelector("[data-contact-track]");
  const status = document.querySelector("[data-contact-status]");
  if (!button || !track) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  let busy = false;
  let timer = 0;

  const reset = () => {
    track.classList.remove("is-copied");
    busy = false;
    timer = 0;
  };

  button.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      busy = false;
      if (status) status.textContent = "Copy failed";
      return;
    }
    track.classList.add("is-copied");
    if (status) status.textContent = "Email copied";
    timer = window.setTimeout(reset, reduce.matches ? 1200 : 1700);
  });
}

initContact();