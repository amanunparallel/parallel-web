document.addEventListener("DOMContentLoaded", function () {
  // Get the global navigation element
  const globalNav = document.querySelector("[navnew]");

  if (globalNav) {
    // Get the screen width
    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth > 991;

    if (isLargeScreen) {
      // Get the current navigation background color
      const currentNavColor = window.getComputedStyle(globalNav)
        .backgroundColor;

      // Initialize animation thresholds based on the current page
      let animationStartThreshold = 0.05;
      let animationEndThreshold = 0.2;

      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        animationStartThreshold = 0.001;
      }

      // Variables for tracking scroll direction and position
      let isScrollingUp = false;
      let lastScrollPosition = 0;

      // Flag for tracking the background color
      let isBackgroundWhite = false;

      // Function to update menu and empty space heights
      function updateMenuAndEmptyHeight() {
        const scrollPosition = window.scrollY;
        const scrollPercentage =
          scrollPosition /
          (document.documentElement.scrollHeight - window.innerHeight);

        // Change background color
        if (
          !isBackgroundWhite &&
          (scrollPercentage >= animationStartThreshold ||
            scrollPercentage > animationEndThreshold)
        ) {
          if (typeof gsap !== "undefined") {
            gsap.to(globalNav, {
              backgroundColor: "white",
              ease: "power2.easeInOut",
              duration: 0.5
            });
          }
          isBackgroundWhite = true;
        } else if (
          isBackgroundWhite &&
          scrollPercentage < animationStartThreshold
        ) {
          if (typeof gsap !== "undefined") {
            gsap.to(globalNav, {
              backgroundColor: currentNavColor,
              ease: "power2.easeInOut",
              duration: 0.5
            });
          }
          isBackgroundWhite = false;
        }

        if (scrollPercentage > 0.05) {
          isScrollingUp = scrollPosition < lastScrollPosition;
          lastScrollPosition = scrollPosition;

          gsap.to(globalNav, {
            translateY: isScrollingUp ? 0 : -globalNav.clientHeight,
            ease: "power2.easeInOut",
            duration: 1
          });
        }
      }

      if (typeof gsap !== "undefined") {
        window.addEventListener("scroll", updateMenuAndEmptyHeight);
      }
    }
  }
});
