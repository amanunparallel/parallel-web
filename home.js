/* Code for Parallel Website*/

console.log(
  "This code is using netlify cdn --> change it later to github jsdeliver cdn"
);
/*Project Section Functioning: on hover*/
let tabarr = document.querySelectorAll(".tab-link");
let conarr = document.querySelectorAll(".tab-content");

let tabsproject = [...tabarr];
let cons = [...conarr];

function hidealltabs() {
  for (let i = 0; i < tabsproject.length; i++) {
    tabsproject[i].classList.remove("current");
    cons[i].classList.remove("current");
    tabsproject[i]
      .querySelector(".tab-link-wrapper")
      .classList.remove("current");
    tabsproject[i]
      .querySelector(".details-project-section-container")
      .classList.remove("current");
    tabsproject[i]
      .querySelector(".button-wrapper-project")
      .classList.remove("current");
  }
}

for (let i = 0; i < tabsproject.length; i++) {
  tabsproject[i].addEventListener("click", (e) => {
    hidealltabs();
    tabsproject[i].classList.add("current");
    cons[i].classList.add("current");
    tabsproject[i].querySelector(".tab-link-wrapper").classList.add("current");
    tabsproject[i]
      .querySelector(".details-project-section-container")
      .classList.add("current");
    tabsproject[i]
      .querySelector(".button-wrapper-project")
      .classList.add("current");
  });
}

//------------------------------------------------
/*Project Section Functioning: on click*/
let tabarrh = document.querySelectorAll(".tab-link-click");
let conarrh = document.querySelectorAll(".tab-content-click");

let tabsprojecth = [...tabarrh];
let consh = [...conarrh];
console.log(tabsprojecth);
console.log(consh);
function hidealltabsh() {
  for (let i = 0; i < tabsprojecth.length; i++) {
    tabsprojecth[i].classList.remove("current");
    consh[i].classList.remove("current");
    tabsprojecth[i]
      .querySelector(".details-project-section-container-click")
      .classList.remove("current");
    tabsprojecth[i]
      .querySelector(".button-wrapper-project-click")
      .classList.remove("current");
  }
}

for (let i = 0; i < tabsprojecth.length; i++) {
  tabsprojecth[i].addEventListener("click", (e) => {
    hidealltabsh();
    tabsprojecth[i].classList.add("current");
    consh[i].classList.add("current");
    tabsprojecth[i]
      .querySelector(".details-project-section-container-click")
      .classList.add("current");
    tabsprojecth[i]
      .querySelector(".button-wrapper-project-click")
      .classList.add("current");
  });
}

// //<!-- //------------------------------------------------
// Play-Pause Project section once on hover-desktop -->

// Click Function
let playOnClickVideo = function (trigger, target) {
  $(trigger).click(function () {
    $(target)
      .find("video")
      .each(function () {
        this.currentTime = 0; // set the current time of the video to 0
        this.play();
      });
  });
};

// Desktop

var Webflow = Webflow || [];
Webflow.push(function () {
  function stopAllVideos() {
    $(".project-mockup")
      .find("video")
      .each(function () {
        this.pause();
      });
  }

  playOnClickVideo("#savage", "#savage-mockup");
  playOnClickVideo("#possible", "#possible-mockup");
  playOnClickVideo("#bial", "#bial-mockup");
  playOnClickVideo("#ndap", "#ndap-mockup");
  playOnClickVideo("#xto10x", "#xto10x-mockup");
  playOnClickVideo("#cowin", "#cowin-mockup");
  playOnClickVideo("#digilocker", "#digilocker-mockup");
  playOnClickVideo("#delhivery", "#delhivery-mockup");
  playOnClickVideo("#gullak", "#gullak-mockup");
  playOnClickVideo("#pixxel", "#pixxel-mockup");

  //------------------------------------------------
  function removeLoopAutoplay() {
    $(".project-mockup").find("video").removeAttr("autoplay");
  }
  stopAllVideos();
  removeLoopAutoplay();
});

// Mobile
//------------------------------------------------
// Play-Pause Project section once on click-mobile
Webflow.push(function () {
  function stopAllVideosm() {
    $(".accordion-content")
      .find("video")
      .each(function () {
        this.pause();
      });
  }

  playOnClickVideo("#savagem", "#savage-mockupm");
  playOnClickVideo("#possiblem", "#possible-mockupm");
  playOnClickVideo("#bialm", "#bial-mockupm");
  playOnClickVideo("#ndapm", "#ndap-mockupm");
  playOnClickVideo("#xto10xm", "#xto10x-mockupm");
  playOnClickVideo("#cowinm", "#cowin-mockupm");
  playOnClickVideo("#digilockerm", "#digilocker-mockupm");
  playOnClickVideo("#delhiverym", "#delhivery-mockupm");
  playOnClickVideo("#gullakm", "#gullak-mockupm");
  playOnClickVideo("#pixxelm", "#pixxel-mockupm");

  //-------------------------------------------
  function removeLoopAutoplaym() {
    $(".accordion-content").find("video").removeAttr("autoplay");
  }
  stopAllVideosm();
  removeLoopAutoplaym();
});

//new-our services sections
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".home-d-fold-3-boxx").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      this.querySelectorAll(".home-d-fold-3-boxx-level-3").forEach((target) =>
        target.classList.add("active")
      );
    });
  });

  document.querySelectorAll(".home-d-fold-3-boxx").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      this.querySelectorAll(".home-d-fold-3-boxx-level-3").forEach((target) =>
        target.classList.remove("active")
      );
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".home-d-parallel-web-wrapper")
    .forEach((trigger) => {
      trigger.addEventListener("mouseover", function () {
        this.querySelectorAll(
          ".parallel-around-the-web-thumbnail-image-element"
        ).forEach((target) => target.classList.add("hover-in"));
      });
    });

  document
    .querySelectorAll(".home-d-parallel-web-wrapper")
    .forEach((trigger) => {
      trigger.addEventListener("mouseout", function () {
        this.querySelectorAll(
          ".parallel-around-the-web-thumbnail-image-element"
        ).forEach((target) => target.classList.remove("hover-in"));
      });
    });
});
