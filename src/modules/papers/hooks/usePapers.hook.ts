import matter from "gray-matter"

interface MdxFile {
  __file: string
}

export const usePapers = () => {
  const papers = Object.values<MdxFile>(
    (import.meta as any).globEagerDefault("/src/papers/**/*.mdx")
  ).map((file) => {
    const content = matter.read(file.__file)
    return matter(content.content)
  })

  return papers
}
