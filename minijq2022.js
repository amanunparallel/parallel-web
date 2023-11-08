document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".button-secondary-white").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      this.querySelectorAll(".animated-line").forEach((target) =>
        target.classList.add("hover-in")
      );
    });
  });

  document.querySelectorAll(".button-secondary-white").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      this.querySelectorAll(".animated-line").forEach((target) =>
        target.classList.remove("hover-in")
      );
    });
  });
});

//nav-menu-mobile
// when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // on .nav-menu-link-mobile click
  document.querySelectorAll(".nav-menu-link-mobile").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        // 1st click
        document
          .querySelectorAll(".absolute-nav-menu-container-mobile")
          .forEach((target) => target.classList.add("show-right"));
        document
          .querySelectorAll(".nav-menu-new-parallel-icon")
          .forEach((target) => target.classList.add("hide"));
        document
          .querySelectorAll(".nav-menu-new-parallel-icon-cross")
          .forEach((target) => target.classList.add("show"));
        document
          .querySelectorAll(".body-new-website")
          .forEach((target) => target.classList.add("no-scroll"));
      } else {
        // 2nd click (toggle)
        document
          .querySelectorAll(".absolute-nav-menu-container-mobile")
          .forEach((target) => target.classList.remove("show-right"));
        document
          .querySelectorAll(".nav-menu-new-parallel-icon")
          .forEach((target) => target.classList.remove("hide"));
        document
          .querySelectorAll(".nav-menu-new-parallel-icon-cross")
          .forEach((target) => target.classList.remove("show"));
        document
          .querySelectorAll(".body-new-website")
          .forEach((target) => target.classList.remove("no-scroll"));
      }
    });
  });
});

// when DOM is ready logo parallel interaction
document.addEventListener("DOMContentLoaded", () => {
  // Hover in on .brand-paralle-nav
  document.querySelectorAll(".brand-paralle-nav").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".move-logo")
        .forEach((target) => target.classList.add("move-up"));
    });
  });

  // Hover out on .brand-paralle-nav
  document.querySelectorAll(".brand-paralle-nav").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".move-logo")
        .forEach((target) => target.classList.remove("move-up"));
    });
  });
});

// when DOM is ready nav link hover
document.addEventListener("DOMContentLoaded", () => {
  // Hover in on .new-nav-link-wrapper
  document.querySelectorAll(".new-nav-link-wrapper").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      this.querySelectorAll(".line-nav-border").forEach((target) =>
        target.classList.add("move-in-nav")
      );
    });
  });

  // Hover out on .new-nav-link-wrapper
  document.querySelectorAll(".new-nav-link-wrapper").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      this.querySelectorAll(".line-nav-border").forEach((target) =>
        target.classList.remove("move-in-nav")
      );
    });
  });
});
