import { NavLink, SortingParam } from '@/types'

export const companyName = 'MERZLOTNIE SUSHI'

export const sortingParams: SortingParam[] = [
  {
    title: 'No sorting',
    slug: 'no-sorting',
    sortKey: '',
    orderKey: '',
  },
  {
    title: 'Price: Low to high',
    slug: 'price-asc',
    sortKey: '?sortby=price',
    orderKey: '&order=asc',
  },
  {
    title: 'Price: High to low',
    slug: 'price-desc',
    sortKey: '?sortby=price',
    orderKey: '&order=desc',
  },
  {
    title: 'Popularity: Low to high',
    slug: 'popularity-asc',
    sortKey: '?sortby=popularity',
    orderKey: '&order=asc',
  },
  {
    title: 'Popularity: High to low',
    slug: 'popularity-desc',
    sortKey: '?sortby=popularity',
    orderKey: '&order=desc',
  },
]

export const navLinks: NavLink[] = [
  { name: 'Все категории', link: '/' },
  { name: 'Суши', link: '/categories/sushi' },
  { name: 'Роллы', link: '/categories/rolls' },
  { name: 'Горячие блюда', link: '/categories/hot-dishes' },
  { name: 'Супы', link: '/categories/soups' },
]
