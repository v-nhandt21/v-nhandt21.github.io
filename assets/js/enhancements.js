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

  /* ── Lightbox ──
     Click to enlarge: images in .cert-gallery / .resume-preview / [data-zoom], and
     content images on detail pages that are not already links. Arrow keys move
     within the same gallery; Esc or a click on the backdrop closes. */
  function initLightbox() {
    var SELECTOR = ".cert-gallery img, .resume-preview img, img[data-zoom], .page__content img";
    var SKIP = ".slide-carousel, .nvs, .story-card, .pub-links, .author__avatar, a";
    var imgs = Array.prototype.filter.call(document.querySelectorAll(SELECTOR), function (img) {
      if (img.closest(".cert-gallery, .resume-preview") || img.hasAttribute("data-zoom")) return !img.closest("a");
      return !img.closest(SKIP);
    });
    if (!imgs.length) return;

    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Close">&times;</button>' +
      '<button class="lightbox__nav lightbox__prev" type="button" aria-label="Previous">&#8249;</button>' +
      '<figure class="lightbox__figure"><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lightbox__nav lightbox__next" type="button" aria-label="Next">&#8250;</button>';
    document.body.appendChild(box);
    var bigImg = box.querySelector("img"), cap = box.querySelector("figcaption");
    var group = [], index = 0, lastFocus = null;

    function groupOf(img) {
      var g = img.closest(".cert-gallery, .resume-preview, .page__content, .lightbox-group");
      return imgs.filter(function (x) { return g ? g.contains(x) : x === img; });
    }
    function show(i) {
      index = (i + group.length) % group.length;
      var src = group[index].getAttribute("data-full") || group[index].currentSrc || group[index].src;
      bigImg.src = src;
      bigImg.alt = group[index].alt || "";
      cap.textContent = group[index].getAttribute("data-caption") || group[index].alt || "";
      box.classList.toggle("lightbox--single", group.length < 2);
    }
    function open(img) {
      lastFocus = document.activeElement;
      group = groupOf(img);
      show(group.indexOf(img));
      box.classList.add("is-open");
      document.documentElement.classList.add("lightbox-open");
      box.querySelector(".lightbox__close").focus();
    }
    function close() {
      box.classList.remove("is-open");
      document.documentElement.classList.remove("lightbox-open");
      bigImg.removeAttribute("src");
      if (lastFocus) lastFocus.focus();
    }
    imgs.forEach(function (img) {
      img.classList.add("lightbox-target");
      img.setAttribute("tabindex", "0");
      img.addEventListener("click", function () { open(img); });
      img.addEventListener("keydown", function (e) { if (e.key === "Enter") open(img); });
    });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox__close")) close();
    });
    box.querySelector(".lightbox__prev").addEventListener("click", function () { show(index - 1); });
    box.querySelector(".lightbox__next").addEventListener("click", function () { show(index + 1); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(index + 1);
      else if (e.key === "ArrowLeft") show(index - 1);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLightbox();
    initThemeToggle();
    initScrollReveal();
    initTilt();
    initScrollProgress();
  });
})();
