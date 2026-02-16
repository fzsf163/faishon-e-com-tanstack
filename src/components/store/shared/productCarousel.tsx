// import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Ready_For_Order } from '@/assets/imageObj'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, // type CarouselApi,
} from '@/components/ui/carousel'

export function ProductCarousel() {
  // const [api, setApi] = useState<CarouselApi>()
  // const [current, setCurrent] = useState(0)
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   if (!api) {
  //     return
  //   }

  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)

  //   api.on('select', () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])

  return (
    <div className='w-full max-w-screen-2xl'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        // setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {Ready_For_Order.map((R) => (
            <CarouselItem key={R.name} className='sm:basis-1/6'>
              <div className='p-2'>
                <Card className='border-none h-fit space-y-4'>
                  <CardContent className='flex h-full w-full sm:h-[14rem] items-center justify-center p-0'>
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
