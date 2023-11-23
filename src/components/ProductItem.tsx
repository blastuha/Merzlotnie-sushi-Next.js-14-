import Link from 'next/link'
import { ImageWrapper } from './ImageWrapper'

import { Sushi } from '@/types'

interface ProductItemProps<T> {
  product: T
  loading: 'eager' | 'lazy'
  priority?: boolean
}

export const ProductItem: React.FC<ProductItemProps<Sushi>> = ({
  product,
  loading,
  priority,
}) => {
  return (
    <li data-testid='ProductElement'>
      <Link
        href={`/products/${product.id}`}
        key={product.id}
      >
        <div>
          {product?.photo && (
            <ImageWrapper
              loading={loading}
              src={product.photo}
              alt='product_img'
              width={512}
              height={512}
              sizes={'512px'}
              priority={priority}
            />
          )}
          <div className='mt-2 flex justify-between'>
            <div>
              <h3 className='mt-1 text-sm font-semibold text-neutral-900'>
                {product.title}
              </h3>
              <p
                className='mt-1 text-sm text-neutral-500'
                data-testid='ProductElement_Category'
              >
                {product.categoryRu}
              </p>
            </div>
            <p
              className='mt-1 text-sm font-medium text-neutral-900'
              data-testid='ProductElement_PriceRange'
            >
              {product.price}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
