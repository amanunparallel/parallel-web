// Importing GSAP and registering ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Splitting text elements using SplitType
let typeSplit = new SplitType("[split]", {
  types: "lines, words, chars",
  tagName: "span",
});

/*
Animations of navbar, mainheading, section two
*/
// Selecting elements for animations
let navBarAnimation = document.querySelector("[navnew]");
let headSelectOnload = document.querySelector('[animate="onloadheading"]');
let selectAllwordsOnLoad = headSelectOnload.querySelectorAll(".line");
let sectionTwo = document.querySelector('[home="sectwo"]');

// Function to run home page animations
const homeAnimations = () => {
  let tl = gsap.timeline();

  // Animating navigation bar
  tl.to(navBarAnimation, { opacity: 1, duration: 1, ease: "slow" })
    // Animating headline on load
    .to(headSelectOnload, { opacity: 1, duration: 0 })
    // Animating individual words of the headline
    .to(selectAllwordsOnLoad, {
      opacity: 1,
      y: "0%",
      duration: "1",
      stagger: {
        each: 0.125,
        from: "start",
        onStart: function (i) {
          return i * 0.1;
        },
      },
      ease: "ease in",
    })
    // Animating section two
    .to(
      sectionTwo,
      { opacity: 1, y: "0%", duration: 1.5, ease: "slow(0.7,0.7,false)" },
      1
    );
};

// Triggering home page animations
homeAnimations();

/*
For headings animations of sections
*/
// Function for scroll animations
const homeScrollAnimation = (triggerEl, element) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: "top 90%",
      end: "bottom bottom",
    },
  });

  // Animating elements on scroll
  tl.to(element, {
    opacity: 1,
    y: "0%",
    duration: ".75",
    stagger: {
      each: 0.1,
      from: "start",
      onStart: function (i) {
        return i * 0.1;
      },
    },
    ease: "ease-in",
  });
};

// Triggering scroll animations for specific elements
homeScrollAnimation(secFourHeading, secFourHeadinWords);
homeScrollAnimation(blogHeading, blogHeadingWords);

/*
for animating section content.
use [section="animate"] for section content to be animated
*/
// Function for section animations
const sectionAnimation = (sectionName) => {
  const triggerConfig = {
    trigger: sectionName,
    markers: true,
  };

  // Animating sections on scroll
  gsap.timeline({ scrollTrigger: triggerConfig }).from(sectionName, {
    opacity: 0,
    y: "50px",
    duration: 1,
    ease: "ease in",
  });
};

// Triggering section animations for all sections
const allSections = document.querySelectorAll('[section="animate"]');
allSections.forEach((section) => {
  sectionAnimation(section);
});

// Function for card animations
const caseStudyCardAnimation = (card) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: caseStudySection,
      start: "top 95%",
      end: "70% top",
      // markers: true
    },
  });

  // Animating cards on scroll
  tl.from(card, { y: "100", ease: "ease in", stagger: 0.3 });
};

// Triggering card animations for case study section
const caseStudySection = document.querySelector('[casestudy="section"]');
const caseStudyCards = caseStudySection.querySelectorAll('[casestudy="card"]');
caseStudyCards.forEach((card) => {
  caseStudyCardAnimation(card);
});
