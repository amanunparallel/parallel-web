const app = document.getElementById("app");
const appafter = document.getElementById("appafter");

function FirstOne() {
  // Turn Opacity of app to 1 before running the function
  app.style.opacity = 1;
  // Turn Opacity of appafter to 100 before running the function

  const typewriter = new Typewriter(app, {
    loop: false,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString("How do I ")
    .start()
    .callFunction(() => {
      const cursorTypewriterOne = app.querySelector(".Typewriter__cursor");
      console.log(cursorTypewriterOne);
      cursorTypewriterOne.style.display = "none";

      // Stop this typewriter and call the SecondOne typewriter after completion
      typewriter.pause();
      SecondOne();
    });
}

function SecondOne() {
  appafter.style.opacity = 1;
  const typewriterNew = new Typewriter(appafter, {
    loop: true,
    delay: 75,
  });

  typewriterNew
    .typeString("build AI solutions for my product?")
    .pauseFor(1000)
    .deleteChars(34)
    .typeString("design for AI?")
    .pauseFor(1000)
    .deleteChars(14)
    .typeString("solve real-world problems with AI?")
    .pauseFor(1000)
    .deleteChars(34)
    .typeString("think beyond ChatGPT for X?")
    .pauseFor(1000)
    .deleteChars(27)
    .start();
}

// Call the FirstOne function to start the process
FirstOne();
