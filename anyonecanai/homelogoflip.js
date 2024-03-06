// use Flip and ScrollTrigger 

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

let ElLogo = document.querySelector('[tr-scrollflip-element="logo"]'),
  originElLogo = document.querySelector('[tr-scrollflip-element="originlogo"]'),
  targetElLogo = document.querySelector('[tr-scrollflip-element="targetlogo"]'),
  componentEl = document.querySelector('[tr-scrollflip-element="component"]');

console.log(componentEl);

let tllogo = gsap.timeline({
  scrollTrigger: {
    trigger: componentEl,
    scrub: true,
    onEnter: timelineLogo,
    onLeaveBack: timelineLogoReverse,
    start: "50% 45%",
    // markers: true,
    yoyo: true,
    toggleActions: "play none reverse none",
  },
});

function timelineLogo() {
  const state = Flip.getState(ElLogo);

  if (ElLogo.parentNode === originElLogo) {
    targetElLogo.appendChild(ElLogo);
  }

  Flip.from(state, {
    duration: 1,
    ease: "power1.inOut",
  });
}

function timelineLogoReverse() {
  const state = Flip.getState(ElLogo);

  if (ElLogo.parentNode === targetElLogo) {
    originElLogo.appendChild(ElLogo);
  }

  Flip.from(state, {
    duration: 1,
    ease: "power1.inOut",
    flip: {
      el: ElLogo,
      parent: originElLogo,
    },
  });
}
