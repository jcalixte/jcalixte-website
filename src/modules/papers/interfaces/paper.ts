import { DefineComponent } from 'vue'

export interface Paper {
  title: string
  seoTitle: string
  abstract: string
  isPublished: boolean
  publishedOn: Date
  layout: 'Article'
  content: DefineComponent
}
