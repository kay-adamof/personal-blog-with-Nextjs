import {
  IconMoonStars,
  IconSunHigh,
  IconListTree,
  TablerIconsProps,
  IconSun,
} from '@tabler/icons-react'

const size = '1.8rem' as const
export type DefaultIconSize = typeof size

const makeIcon = (IconName: (props: TablerIconsProps) => JSX.Element) => {
  return (props: Omit<TablerIconsProps, 'size'>): JSX.Element => (
    <IconName
      size={size}
      {...props}
    />
  )
}

export const LightModeIcon = makeIcon(IconSun)

export const DarkModeIcon = makeIcon(IconMoonStars)

export const TocIcon = makeIcon(IconListTree)
