

// Selecting DOM elements
const cardsWrapper = document.querySelector('[cards="container"]');
const cardsHolder = document.querySelector('[cards="holder"]');

// Total number of cards and their initial properties
const totalCards = 5;
const initialProperties = [
  { x: "40rem", y: "-5rem", rotation: 0 },
  { x: "21.5rem", y: "-4rem", rotation: 0 },
  null, // Skipping the third card
  { x: "-23.5rem", y: "-5rem", rotation: 0 },
  { x: "-44rem", y: "-5rem", rotation: 0 },
];

// Final properties of the cards
const finalProperties = [
  { x: "-2rem", y: "3rem", rotationZ: "-11deg" },
  { x: "-1rem", y: "-1rem", rotationZ: "-5deg" },
  null, // No final properties for the third card
  { x: "-1rem", y: "-2.3rem", rotationZ: "7deg" },
  { x: "-1.1rem", y: "1rem", rotationZ: "8deg" },
];

// Set initial properties of cards
const cardsElements = [];
for (let i = 1; i <= totalCards; i++) {
  const card = document.querySelector(`.second__card__holder__${i}`);
  if (card) {
    gsap.set(card, initialProperties[i - 1] || {});
    cardsElements.push(card);
  }
}

// Define GSAP timeline
const tl = gsap.timeline({ defaults: { duration: 2, ease: "power4.out" } });

// Add animations to the timeline
cardsElements.forEach((card, index) => {
  if (finalProperties[index]) {
    tl.to(card, {
      x: finalProperties[index].x,
      y: finalProperties[index].y,
      rotationZ: finalProperties[index].rotationZ,
      stagger: 0,
    }, 0.3);
  }
});

// Associate the scrollTrigger with the timeline
ScrollTrigger.create({
  trigger: cardsWrapper,
  start: "top 30%",
  end: 'bottom 80%',
  animation: tl,
  scrub:false,
});
