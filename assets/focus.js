"use strict";

// Keep keyboard focus discoverable without showing a ring after mouse/touch input.
document.addEventListener("pointerdown", () => {
  document.documentElement.dataset.focusInput = "pointer";
}, { capture: true, passive: true });

document.addEventListener("keydown", (event) => {
  if (!event.metaKey && !event.ctrlKey && !event.altKey) {
    delete document.documentElement.dataset.focusInput;
  }
}, true);
