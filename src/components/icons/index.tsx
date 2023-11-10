import * as TI from '@tabler/icons-react'

const size = '1.8rem' as const
export type DefaultIconSize = typeof size

const makeIcon = (IconName: (props: TI.TablerIconsProps) => JSX.Element) => {
  return (props: TI.TablerIconsProps) => (
    <IconName
      size={size}
      {...props}
    />
  )
}

export const LightModeIcon2 = makeIcon(TI.IconSunHigh)

export const LightModeIcon = (props: TI.TablerIconsProps) => {
  return (
    <TI.IconSunHigh
      size={size}
      {...props}
    />
  )
}
export const DarkModeIcon = (props: TI.TablerIconsProps) => {
  return (
    <TI.IconMoonStars
      size={size}
      {...props}
    />
  )
}
export const TocIcon = (props: TI.TablerIconsProps) => {
  return (
    <TI.IconListTree
      size={size}
      {...props}
    />
  )
}
