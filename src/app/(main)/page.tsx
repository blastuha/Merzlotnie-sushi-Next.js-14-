import { getAllSushi } from '@/actions/getAllSushi'
import { ProductList } from '@/components/ProductList'

export const runtime = 'edge'

export const metadata = {
  description: 'Merzlotnie Sushi full catalog.',
  openGraph: {
    type: 'website',
  },
}

export default async function Page({
  searchParams,
}: {
  searchParams: { sortby?: string; order?: string }
}) {
  const { sortby, order } = searchParams
  const allSushi = await getAllSushi(sortby, order)

  return (
    <main>
      <section className='pt-6 pb-16'>
        <ProductList products={allSushi} />
      </section>
    </main>
  )
}
