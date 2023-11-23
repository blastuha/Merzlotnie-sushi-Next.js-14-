'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { useCategory } from '@/app/context/CategoryContext'
import { sortingParams } from '@/constants'
import { SortingParam } from '@/types'

export const MobileSortSelect = () => {
  const { selectedCategory } = useCategory()
  const [selected, setSelected] = useState(sortingParams[0])
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isAllowedRoute = pathname === '/' || pathname.startsWith('/categories/')

  const handleSelect = (item: SortingParam) => {
    setSelected(item)
    setOpen(false)
  }

  useOutsideClick(wrapperRef, () => setOpen(false))

  useEffect(() => {
    setSelected(sortingParams[0])
  }, [selectedCategory])

  if (!isAllowedRoute) {
    return null
  }

  return (
    <div
      ref={wrapperRef}
      className='w-full relative tablet:hidden pt-4 pb-4'
    >
      <button
        onClick={() => setOpen(!open)}
        className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none'
      >
        <span className='block truncate'>{selected.title}</span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <ChevronUpDownIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </span>
      </button>
      {open && (
        <div className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5'>
          {sortingParams.map((item) => (
            <div
              key={item.slug}
              className='relative'
            >
              <Link href={`${pathname}${item.sortKey}${item.orderKey}`}>
                <span
                  className='block cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900'
                  onClick={() => handleSelect(item)}
                >
                  {item.title}
                  {selected.slug === item.slug && (
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-sky-700'>
                      <CheckIcon
                        className='h-5 w-5'
                        aria-hidden='true'
                      />
                    </span>
                  )}
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
