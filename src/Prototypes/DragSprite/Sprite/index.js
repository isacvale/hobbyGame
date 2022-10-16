import React from "react";
import bean from "./dude_spreadsheet_1800_40_0.png";

const spriteSheet = new Image();
spriteSheet.src = bean;

const createSprite = ({
  canvas,
  spriteSheet,
  margin = [30, 0],
  canvasSize = [300, 400],
  spriteSize = [281, 400],
  animations = [{ key: "walkRight", frames: 6, row: 0 }],
}) => {
  const ctx = canvas.getContext("2d");
  canvas.width = canvasSize[0];
  canvas.height = canvasSize[1];

  let currentAnimation = animations[0].key;
  let animation = animations.find((anim) => anim.key === currentAnimation);
  let currentFrame = 0;
  let stagger = 5;
  let stopAnimation = true;
  let animCycle = 0;

  const clearCanvas = () => ctx.clearRect(0, 0, canvasSize[0], canvasSize[1]);

  const animate = () => {
    if (stopAnimation) return;
    clearCanvas();
    ctx.drawImage(
      spriteSheet,
      currentFrame * spriteSize[0] + margin[0],
      animation.row * spriteSize[1] + margin[1],
      spriteSize[0],
      spriteSize[1],
      0,
      0,
      canvasSize[0],
      canvasSize[1]
    );
    const skip = stagger && animCycle % stagger !== 0;
    currentFrame = skip ? currentFrame : (currentFrame + 1) % animation.frames;
    animCycle = animCycle < 1000 * animation.frames ? animCycle + 1 : 0;
    requestAnimationFrame(animate);
  };

  return {
    setAnimation: (key) => {
      currentAnimation = key;
      animation = animations.find((anim) => anim.key === currentAnimation);
    },
    play: () => {
      stopAnimation = false;
      animate();
    },
    stop: () => {
      stopAnimation = true;
    },
    reset: () => (currentFrame = 0),
    setStagger: (x) => (stagger = x),
  };
};

const Sprite = ({ name, color, size }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const canvas = ref.current;
    let sprite = { stop: () => {} };
    if (canvas) {
      sprite = createSprite({
        canvas,
        spriteSheet,
      });
      sprite.play();
    }
    return sprite.stop;
  }, [ref]);
  return (
    <div style={{ pointerEvents: "none" }}>
      <canvas ref={ref} />
    </div>
  );
};

export default Sprite;
