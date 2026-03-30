import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, // type CarouselApi,
} from '@/components/ui/carousel'

type Product = {
  name: string
  href: string
  productsCount?: string
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
            <CarouselItem key={R.name} className='sm:basis-1/6'>
              <div className='p-2'>
                <Card className='border-none h-fit space-y-4'>
                  <CardContent className='flex h-full w-full sm:h-56 items-center justify-center p-0'>
                    <img
                      className='h-full w-full sm:rounded-lg'
                      src={R.href}
                      alt={R.name}
                    ></img>
                  </CardContent>
                  <CardFooter className='flex items-center justify-center gap-2'>
                    <Button className='dark:text-foreground'>Buy Now</Button>
                    <Button variant={'outline'}>Add to cart</Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-10 top-1/3' />
        <CarouselNext className='absolute right-10 top-1/3' />
      </Carousel>
    </div>
  )
}
