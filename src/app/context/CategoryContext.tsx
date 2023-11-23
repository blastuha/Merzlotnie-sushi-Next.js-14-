'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { NavLink } from '@/types'

const CategoryContext = createContext({
  selectedCategory: { name: '', link: '' } as NavLink,
  setSelectedCategory: (selectedCategory: NavLink) => {},
})

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<NavLink>({
    name: '',
    link: '',
  })

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategory = () => useContext(CategoryContext)
