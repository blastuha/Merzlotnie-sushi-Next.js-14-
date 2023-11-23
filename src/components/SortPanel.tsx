'use client'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import { sortingParams } from '@/constants'

export const SortPanel: React.FC = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const sortby = searchParams.get('sortby')
  const order = searchParams.get('order')

  const currentSort = sortby && order ? `${sortby}-${order}` : 'no-sorting'

  const isAllowedRoute = pathname === '/' || pathname.startsWith('/categories/')

  if (!isAllowedRoute) {
    return null
  }

  return (
    <div className='flex-col pt-6 font-[500] max-w-[200px] hidden tablet:flex'>
      {sortingParams.map((item) => (
        <Link
          key={item.slug}
          href={`${pathname}/${item.sortKey}${item.orderKey}`}
          prefetch={false}
        >
          <span
            className={`${
              currentSort === item.slug ? 'text-sky-700' : ''
            } hover:text-sky-700`}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  )
}
