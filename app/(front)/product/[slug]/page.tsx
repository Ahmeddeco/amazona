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
			<div className='my-2'>
				<Link href={'/'}>back to products</Link>
			</div>
			<div className='grid md:grid-cols-4 md:gap-3'>
				<div className='md:col-span-2'>
					<Image
						src={product.image}
						alt={product.name}
						width={640}
						height={640}
						sizes='100vw'
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
				<div className=''>
					<ul className='space-y-4'>
						<li>
							<h1 className='text-xl'>{product.name}</h1>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
