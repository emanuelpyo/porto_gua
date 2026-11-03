import { createRoot } from "react-dom/client";
import Lanyard from "./Lanyard.jsx";

function mount(el) {
  const root = createRoot(el);

  root.render(
    <Lanyard
      frontImage="/public/images/profile/Lanyard_depan.png"
      backImage="/public/images/profile/Lanyard_belakang.png"
      cardColor="#ffffff"
      orientation="portrait"
      finish="glossy"
      cornerRadius={0.3}
      size={0.48}
      anchor="center"
      strapLength={0.85}
      strapColor="#111111"
      strapWidth={0.52}
      metal="silver"
      gravity={1}
      damping={0.5}
      elasticity={0.5}
      breeze={0.5}
      interactive
      intro
    />,
  );

  el.dataset.mounted = "true";
}

document.querySelectorAll("[data-lanyard-root]").forEach(mount);
