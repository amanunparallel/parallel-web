let funBtn = document.querySelector("[data-btn='fun']");
let defaultBtn = document.querySelector("[data-btn='default']");
let defaultImg = document.querySelectorAll("[data-img='default']");
let teamMember = document.querySelectorAll("[data-team='member']");
let funGrid = document.querySelector("[data-fun='grid']");

let changeLayout = function () {
  if (funGrid) {
    funGrid.classList.add("active");
  }

  defaultImg.forEach(function (img) {
    img.style.opacity = "0";
  });

  teamMember.forEach(function (member, index) {
    if (index % 2 !== 0) {
      member.style.transform = "translateY(100px)";
    }
  });
};

let defaultLayout = function () {
  if (funGrid) {
    funGrid.classList.remove("active");
  }

  defaultImg.forEach(function (img) {
    img.style.opacity = "1";
  });

  teamMember.forEach(function (member, index) {
    if (index % 2 !== 0) {
      member.style.transform = "translateY(0)";
    }
  });
};

funBtn.addEventListener("click", function () {
  teamMember.forEach(function (el) {
    el.classList.add("is--active");
  });
  changeLayout();
});
defaultBtn.addEventListener("click", function () {
  teamMember.forEach(function (el) {
    el.classList.remove("is--active");
  });
  defaultLayout();
});

// Animation Header

let textWrapper = document.querySelector("[data-team='wrapper']");
let text = document.querySelector("[data-team='text']");

let tl = gsap.timeline({ repeat: -1, onRepeat: updateText });

// Define the animation sequence
tl.to(textWrapper, { width: "102%", duration: 2, ease: "ease-in" }).to(
  textWrapper,
  { width: "0%", duration: 2, ease: "ease-in", delay: 2 }
);

let isDefaultText = true; // Flag to track the text state

// Function to update text
function updateText() {
  if (isDefaultText) {
    text.textContent = "Great work";
    isDefaultText = false;
  } else {
    text.textContent = "Great people";
    isDefaultText = true;
  }
}

// Initial text state
updateText();
