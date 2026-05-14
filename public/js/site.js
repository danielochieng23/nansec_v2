function initFeather() {
  if (typeof feather !== "undefined") {
    feather.replace({ class: "feather", "stroke-width": 2 });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFeather();

  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  const navIconMenu = document.getElementById("navIconMenu");
  const navIconClose = document.getElementById("navIconClose");

  navToggle?.addEventListener("click", () => {
    mobileNav?.classList.toggle("hidden");
    const open = !mobileNav?.classList.contains("hidden");
    navIconMenu?.classList.toggle("hidden", open);
    navIconClose?.classList.toggle("hidden", !open);
    navToggle?.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
});
