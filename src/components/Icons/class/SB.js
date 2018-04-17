import React from 'react';
import classNames from 'classnames';

export default ({ class: $class, className, classColor, invert, circle, ...props }) => {
  const hl = classColor ? $class.color : 'black';
  const bg = 'white';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 550"
      className={classNames('svg svg-class svg-class-SB', className)}
      {...props}
    >
      {circle && <circle cx="275" cy="275" r="275" fill={invert ? hl : bg} />}
      <g fill={invert ? bg : hl} transform="matrix(1.33333 0 0 -1.33333 -132.792 802.022)">
        <path d="M117.144 406.066l264.228 75.281 35.589-124.844-58.143 29.823 11.874-43.007-58.33 30.227 12.059-43.41-58.763 31.497 12.494-44.68-58.462 30.187 12.207-43.37-58.85 29.62 12.579-42.804-58.492 29.722-19.306 69.126c-1.999 7.161 2.163 14.587 9.316 16.632m385.537 17.385l-12.912 44.76c-3.162 10.935-10.386 20.003-20.399 25.513-9.998 5.526-21.515 6.836-32.459 3.674l-40.07-11.556 10.851-38.52 40.318 11.626a2.4 2.4 0 0 0 .73.093 2.6 2.6 0 0 0 1.285-.349c.45-.24 1.04-.72 1.287-1.565l12.912-44.767c.232-.845 0-1.565-.248-2.014-.264-.45-.729-1.047-1.58-1.295l-40.613-11.704 10.866-38.527 40.844 11.781c10.928 3.147 19.981 10.393 25.515 20.391 5.518 9.998 6.82 21.523 3.673 32.46" />
      </g>
    </svg>
  );
};