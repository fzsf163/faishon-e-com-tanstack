import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className='w-full max-w-screen-2xl'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 13 }).map((_, index) => (
            <CarouselItem key={index} className='basis-1/6'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex h-[14rem] items-center justify-center p-6 '>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                  <CardFooter className='flex items-center justify-center gap-2'>
                    <Button className='dark:text-foreground'>
                      Buy Now
                    </Button>
                    <Button variant={'outline'}>Add to cart</Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className='py-2 text-center text-sm text-muted-foreground'>
        Slide {current} of {count}
      </div> */}
    </div>
  )
}
