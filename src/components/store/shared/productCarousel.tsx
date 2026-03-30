import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, // type CarouselApi,
} from '@/components/ui/carousel'
import ProductCard from './productCard'

type Product = {
  name: string
  href: string
  productsCount?: string
  price?: string | null
  oldprice?: string | null
  discount?: string | null
}
type ProductCarouselProps = {
  product_object: Product[]
}

export function ProductCarousel({ product_object }: ProductCarouselProps) {
  return (
    <div className='w-full max-w-(--breakpoint-2xl)'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {product_object.map((R) => (
            <CarouselItem key={R.name} className='sm:basis-1/4'>
              <div className='p-2'>
                <ProductCard
                  href={R.href}
                  name={R.name}
                  price={R.price}
                  oldprice={R.oldprice}
                  discount={R.discount}
                ></ProductCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='text-muted-foreground' />
        <CarouselNext className='text-muted-foreground' />
      </Carousel>
    </div>
  )
}
