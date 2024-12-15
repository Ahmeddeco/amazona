import data from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetailsPage({
	params,
}: {
	params: { slug: string }
}) {
	const slug = params.slug
	const product = data.products.find((x) => x.slug === slug)
	if (!product) {
		return <div className=''>Product not found</div>
	}
	return (
		<>
			<div className='grid md:grid-cols-4 md:gap-3 my-6'>
				<div className='md:col-span-2'>
					<Image
						src={product.image}
						alt={product.name}
						width={640}
						height={640}
						sizes='100vw'
						style={{ width: '100%', height: 'auto' }}
						className=' rounded-xl'
					/>
				</div>
				<div className=''>
					<ul className='space-y-4'>
						<li>
							<h1 className='text-xl'>{product.name}</h1>
						</li>
						<li className=''>
							{product.rating} of {product.numReviews} Reviews
						</li>
						<li className=''>{product.brand}</li>
						<div className='divider' />
						<li className=''>
							Discription :<p>{product.description}</p>
						</li>
					</ul>
				</div>
				<div className=''>
					<div className='card bg-base-300 shadow-xl my-3 md:mt-0'>
						<div className='card-body'>
							<div className='mb-2 flex justify-between'>
								<div className=''>Price</div>
								<div className=''>$ {product.price}</div>
							</div>
							<div className='mb-2 flex justify-between'>
								<div className=''>Status</div>
								<div className=''>
									$ {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
								</div>
							</div>
							<div className='card-actions justify-center'>
								<button className='btn btn-primary w-full' type='button'>
									Add to cart
								</button>
								<Link href={'/'} className='w-full'>
									<button
										className='btn btn-primary btn-outline w-full '
										type='button'
									>
										Back to Products
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
