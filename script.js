(() => {
  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Make all [data-book] buttons go to booking tab + scroll
  document.querySelectorAll("[data-book]").forEach((btn) => {
    btn.addEventListener("click", () => {
      // switch tab after navigation
      setTimeout(() => openTab("book"), 50);
    });
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const panels = {
    message: document.getElementById("panel-message"),
    book: document.getElementById("panel-book"),
  };

  function openTab(name) {
    tabs.forEach((t) => {
      const active = t.dataset.tab === name;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });

    Object.keys(panels).forEach((key) => {
      panels[key]?.classList.toggle("active", key === name);
    });
  }

  tabs.forEach((t) =>
    t.addEventListener("click", () => openTab(t.dataset.tab)),
  );

  // Contact form (demo feedback)
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent = "Message sent — I’ll reply soon.";
      form.reset();
      setTimeout(() => (note.textContent = ""), 2600);
    });
  }

  // Scroll animations (simple)
  const items = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          io.unobserve(entry.target); // anima uma vez
        }
      });
    },
    { threshold: 0.12 },
  );

  items.forEach((el) => io.observe(el));
})();
