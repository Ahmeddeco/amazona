import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'

const ProductItem = ({ product }: { product: Product }) => {
	return (
		<div className='card bg-base-300 shadow-xl mb-4'>
			<figure className='w-full'>
				<Link href={`/product/${product.slug}`} className='w-full'>
					<Image
						src={product.image}
						alt={product.name}
						width={300}
						height={300}
						className='object-cover h-64 w-full object-top'
					/>
				</Link>
			</figure>
			<div className='card-body'>
				<Link href={`product/${product.slug}`}>
					<h2 className='card-title font-normal'>{product.name}</h2>
				</Link>
				<p className='mb2'>{product.brand}</p>
				<div className='card-actions flex items-center justify-between'>
					<span className='text-2xl'>${product.price}</span>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
