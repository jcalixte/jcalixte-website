import { Paper } from '@/modules/papers/interfaces/paper'
import { h, FunctionalComponent } from 'vue'

function byDate(a: Paper, b: Paper) {
  return Number(new Date(b.publishedOn)) - Number(new Date(a.publishedOn))
}

function isArray<T>(val: any): val is T[] {
  return Array.isArray(val)
}

const ExcerptOnly: FunctionalComponent = (_props, { slots }) => {
  const mdxDoc = slots.default?.()?.[0]

  if (!mdxDoc) {
    return null
  }

  const mdElements = mdxDoc.children

  if (!isArray(mdElements)) {
    return mdElements
  }

  const excerptIndex = mdElements.findIndex((el) => (el as any).type === 'hr')
  return excerptIndex ? mdElements.slice(0, excerptIndex) : mdElements
}

function withExcerpt(post: Paper) {
  const excerpt: FunctionalComponent = () =>
    h(post, { components: { wrapper: ExcerptOnly } })

  return { ...post, excerpt }
}

export const getPapers = () => {
  const papersFiles = Object.values(
    (import.meta as any).globEagerDefault('../../../papers/**/*.{md,mdx}')
  ) as Paper[]
  return papersFiles.sort(byDate).map(withExcerpt)
}
