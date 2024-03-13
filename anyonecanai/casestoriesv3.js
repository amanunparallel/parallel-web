let modal = document.querySelector('[data-modal="modal"]'),
  bentoEl = document.querySelector("[data-bento]"),
  buttonCloseEl = document.querySelector(".cross__inline"),
  modalLoading = document.querySelector(".finsweet_modal-loading"),
  contentContainer = document.querySelector(".contentrealtime");

let buttonDisable = document.querySelector(
  '[fs-scrolldisable-element="disable"]',
);

let onLoadUrl = window.location.href;

let modaltimeline = gsap.timeline();

function showModal() {
  modal.scrollTop = 0;
  bentoEl.classList.add("is--active");
  gsap.set(modal, { y: "100%" });
  modaltimeline.to(modal, {
    y: "0%",
    duration: 1,
    ease: "ease-in",
  });
}

function hideModal(direction) {
  history.replaceState({}, document.title, onLoadUrl);
  bentoEl.classList.remove("is--active");
  modaltimeline.to(modal, {
    y: direction ? "100%" : "-100%",
    duration: direction ? 1 : 0,
    ease: "ease-in",
    onComplete: resetLoadingState,
  });
}

function resetLoadingState() {
  modal.scrollTop = 0;
  modalLoading.style.display = "block";
  contentContainer.style.display = "none";
}

function hideLoadingState() {
  modalLoading.style.display = "none";
  contentContainer.style.display = "block";
}

buttonCloseEl.addEventListener("click", () => {
  hideModal(true);
});

$(document).on("click", ".featured__bento__div", function (e) {
  showModal();
  e.preventDefault();

  // Disable scrolling for bentoEl
  bentoEl.style.overflow = "hidden";

  let realtimeContentDiv = document.getElementById("contentrealtime");
  realtimeContentDiv.innerHTML = "";

  let url = $(this).attr("href");

  history.replaceState({}, document.title, url);

  async function runurl() {
    const res = await fetch(`${url}`);
    const html = await res.text(); // Get the HTML content

    // Create a temporary div element to hold the parsed HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Find the div with id "content"
    const contentDiv = tempDiv.querySelector("#content");

    if (contentDiv) {
      // Extract the inner HTML of the content div
      const contentHTML = contentDiv.innerHTML;

      if (realtimeContentDiv) {
        // Append the extracted content HTML to the "contentrealtime" div
        realtimeContentDiv.innerHTML = contentHTML;

        setTimeout(() => {
          hideLoadingState();
        }, 750);

        // for closing modal on esc event
        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape" || event.keyCode === 27) {
            hideModal(false);
            
          }
        });

        //Select the target element
        let emptyDiv = document.querySelector(".empty__div");

        //setTimeout(() => {
        // Create a new Intersection Observer
        let observer = new IntersectionObserver((entries) => {
          // Loop through the entries
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              hideModal(false);
            }
          });
        });

        // Start observing the target element
        observer.observe(emptyDiv);
        //}, 2000);
      } else {
        console.log("Contentrealtime div not found");
      }
    } else {
      console.log("Content div not found");
    }
  }

  runurl();
});
