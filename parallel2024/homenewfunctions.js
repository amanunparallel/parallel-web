"use strict";
const ListItemsServices = Array.from(
  document.querySelectorAll("[home='servicelink']"),
);

// Add click event listeners to each tab
ListItemsServices.forEach((tab) => {
  tab.addEventListener("click", () => {
    // If the clicked tab is already active, do nothing
    if (tab.classList.contains("active")) {
      return;
    }

    // Remove the "active" class from all tabs
    ListItemsServices.forEach((otherTab) => {
      otherTab.classList.remove("active");
    });

    // Add the "active" class to the clicked tab
    tab.classList.add("active");

    // Animate the tab
    animateTabs(ListItemsServices);
  });
});

// Function to animate tabs
function animateTabs(tabs) {
  tabs.forEach((tab) => {
    const serviceContent = tab.querySelector("[home='servicecontent']");
    const isActive = tab.classList.contains("active");

    if (isActive) {
      // Animate opening the active tab
      TweenMax.to(serviceContent, 0.35, {
        height: "auto",
        opacity: 1,
        ease: "ease-out",
      });
    } else {
      // Animate closing the non-active tabs
      TweenMax.to(serviceContent, 0.35, {
        height: "0px",
        ease: "ease-out",
        opacity: 0,
      });
    }
  });
}

// Initialize the animation for the initial active tab
animateTabs(ListItemsServices);

$(function () {
  // Iterate over each .newhome_tab-component instance
  $(".newhome_tab-component").each(function () {
    let $component = $(this);

    // Set duration of tab cycle in milliseconds for this instance
    let tabDuration = 5000;

    // Starts the tab cycle for this instance
    let tabTimeout;
    clearTimeout(tabTimeout);
    tabLoop($component.find(".auto-tabs_tab.w--current"));

    // Define cycle through all tabs for this instance
    function tabLoop(trigger) {
      // If pause btn is set to playing, loop to the next tab for this instance
      if (
        $component.find(".auto-tabs_pause-btn").attr("auto-tabs") == "playing"
      ) {
        // Reset all timer bars and animate the current one for tabDuration for this instance
        $component
          .find(".auto-tabs_timer-bar")
          .stop(true, true)
          .css("width", "0%");
        trigger
          .find(".auto-tabs_timer-bar")
          .animate({ width: "100%" }, tabDuration);

        // Loop to the next/first tab after tabDuration for this instance
        tabTimeout = setTimeout(function () {
          let $next = trigger.next();

          if ($next.length) {
            $next.removeAttr("href").click();
          } else {
            $component.find(".auto-tabs_tab:first").removeAttr("href").click();
          }
        }, tabDuration);
      }
    }

    // Reset timeout if a tab is clicked for this instance
    $component.find(".auto-tabs_tab").click(function () {
      clearTimeout(tabTimeout);
      tabLoop($(this));
    });

    // Pause/play timeout every other click for this instance
    $component.find(".auto-tabs_pause-btn").click(function () {
      let clicks = $(this).data("clicks");
      if (clicks) {
        $component.find(".auto-tabs_pause-btn").attr("auto-tabs", "playing");
        tabLoop($component.find(".auto-tabs_tab.w--current"));
      } else {
        clearTimeout(tabTimeout);
        $component.find(".auto-tabs_pause-btn").attr("auto-tabs", "paused");
        $component
          .find(".auto-tabs_timer-bar")
          .stop(true, true)
          .css("width", "0%");
      }
      $(this).data("clicks", !clicks);
    });

    $component.find(".auto-tabs_pause-btn").click(function () {
      if ($component.find(".cc-pause").is(":visible")) {
        $component.find(".cc-pause").css("display", "none");
        $component.find(".cc-play").css("display", "block");
      } else {
        $component.find(".cc-play").css("display", "none");
        $component.find(".cc-pause").css("display", "block");
      }
    });
  });
});
