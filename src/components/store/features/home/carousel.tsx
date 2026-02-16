import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Star } from 'lucide-react'
import { Carousel_Images, SideBanner_Images } from '@/assets/imageObj'
import { useIsMobile } from '@/hooks/use-mobile'
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
  const ismobile = useIsMobile()
  const mblCarosuel_Images = Carousel_Images.concat(SideBanner_Images)
  const carousel_images = ismobile ? mblCarosuel_Images : Carousel_Images
  return (
    <div className='w-full max-w-screen-xl'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnMouseEnter: true,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {carousel_images.map((C) => (
            <CarouselItem key={C.name}>
              <div>
                <Card className='border-none h-fit'>
                  <CardContent className='sm:h-[40rem] w-full p-0'>
                    <img
                      className='h-full w-full sm:rounded-xl'
                      src={C.href}
                      alt={C.name}
                    ></img>
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
