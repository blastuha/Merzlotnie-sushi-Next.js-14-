import { type ReactNode } from 'react'
import { CategoryProvider } from '../context/CategoryContext'
import { Header } from '@/components/Header'
import { SortPanel } from '@/components/SortPanel'
import { MobileCategorySelect } from '@/components/MobileCategorySelect'
import { MobileSortSelect } from '@/components/MobileSortSelect'

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <>
      <CategoryProvider>
        <Header />
        <div className='container mx-auto pl-6 pr-6'>
          <main className='flex-1'>
            <MobileCategorySelect />
            <MobileSortSelect />
            <SortPanel />
            {props.children}
          </main>
        </div>
      </CategoryProvider>
    </>
  )
}
