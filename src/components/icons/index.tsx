import {
  IconMoonStars,
  IconSunHigh,
  IconListTree,
  TablerIconsProps,
  IconSun,
} from '@tabler/icons-react'

const size = '1.8rem' as const
export type DefaultIconSize = typeof size

const MakeIcon = (IconName: (props: TablerIconsProps) => JSX.Element) => {
  return (props: Omit<TablerIconsProps, 'size'>): JSX.Element => (
    <IconName
      size={size}
      {...props}
    />
  )
}

export const LightModeIcon = MakeIcon(IconSun)

export const DarkModeIcon = MakeIcon(IconMoonStars)

export const TocIcon = MakeIcon(IconListTree)
