import { ProductItem } from './ProductItem'
import { Sushi } from '@/types'

interface ProductListProps<T> {
  products: T[]
}

export const ProductList: React.FC<ProductListProps<Sushi>> = ({
  products,
}) => {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product, index) => (
        <ProductItem
          key={product.id}
          product={product}
          priority={index < 5}
          loading={index < 5 ? 'eager' : 'lazy'}
        />
      ))}
    </ul>
  )
}
