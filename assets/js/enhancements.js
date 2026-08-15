/*
 * UI enhancements: dark mode toggle, scroll-reveal, mouse-tilt, scroll progress bar.
 * Vanilla JS, no dependencies — safe to load after main.min.js.
 */
(function () {
  "use strict";

  /* ── Dark mode toggle ── */
  function initThemeToggle() {
    var STORAGE_KEY = "theme";
    var root = document.documentElement;
    var toggle = document.getElementById("theme-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* localStorage unavailable (private mode, etc.) — theme just won't persist */
      }
      toggle.setAttribute("aria-pressed", next === "dark");
    });

    toggle.setAttribute(
      "aria-pressed",
      root.getAttribute("data-theme") === "dark"
    );
  }

  /* ── Scroll reveal ── */
  function initScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    /* elements are visible by default (see _enhancements.scss); only opt
       into the hidden/fade-in behavior once we know JS can drive it */
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el, index) {
      el.style.setProperty("--reveal-index", index % 8);
      observer.observe(el);
    });
  }

  /* ── Mouse-tilt ── */
  function initTilt() {
    var wrappers = document.querySelectorAll(".tilt");
    if (!wrappers.length) return;

    var MAX_TILT = 10;

    wrappers.forEach(function (wrapper) {
      var inner = wrapper.querySelector(".tilt-inner") || wrapper;

      wrapper.addEventListener("mousemove", function (e) {
        var rect = wrapper.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform =
          "rotateY(" + (x * MAX_TILT * 2).toFixed(2) + "deg) " +
          "rotateX(" + (-y * MAX_TILT * 2).toFixed(2) + "deg)";
      });

      wrapper.addEventListener("mouseleave", function () {
        inner.style.transform = "rotateY(0deg) rotateX(0deg)";
      });
    });
  }

  /* ── Scroll progress bar ── */
  function initScrollProgress() {
    var bar = document.createElement("div");
    bar.id = "scroll-progress";
    document.body.appendChild(bar);

    function update() {
      var doc = document.documentElement;
      var scrollTop = doc.scrollTop || document.body.scrollTop;
      var height = doc.scrollHeight - doc.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = pct + "%";
    }

    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initScrollReveal();
    initTilt();
    initScrollProgress();
  });
})();
