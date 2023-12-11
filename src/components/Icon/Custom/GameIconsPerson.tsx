import { useMemo } from 'react';
import { Icon } from './types';

/**
 * The basic image dimensions of the original SVG were width=11, height=18; so to calculate height we take 61% of the height
 */
const PERCENT_OF_WIDTH_RELATIVE_TO_HEIGHT = 0.61;

export const GameIconsPerson: Icon = props => {
  const height = props.size ?? 24;
  const heightAsNum = typeof height === 'number' ? height : Number(height.replace(/\w+/g, ''));
  const width = useMemo(() => {
    return Math.round(heightAsNum * PERCENT_OF_WIDTH_RELATIVE_TO_HEIGHT);
  }, [heightAsNum]);
  return (
    <svg
      height={height}
      width={width}
      viewBox={`0 0 ${width / 1.5} ${heightAsNum / 1.5}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="game-icons:person">
        <path
          id="Vector"
          fill={props.color}
          d="M5.56958 0.800781C4.74812 0.90748 4.00326 1.87108 4.00326 3.11881C4.00326 3.80639 4.2413 4.41453 4.5902 4.83496L5.00644 5.33639L4.366 5.45677C3.91249 5.54202 3.57998 5.78161 3.29574 6.17171C3.0115 6.56184 2.7942 7.10539 2.64191 7.73177C2.36618 8.86661 2.30553 10.2522 2.2959 11.4737H3.80298L4.2168 17.0226C5.26776 17.2598 6.38984 17.2514 7.40203 17.0235L7.76814 11.4737H9.20308C9.20213 10.2373 9.18631 8.83254 8.93646 7.68912C8.79871 7.05863 8.58989 6.51589 8.30224 6.13019C8.01448 5.74452 7.66661 5.50634 7.15744 5.42745L6.50382 5.3262L6.91641 4.80926C7.25022 4.39101 7.47652 3.78984 7.47652 3.11888C7.47652 1.78864 6.6449 0.804051 5.73984 0.804051L5.56958 0.800781Z"
        />
      </g>
    </svg>
  );
};
