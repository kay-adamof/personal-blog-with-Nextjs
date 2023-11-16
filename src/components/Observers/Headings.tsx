import { useInView } from 'react-intersection-observer'

const className = {
  h2InView: 'text-rose-700',
}

export const SyncWithToc = ({
  children,
  id,
}: {
  children: React.ReactNode
  id: string | undefined
}) => {
  if (!id) {
    return <>{children}</>
  }

  const { ref } = useInView({
    threshold: 1,
    rootMargin: '-20% 0% -35% 0px',
    onChange: (inView) => {
      if (inView) {
        const element = document.querySelector(`a.toc-link[href*='${id}']`)
        element?.classList.add(`${className.h2InView}`)
      } else {
        const element = document.querySelector(`a.toc-link[href*='${id}']`)
        element?.classList.remove(`${className.h2InView}`)
      }
    },
  })

  return <div ref={ref}>{children}</div>
}
