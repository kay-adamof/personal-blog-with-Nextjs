import { IconSvgProps } from '@/types/IconSvgProps';
import iconSize from '@/constants/iconSize';

export const CheckLinerIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={iconSize}
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={iconSize}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
