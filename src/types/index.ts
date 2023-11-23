export interface Sushi {
  id: string
  title: string
  categoryEng: string
  categoryRu: string
  description: string
  price: string
  weight: string
  components: string
  photo: string
}

export type AllSushi = Sushi[]

export interface NavLink {
  name: string
  link: string
}

export interface SortingParam {
  title: string
  slug: string
  sortKey: string
  orderKey: string
}
