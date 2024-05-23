function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine = Engine.create(),
    world = engine.world;
  var containerElement = document.querySelector("[data-cs='video-wrapper']");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      border: "none",
      wireframes: false,
    },
  });

var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight,
    containerWidth + 320,
    160,
    { render: { fillStyle: "transparent" }, isStatic: true },
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true },
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true },
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true },
  ); 

  var border = 1;
  var radius = 20;

  function isMobileDevice() {
    return window.innerWidth <= 991;
  }

  var image1 = Bodies.rectangle(containerWidth / 2 - 600, 0, 54, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776d19a4b4e588bbc582_11.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var image2 = Bodies.rectangle(containerWidth / 2 - 400, 0, 240, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776d0ef3b41c612e4af4_12.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var image3 = Bodies.rectangle(containerWidth / 2 - 200, 0, 200, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776d080eff23432f38f0_13.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var image4 = Bodies.rectangle(containerWidth / 2, 0, 160, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776e1ea8f761f52f63a8_14.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var image5 = Bodies.rectangle(containerWidth / 2 + 200, 0, 248, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776e49f9bc3786cff2ea_15.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var image6 = Bodies.rectangle(containerWidth / 2 + 400, 0, 105, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776ee3d44e117029da2e_16.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var image7 = Bodies.rectangle(containerWidth / 2 + 600, 0, 186, 56, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/654b1d09f45e7fa434ed24ef/6638776dbfd2b7631feebf08_17.svg",
        xScale: 1,
        yScale: 1,
      },
    },
  });

  // for devices above 991 width
  if(window.innerWidth > 768){
    World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]);
  }

  render.canvas.addEventListener("mousemove", function (event) {
    var mousePosition = {
      x: event.clientX - render.canvas.getBoundingClientRect().left,
      y: event.clientY - render.canvas.getBoundingClientRect().top,
    };

    Matter.Composite.allBodies(engine.world).forEach(function (body) {
      var distance = Matter.Vector.magnitude(
        Matter.Vector.sub(body.position, mousePosition),
      );
      if (distance < 50) {
        var forceMagnitude = 1;
        var force = Matter.Vector.mult(
          Matter.Vector.normalise(
            Matter.Vector.sub(body.position, mousePosition),
          ),
          forceMagnitude,
        );
        Matter.Body.applyForce(body, body.position, force);
      }
    });
  });

  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(world, mouseConstraint);

  render.mouse = mouse;

  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag"),
  );

  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            if (bodyUrl != undefined) {
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  Engine.run(engine);

  Render.run(render);
}

//---------------------- 	GSAP FIRST FOLD ANIMATIOIN

document.addEventListener("DOMContentLoaded", () => {
  const csVideoWrapper = document.querySelector("[data-cs='video-wrapper']");
  const csDetailsWrapper = document.querySelector('[data-cs="details"]');
  gsap.set(csDetailsWrapper, { height: "100%", display: "block" });

  function handleAnimationComplete(videoType) {
    if (videoType === "video") {
      const videoPlayer = csVideoWrapper.querySelector("video");
      videoPlayer.play();
    } else if (videoType === "lottie") {
      const lottiePlayer = csVideoWrapper.querySelector(
        '[data-lottie="player"]',
      );
      lottiePlayer.setAttribute("autoplay", "");
      lottiePlayer.addEventListener('ready' , function(){
        lottiePlayer.play();
      })
    } else if (videoType === "matter") {
      initSimulation();
    } else {
      return;
    }
  }

  function animateSection() {
    const { videoType } = csVideoWrapper.dataset;
    const initialY = `-${csDetailsWrapper.offsetHeight}`;

    gsap.set(csVideoWrapper, { y: initialY });

    gsap.to(csVideoWrapper, {
      y: 0,
      ease: "ease.in",
      duration: 1.25,
      onComplete: () => handleAnimationComplete(videoType),
      delay: 1.25,
    });
  }

  if (window.innerWidth > 768) {
    animateSection();
  }
});


// for mobile animation 
function animateImagesonMobile() {
  const images = document.querySelectorAll(".abcd__falling-mobile-image");
  gsap.to(images, { y: "0",duration:1.5 });
}

if (window.innerWidth < 568) {
  animateImagesonMobile();
}
