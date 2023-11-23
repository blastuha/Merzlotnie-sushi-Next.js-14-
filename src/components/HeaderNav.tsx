'use client'
import Link from 'next/link'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

export const HeaderNav = () => {
  const pathname = usePathname()

  return (
    <nav
      className='tablet:flex w-full gap-4 lg:gap-6 hidden'
      aria-label='Main navigation'
    >
      <ul className='gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0 flex items-center'>
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`${
              pathname === link.link
                ? 'relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-sky-700 after:w-full after:scale-x-100'
                : ''
            } relative w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-neutral-900 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          >
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
