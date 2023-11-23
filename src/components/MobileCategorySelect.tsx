'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useCategory } from '@/app/context/CategoryContext'
import { useOutsideClick } from '@/hooks/useClickOutside'
import { navLinks } from '@/constants'
import { NavLink } from '@/types'

export function MobileCategorySelect() {
  // const [selected, setSelected] = useState(navLinks[0])
  const { selectedCategory, setSelectedCategory } = useCategory()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isAllowedRoute = pathname === '/' || pathname.startsWith('/categories/')

  const handleSelect = (link: NavLink) => {
    setSelectedCategory(link)
    setOpen(false)
  }

  useOutsideClick(wrapperRef, () => setOpen(false))

  useEffect(() => {
    const selectedLink = navLinks.find((link) => pathname === link.link)

    if (selectedLink) {
      setSelectedCategory(selectedLink)
    } else {
      setSelectedCategory(navLinks[0])
    }
  }, [pathname])

  if (!isAllowedRoute) {
    return null
  }

  return (
    <div
      ref={wrapperRef}
      className='w-full tablet:hidden pt-6 relative'
    >
      <button
        onClick={() => setOpen(!open)}
        className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none'
      >
        <span className='block truncate'>{selectedCategory.name}</span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <ChevronUpDownIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </span>
      </button>
      {open && (
        <div className='absolute mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 z-[99]'>
          {navLinks.map((link, index) => (
            <div
              key={index}
              className='relative'
            >
              <Link href={link.link}>
                <span
                  className='block cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900'
                  onClick={() => handleSelect(link)}
                >
                  {link.name}
                </span>
              </Link>
              {selectedCategory.name === link.name && (
                <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-sky-700'>
                  <CheckIcon
                    className='h-5 w-5'
                    aria-hidden='true'
                  />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
