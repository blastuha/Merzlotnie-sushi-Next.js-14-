import { getSushi } from '@/actions/getSushi'
import Link from 'next/link'
import type { Metadata } from 'next'

export const runtime = 'edge'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = await getSushi(params.slug)

  if (!product) {
    return {
      title: 'Product not found',
      description: 'The requested product does not exist',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    title: `${product.title}`,
    description: `${product.description.substring(0, 160)}`,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getSushi(params.slug)

  return (
    <section className='mx-auto grid pt-8 pb-16'>
      <div className='grid gap-10 sm:grid-cols-2'>
        <img
          src={product.photo}
          alt='sushi_photo'
        />
        <div className='flex flex-col'>
          <h2 className='mb-1 text-xl font-bold text-neutral-900'>
            {product.title}
          </h2>
          <span className='mb-8 text-sm font-medium'>{product.categoryRu}</span>

          <div className=''>
            <span className='mr-2 font-bold text-neutral-900'>Цена: </span>
            <span>{product.price} руб.</span>
          </div>

          <div className='mb-6'>
            <span className='mr-2 font-bold text-neutral-900'>Состав: </span>
            <span>{product.components}</span>
          </div>

          <p className='mb-10'>{product.description}</p>
          <div className='flex'>
            <Link href='/'>
              <button className='mr-4 h-12 rounded-md max-w-[10rem] bg-neutral-900 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-neutral-800 '>
                Вернуться
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
