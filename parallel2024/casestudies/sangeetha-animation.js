document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // for sangeetha experices slides
  function activateTab(tabs, index) {
    tabs.forEach((tab) => tab.classList.remove("is--active"));
    tabs[index].classList.add("is--active");
  }

  function activateTabsSequentially(tabs, currentIndex = 0) {
    activateTab(tabs, currentIndex);
    currentIndex = (currentIndex + 1) % tabs.length;
    return currentIndex;
  }

  function startTabInterval(selector, interval) {
    const tabs = document.querySelectorAll(selector);
    console.log({ tabs });
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = activateTabsSequentially(tabs, currentIndex);
    }, interval);
    return intervalId;
  }
  // for first slides
  startTabInterval("[data-exp='slidefirstrow']", 1000);
  // for third slides
  startTabInterval("[data-exp='slidethirdimage']", 1500);

  // for sangeetha__location section
  function animateLocationImagesOnScroll(locationWrapper, locationImages) {
    gsap.set(locationImages, {
      scale: 0,
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: locationWrapper,
        start: "top 10%",
      },
    });
    tl.to(locationImages, {
      scale: 1,
      ease: "elastic.out(1,0.3)",
      stagger: 0.15,
    });
  }
  const locationWrapper = document.querySelector(".sangeetha__locations");
  const locationImages = document.querySelectorAll(".sangeetha__location-pin");
  animateLocationImagesOnScroll(locationWrapper, locationImages);

  //for sangeetha__discovery section
  function discoverySectionAnimation(images, imagesWrapper, discoveryWrapper) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: discoveryWrapper,
        start: "top 10%",
      },
    });
    tl.to(images, {
      marginBottom: 0,
      opacity: 1,
      markers: true,
      duration: 1.5,
      boxShadow: "none",
      ease: "ease-in-out",
    }).to(
      imagesWrapper,
      {
        boxShadow: "0px 4px 34px 0 rgba(0,0,0,0.17)",
        ease: "ease-in-out",
      },
      0.5,
    );
    return tl;
  }
  const discoveryWrapper = document.querySelector(".sangeetha__discovery");
  const images = discoveryWrapper.querySelectorAll('[data-discovery="image"]');
  const imagesWrapper = discoveryWrapper.querySelector(
    '[data-dicovery="right-col"]',
  );
  discoverySectionAnimation(images, imagesWrapper, discoveryWrapper);

  // for sangeetha mobile mockups animations
  function animateMockups() {
    if (window.innerWidth <= 991) {
      return;
    }
    const sangeethaMobileMockupsSection = document.querySelector(
      ".sangeetha__mockups-container",
    );
    const mobileMockupsWrapper =
      sangeethaMobileMockupsSection.querySelector(".mockups__wrapper");

    const leftMockup = sangeethaMobileMockupsSection.querySelector(
      '[data-mobile-mockup="left"]',
    );
    const centerMockup = sangeethaMobileMockupsSection.querySelector(
      '[data-mobile-mockup="center"]',
    );
    const rightMockup = sangeethaMobileMockupsSection.querySelector(
      '[data-mobile-mockup="right"]',
    );
    gsap.set(mobileMockupsWrapper, {
      y: "100px",
    });
    gsap.set(leftMockup, {
      x: "70%",
    });
    gsap.set(rightMockup, {
      x: "-70%",
    });
    gsap.set(centerMockup, {
      scale: 1.4,
    });
    gsap.defaults({
      ease: "ease-in-out",
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sangeethaMobileMockupsSection,
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.to(
      centerMockup,
      {
        scale: 1,
        ease: "ease-in-out",
      },
      0,
    )
      .to(
        leftMockup,
        {
          x: "0%",
          ease: "ease-in-out",
        },
        0,
      )
      .to(
        rightMockup,
        {
          x: "0%",
          ease: "ease-in-out",
        },
        0,
      );
    return tl;
  }
  animateMockups();

  //for sangeetha legacy images
  function animateLegacyImages(legacyWrapper, oldImage, newImage) {
    let startValue = "top 70%";
    let endValue = "bottom 110%";
    // Check if screen width is 568 or less (mobile or width 568 or less)
    if (window.innerWidth <= 568) {
      startValue = "top 25%";
      endValue = "bottom 70%"
    }
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: legacyWrapper,
        start: startValue,
        end: endValue,
        scrub: true,
      },
    });
    tl.to(
      oldImage,
      {
        y: "100%",
        opacity: 0,
        ease: "ease-in-out",
        duration: 4,
      },
      0,
    ).to(
      newImage,
      {
        y: "0%",
        opacity: 1,
        ease: "ease-in-out",
        duration: 2.5,
      },
      0,
    );
    return tl;
  }
  // Usage:
  const sangeethaLegacyWrapper = document.querySelector(".sangeetha__legacy");
  const sangeethaOldImage = sangeethaLegacyWrapper.querySelector(
    ".sangeetha__legacy-old-image",
  );
  const sangeethaNewImage = sangeethaLegacyWrapper.querySelector(
    ".sangeetha__legacy-new-image",
  );
  animateLegacyImages(
    sangeethaLegacyWrapper,
    sangeethaOldImage,
    sangeethaNewImage,
  );
  // for sangeetha store carousel
  function animateElements(
    locationWrapperSelector,
    sangeethaLogoSelector,
    storeMobileMockupSelector,
  ) {
    const locationWrapper = document.querySelector(locationWrapperSelector);
    const sangeethaLogo = locationWrapper.querySelector(sangeethaLogoSelector);
    const storeMobileMockup = document.querySelector(storeMobileMockupSelector);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: locationWrapper,
        start: "bottom 45%",
        end: "bottom 15%",
      },
    });
    tl.to(sangeethaLogo, {
      scale: 4,
      rotate: "360deg",
      y: "52rem",
      duration: 2,
      opacity: 0,
      ease: "ease-out",
    }).to(
      storeMobileMockup,
      {
        opacity: 1,
        ease: "ease-out",
        duration: 2,
      },
      1.5,
    );
  }
  // Call the function with appropriate selectors
  animateElements(
    ".sangeetha__locations",
    ".sangeetha__location-pin--movable",
    ".sangeetha__carousel-store-bg--img--black",
  );
});
