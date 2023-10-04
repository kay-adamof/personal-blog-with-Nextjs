import {IconSvgProps} from "../types";
import {size} from './copy'

export const CheckLinearIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size}
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);