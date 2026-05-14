function initFeather() {
  if (typeof feather !== "undefined") {
    feather.replace({ class: "feather", "stroke-width": 2 });
  }
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function formatStat(el, value) {
  const prefix = el.getAttribute("data-prefix-lt") === "1" ? "<" : el.getAttribute("data-prefix") || "";
  const suffix = el.getAttribute("data-suffix") || "";
  return prefix + String(value) + suffix;
}

function runStatCount(el, duration) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  if (Number.isNaN(target) || target < 0) return;

  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = easeOutCubic(t);
    const n = Math.round(eased * target);
    el.textContent = formatStat(el, n);
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = formatStat(el, target);
    }
  }
  requestAnimationFrame(tick);
}

function initStatCounters() {
  const els = document.querySelectorAll(".js-stat-count[data-count]");
  if (!els.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = 1600;

  els.forEach((el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    if (Number.isNaN(target)) return;

    if (reduced) {
      el.textContent = formatStat(el, target);
      return;
    }

    el.textContent = formatStat(el, 0);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          runStatCount(entry.target, duration);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );
    io.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFeather();
  initStatCounters();

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
