import { keyframes } from "styled-components";

// Grows vertically from 0 max-height to 100vh max-height
export const growIn = keyframes`
0%{
    max-height: 0px;
}
100%{
    max-height: 100vh;
}
`;

// Bouncing animation with startY
export const bounce = (startY) => keyframes`
    0%{
      transform: translateY(${startY}px);
    }
    25%{
      ${
        startY === 0
          ? `transform: translateY(${startY === 0 ? startY + 2.5 : 0}px);`
          : ``
      }
    }
    50%{
      transform: translateY(${-startY}px);
    }
    75%{
      ${
        startY === 0
          ? `transform: translateY(${startY === 0 ? startY - 2.5 : 0}px);`
          : ``
      }
    }
    100%{
      transform: translateY(${startY}px);
    }
`;

// Expands into frame from 0 width/height to set width/height
export const popIn = (w, h, offset) => keyframes`
    0% {
        width:0px;
        height:0px;
    }
    80% {
      width: ${w + offset}px;
      height: ${h + offset}px;
    }
    100% {
        width: ${w}px;
        height: ${h}px;
    }
`;

// Expands into frame from scale 0 to scale 1, going over in the middle
export const popInScale = () => keyframes`
0% {
  transform: scale(0);
}
50% {
  transform: scale(1.2);
}
`;

// Expands into frame from scale 0 to scale 1, centering the element
export const popInScaleCentered = () => keyframes`
0% {
  transform: translate(-50%, -50%) scale(0);
}
50% {
  transform: translate(-50%, -50%) scale(1.1);
}
100% {
  transform: translate(-50%, -50%) scale(1);
}
`;

// Slides in from the bottom of the screen
export const slideInFromBottom = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }
`;

// Wobbles the element left and right
export const wobble = keyframes`
  0%{
    transform: translateX(0px);
  }
  25%{
    transform: translateX(-5px);
  }
  50%{
    transform: translateX(0px);
  }
  75%{
    transform: translateX(5px);
  }
  100%{
    transform: translateX(0px);
  }
`;

// Fades into frame from opacity 0 to opacity 1
export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
