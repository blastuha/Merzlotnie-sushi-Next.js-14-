import { getAllSushi } from '@/actions/getAllSushi'
import { ProductList } from '@/components/ProductList'

export const runtime = 'edge'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const description = `All sushi with category "${params.slug}"`

  return {
    description,
  }
}

interface PageProps {
  params: { slug: string }
  searchParams: {
    sortby?: string
    order?: string
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const { sortby, order } = searchParams
  const allSushi = await getAllSushi(sortby, order, params.slug)

  return (
    <section className='mx-auto grid pt-6 pb-16'>
      <ProductList products={allSushi} />
    </section>
  )
}
