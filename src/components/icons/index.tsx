import * as TI from '@tabler/icons-react'

const size = '1.8rem' as const
export type DefaultIconSize = typeof size

export const LightModeIcon = (props: Omit<TI.TablerIconsProps,'size'>) => {
  return (
    <TI.IconSunHigh
      size={size}
      {...props}
    />
  )
}
export const DarkModeIcon = (props: Omit<TI.TablerIconsProps,'size'>) => {
  return (
    <TI.IconMoonStars
      size={size}
      {...props}
    />
  )
}
export const TocIcon = (props: Omit<TI.TablerIconsProps,'size'>) => {
  return (
    <TI.IconListTree
      size={size}
      {...props}
    />
  )
}
