import Link from 'next/link'
import { companyName } from '@/constants'

export const Logo = () => {
  return (
    <div className='flex items-center font-bold whitespace-nowrap'>
      <Link href='/'>{companyName}</Link>
    </div>
  )
}
