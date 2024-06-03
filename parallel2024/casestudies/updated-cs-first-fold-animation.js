const csDetailsWrapper = document.querySelector('[data-cs="details"]');
const csVideoWrapper = document.querySelector("[data-cs='video-wrapper']");
const { videoType } = csVideoWrapper.dataset;

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    gsap.set(csDetailsWrapper, { height: "100%", display: "block" });

    function handleAnimationCompleteForDesktop(videoType) {
      if (videoType === "video") {
        const videoPlayer = csVideoWrapper.querySelector("video");
        videoPlayer.play();
      } else if (videoType === "lottie") {
        const lottiePlayer = csVideoWrapper.querySelector(
          '[data-lottie="player"]',
        );
        lottiePlayer.setAttribute("autoplay", "");
        lottiePlayer.play();
      } else {
        return;
      }
    }

    function handleVideoPlayForMobile(videoType) {
      if (videoType === "video") {
        const videoPlayer = csVideoWrapper.querySelector("video");
        videoPlayer.setAttribute("autoplay", true);
        videoPlayer.play();
      } else if (videoType === "lottie") {
        const lottiePlayer = csVideoWrapper.querySelector(
          '[data-lottie="player"]',
        );
        lottiePlayer.setAttribute("autoplay", "");
        lottiePlayer.addEventListener("ready", function () {
          lottiePlayer.play();
        });
      } else {
        return;
      }
    }

    function animateSection() {
      const initialY = `-${csDetailsWrapper.offsetHeight}`;

      gsap.set(csVideoWrapper, { y: initialY });

      gsap.to(csVideoWrapper, {
        y: 0,
        ease: "ease.in",
        duration: 1.25,
        onComplete: () => handleAnimationCompleteForDesktop(videoType),
        delay: 1.25,
      });
    }

    if (window.innerWidth > 991) {
      animateSection();
    } else {
      handleVideoPlayForMobile(videoType);
    }
  });
});
