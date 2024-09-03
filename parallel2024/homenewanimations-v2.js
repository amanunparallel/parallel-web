gsap.registerPlugin(ScrollTrigger);

let typeSplit = new SplitType("[split]", {
  types: "lines, words, chars",
  tagName: "span",
});

let navBarAnimation = document.querySelector("[navnew]");
let headSelectOnload = document.querySelector('[animate="onloadheading"]');
let heroCta = document.querySelctor('[data-hero="cta"]');

let selectAllwordsOnLoad = headSelectOnload.querySelectorAll(".line");
let sectionTwo = document.querySelector('[home="sectwo"]');

const homeAnimations = () => {
  let tl = gsap.timeline();

  tl.to(navBarAnimation, { opacity: 1, duration: 1, ease: "slow" })
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
    }).to(
      heroCta, {
        opacity:1,
        y:'0%',
        duration:1,
        ease: "ease in",
      }
    ).to(
      sectionTwo,
      {
        opacity: 1,
        y: "0%",
        duration: 1.5,
        ease: "slow(0.7,0.7,false)",
      },
      1,
    );
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    homeAnimations();
  }, 500);
});

// scroll animation
let secFourHeading = document.querySelector('[animate="secfourheading"]');
let secFourHeadinWords = secFourHeading.querySelectorAll(".line");

let blogHeading = document.querySelector('[animate="blogheading"]');
let blogHeadingWords = blogHeading.querySelectorAll(".line");

const homeScrollAnimation = (triggerEl, element) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: "top 90%",
      end: "bottom bottom",
    },
  });

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

homeScrollAnimation(secFourHeading, secFourHeadinWords);
homeScrollAnimation(blogHeading, blogHeadingWords);

// all section animation
const allSections = document.querySelectorAll('[section="animate"]');

function sectionAnimation(sectionName) {
  const triggerConfig = {
    trigger: sectionName,
  };

  gsap
    .timeline({
      scrollTrigger: triggerConfig,
    })
    .from(sectionName, {
      opacity: 0,
      y: "50px",
      duration: 1,
      ease: "ease in",
    });
}

// Iterate through all sections and apply the animation
allSections.forEach((section) => {
  sectionAnimation(section);
});

// cards animation

const caseStudySection = document.querySelector('[casestudy="section"]');
const caseStudyCards = caseStudySection.querySelectorAll('[casestudy="card"]');

const caseStudyCardAnimation = (card) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: caseStudySection,
      start: "top 95%",
      end: "70% top",
      // markers: true
    },
  });

  tl.from(card, {
    y: "100",
    ease: "ease in",
    stagger: 0.3,
  });
};

caseStudyCards.forEach((card) => {
  caseStudyCardAnimation(card);
});
