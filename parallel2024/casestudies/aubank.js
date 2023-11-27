gsap.registerPlugin(ScrollTrigger);

let product = document.querySelector(".product-box");

let allElements = document.querySelectorAll("[gsap='onscrollsecond']");
let gsapallElements = document.querySelectorAll("[gsap='opacity']");

let onScrollAllstraight = document.querySelectorAll("[gsap='scrollstraight']");
let section2onscrollAU = document.querySelector(".au--mockups--on-scroll");

function onscrollAubankSecondsectionMobile() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: product,
      start: "20% 90%",
      end: "50% 55%",
      // markers: true,
      scrub: true,
      toggleActions: "play none none none"
    }
  });

  tl.to(allElements, {
    x: 0,
    y: 0,
    rotation: 0,
    ease: "linear",
    duration: 4
  }).to(gsapallElements, { opacity: 1, ease: "linear", duration: 4 }, 0);
}

// onscrollAubankSecondsectionMobile();

function checkScreenWidthAndCallFunction() {
  if (window.innerWidth > 991) {
    onscrollAubankSecondsectionMobile(); // Call your function when the screen width is greater than 991px
  }
}

// Add an event listener to check the screen width when the window is resized
window.addEventListener("resize", checkScreenWidthAndCallFunction);

// Call checkScreenWidthAndCallFunction initially to check the screen width when the page loads
checkScreenWidthAndCallFunction();

function gsapscrollstraight() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section2onscrollAU,
      start: "30% 60%",
      end: "50% 60%",
      // markers: true,
      scrub: true,
      toggleActions: "play none none none"
    }
  });

  tl.to(onScrollAllstraight, {
    x: 0,
    y: 0,
    opacity: 1,
    ease: "linear",
    duration: 2
  });
}

gsapscrollstraight();
