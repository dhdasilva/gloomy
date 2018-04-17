import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-EventReturnToDeck', className)}
    {...props}
  >
    <g className="bg" transform="matrix(1.33333 0 0 -1.33333 0 400)" fill="#231f20">
      <path d="M258.427 140.037c-.267 0-.537.03-.808.095l-7.866 1.882a3.466 3.466 0 0 0-2.565 4.176 3.458 3.458 0 0 0 4.177 2.566l7.866-1.882a3.469 3.469 0 0 0 2.565-4.177 3.468 3.468 0 0 0-3.37-2.66m-23.115 5.528c-.266 0-.537.03-.808.095l-15.248 3.646a3.467 3.467 0 0 0-2.565 4.176 3.458 3.458 0 0 0 4.177 2.566l15.249-3.646a3.468 3.468 0 0 0 2.564-4.177 3.468 3.468 0 0 0-3.369-2.66m-1.013-26.784c-1.18 0-2.33.602-2.978 1.692a3.461 3.461 0 0 0 1.202 4.75l13.467 8.026a3.461 3.461 0 0 0 4.75-1.203 3.463 3.463 0 0 0-1.203-4.75l-13.466-8.026a3.453 3.453 0 0 0-1.772-.489M49.385 107.096a3.46 3.46 0 0 0-2.98 1.693 3.463 3.463 0 0 0 1.204 4.75l13.466 8.026a3.462 3.462 0 0 0 4.75-1.202 3.461 3.461 0 0 0-1.203-4.75l-13.466-8.027a3.431 3.431 0 0 0-1.771-.49m157.979-4.373a3.466 3.466 0 0 0-1.779 6.443l13.467 8.028a3.465 3.465 0 0 0 4.752-1.2 3.464 3.464 0 0 0-1.2-4.752l-13.467-8.029a3.453 3.453 0 0 0-1.773-.49M46.557 92.2c-.266 0-.537.03-.807.094l-7.584 1.815c-6.183 1.477-6.851 4.993-6.851 6.435 0 1.214.426 3.005 2.459 4.641a3.467 3.467 0 0 0 5.324-4.147 9.09 9.09 0 0 1 .679-.187l7.584-1.814a3.467 3.467 0 1 0-.804-6.837m133.869-5.53c-1.18 0-2.331.601-2.978 1.691a3.462 3.462 0 0 0 1.202 4.75l13.469 8.028a3.46 3.46 0 0 0 4.75-1.202 3.463 3.463 0 0 0-1.203-4.75l-13.468-8.028a3.444 3.444 0 0 0-1.772-.49M77.053 84.907c-.266 0-.537.03-.807.095l-15.25 3.646a3.466 3.466 0 0 0-2.565 4.177 3.457 3.457 0 0 0 4.176 2.565l15.249-3.646a3.467 3.467 0 0 0-.803-6.837m30.499-7.295c-.267 0-.537.03-.808.095l-15.25 3.648a3.466 3.466 0 0 0-2.565 4.177c.447 1.86 2.308 3.021 4.177 2.565l15.249-3.648a3.466 3.466 0 1 0-.803-6.837m45.889-6.905a3.465 3.465 0 0 0-3.192 2.112 3.464 3.464 0 0 0 1.836 4.544c.314.134.607.278.869.433l12.23 7.287a3.461 3.461 0 0 0 4.75-1.203 3.464 3.464 0 0 0-1.203-4.75l-12.241-7.295a14.17 14.17 0 0 0-1.7-.853 3.432 3.432 0 0 0-1.35-.275m-15.39-.388c-.266 0-.537.03-.808.095l-15.25 3.646a3.467 3.467 0 0 0 1.612 6.742l15.249-3.646a3.467 3.467 0 1 0-.803-6.837" />
      <path d="M261.27 134.898a3.454 3.454 0 0 0-2.781 1.397 3.459 3.459 0 0 0-.29 3.68c-.174.052-.367.105-.58.156a3.467 3.467 0 0 0-2.566 4.177 3.457 3.457 0 0 0 4.178 2.566c5.153-1.233 6.435-3.919 6.742-5.412.21-1.022.372-3.639-2.636-5.877a3.444 3.444 0 0 0-2.067-.687m-101.763-3.314c-3.69-2.2-9.063-3.416-14.301-3.416-2.354 0-4.68.246-6.815.756L36.879 153.203a21.52 21.52 0 0 0-2.02.596v-24.035s.149-1.857 2.73-2.566c2.583-.709 102.953-24.714 102.953-24.714s7.7-2.285 15.467 2.344c7.766 4.629 103.452 61.641 104.704 62.411.837.514 1.928 1.164 1.928 2.776v23.042z" />
      <path d="M258.482 208.215L156.97 232.493c-4.543 1.086-10.913.369-14.233-1.608L36.798 167.738c-3.319-1.978-2.313-4.46 2.23-5.545l101.513-24.28c4.544-1.086 10.915-.37 14.234 1.61l105.936 63.145c3.321 1.98 2.315 4.46-2.229 5.547" />
    </g>
  </svg>
);