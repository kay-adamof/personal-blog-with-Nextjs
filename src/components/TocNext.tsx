import * as R from 'react'

type Heading = Pick<Element, 'id' | 'textContent' | 'nodeName'>

export const TocNext = ({ children }: { children: React.ReactNode }) => {
  const [nestedHeadings, setNestedHeadings] = R.useState<
    { id: string; title: string; items: string | null }[]
  >([])

  R.useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'))

    const innerNestedHeadings:any[] = []

    headingElements.forEach(heading => {
      const { textContent: title, id, nodeName } = heading

      if (nodeName === 'H2') {
        innerNestedHeadings.push({ id, title, itemes: [] })
      } else if (nodeName === 'H3' && innerNestedHeadings.length > 0) {
        innerNestedHeadings[innerNestedHeadings.length-1].itemes.push({ id, title })
      }
    })

    const newNestedHeadings = innerNestedHeadings
    setNestedHeadings(newNestedHeadings)
  }, [])

  return (
    <div>
      <aside
        className='sticky top-6 max-h-[calc(100vh_-_40px)] overflow-auto'
        aria-label='table of contents'
      >

      </aside>
    </div>
  )
}
