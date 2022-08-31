
const pow = Math.pow;

function easeOutQuart(x: any) {
  return 1 - pow(1 - x, 4);
}

export function animateScroll({ targetPosition, initialPosition, duration }: {
  targetPosition: any, initialPosition: any, duration: number
}) {
  let start: any;
  let position: any;
  let animationFrame: any;

  const requestAnimationFrame = window.requestAnimationFrame;
  const cancelAnimationFrame = window.cancelAnimationFrame;

  // maximum amount of pixels we can scroll
  const maxAvailableScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  function step(timestamp: any) {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    // this just gives us a number between 0 (start) and 1 (end)
    const relativeProgress = elapsed / duration;

    // ease out that number
    const easedProgress = easeOutQuart(relativeProgress);

    // calculate new position for every thick of the requesAnimationFrame
    position =
      initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

    // set the scrollbar position
    window.scrollTo(0, position);

    // Stop when max scroll is reached
    if (
      initialPosition !== maxAvailableScroll &&
      window.scrollY === maxAvailableScroll
    ) {
      cancelAnimationFrame(animationFrame);
      return;
    }

    // repeat until the end is reached
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  }

  animationFrame = requestAnimationFrame(step);
}


const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element: any) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 100 }: {
  id: string, ref?: any, duration?: number
}) => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element = ref ? ref.current : id ? document.getElementById(id) : null;

  if (!element) {
    // log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration
  });
};
