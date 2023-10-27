import { IconSvgProps } from '@/types/IconSvgProps';
// import {size} from './copy'

export const Check = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={12}
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={12}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
