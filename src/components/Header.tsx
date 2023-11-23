import { Logo } from './Logo'
import { HeaderNav } from './HeaderNav'

export function Header() {
  return (
    <header className='sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md'>
      <div className='container mx-auto pl-6 pr-6'>
        <div className='flex h-16 justify-between gap-4 md:gap-8'>
          <Logo />
          <HeaderNav />
        </div>
      </div>
    </header>
  )
}
