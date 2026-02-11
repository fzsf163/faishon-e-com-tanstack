import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

export function CarouselMain() {
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
    <div className='w-full max-w-[70%] lg:max-w-screen-lg'>
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex h-[30rem] items-center justify-center p-6 '>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-10' />
        <CarouselNext className='absolute right-10' />
      </Carousel>
      {/*<div className='py-2 text-center text-sm text-muted-foreground'>
        Slide {current} of {count}
        {'⭐'.repeat(current)}
      </div>*/}
      <div className='py-2 flex justify-center gap-1'>
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index === current - 1

          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`text-xl transition-transform duration-200
                ${isActive ? 'text-yellow-400 scale-125 ' : 'text-gray-400 hover:scale-110'}
              `}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Star></Star>
            </button>
          )
        })}
      </div>
    </div>
  )
}
