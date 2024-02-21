//* Thank you page animation
function thankyouPageBottomRectanglesAnimation() {
  console.log("matter js working");

  const matterContainer = document.querySelector("#matter-container");
  const THICCNESS = 60;

  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
    element: matterContainer,
    engine: engine,
    options: {
      width: matterContainer.clientWidth,
      height: matterContainer.clientHeight,
      background: "transparent",
      wireframes: false,
      showAngleIndicator: false,
      pixelRatio: window.devicePixelRatio, // Set pixel ratio
    },
  });

  // create rectangles
  const matterContainerWidth = matterContainer.clientWidth;
  const matterContainerHeight = matterContainer.clientHeight;
  let numRectangles = 40;
  if (window.innerWidth < 768) {
    numRectangles = 20;
  }

  const rectangleWidth = 26;
  const rectangleHeight = 26;
  const rectangleSpeed = 2; // Adjust the speed of rectangle movement

  let rectangles = [];

  for (let i = 0; i < numRectangles; i++) {
    let randomX = Math.random() * (matterContainerWidth - rectangleWidth);
    let randomY = Math.random() * (matterContainerHeight - rectangleHeight);
    let randomRotation = Math.random() * Math.PI * 2;

    let rectangle = Bodies.rectangle(
      randomX,
      randomY,
      rectangleWidth,
      rectangleHeight,
      {
        restitution: 0.8,
        render: {
          fillStyle: "black",
        },
      },
    );

    rectangle.rotate = randomRotation;
    Composite.add(engine.world, rectangle);
    rectangles.push(rectangle);
  }

  // create walls
  var ground = Bodies.rectangle(
    matterContainerWidth / 2,
    matterContainerHeight + THICCNESS / 2,
    27184,
    THICCNESS,
    { isStatic: true },
  );

  let leftWall = Bodies.rectangle(
    0 - THICCNESS / 2,
    matterContainerHeight / 2,
    THICCNESS,
    matterContainerHeight * 5,
    { isStatic: true },
  );

  let rightWall = Bodies.rectangle(
    matterContainerWidth + THICCNESS / 2,
    matterContainerHeight / 2,
    THICCNESS,
    matterContainerHeight * 5,
    { isStatic: true },
  );

  let topWall = Bodies.rectangle(
    matterContainerWidth / 2,
    0 - THICCNESS / 2,
    matterContainerWidth + THICCNESS * 2,
    THICCNESS,
    { isStatic: true },
  );

  // add all bodies to the world
  Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);

  // create mouse
  let mouse = Mouse.create(render.canvas);
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(engine.world, mouseConstraint);

  // allow scroll through the canvas
  mouseConstraint.mouse.element.removeEventListener(
    "mousewheel",
    mouseConstraint.mouse.mousewheel,
  );
  mouseConstraint.mouse.element.removeEventListener(
    "DOMMouseScroll",
    mouseConstraint.mouse.mousewheel,
  );

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  function handleResize(matterContainer) {
    // Adjust canvas size and scale for high resolution
    render.canvas.width = matterContainer.clientWidth * window.devicePixelRatio;
    render.canvas.height =
      matterContainer.clientHeight * window.devicePixelRatio;
    render.context.scale(window.devicePixelRatio, window.devicePixelRatio);

    Matter.Body.setPosition(
      ground,
      Matter.Vector.create(
        matterContainer.clientWidth / 2,
        matterContainer.clientHeight + THICCNESS / 2,
      ),
    );

    Matter.Body.setPosition(
      rightWall,
      Matter.Vector.create(
        matterContainer.clientWidth + THICCNESS / 2,
        matterContainer.clientHeight / 2,
      ),
    );

    Matter.Body.setPosition(
      topWall,
      Matter.Vector.create(matterContainer.clientWidth / 2, 0 - THICCNESS / 2),
    );
  }

  window.addEventListener("resize", () => handleResize(matterContainer));

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
        var forceMagnitude = 0.005;
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
}

setTimeout(() => {
  thankyouPageBottomRectanglesAnimation();
}, 3000);
