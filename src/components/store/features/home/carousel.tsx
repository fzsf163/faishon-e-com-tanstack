import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
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
    <div className='w-full max-w-(--breakpoint-xl)'>
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
                <Card className='border-none h-full max-h-114'>
                  <CardContent className='sm:h-160 w-full p-0'>
                    <img
                      className='h-full w-full max-h-114 sm:rounded-theme object-cover'
                      src={C.href}
                      alt={C.name}
                    ></img>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant={'outline'}
          className='absolute left-10 bg-inherit text-white'
        />
        <CarouselNext
          variant={'outline'}
          className='absolute right-10 bg-inherit text-white'
        />
      </Carousel>

      <div className='py-2 flex justify-center gap-2'>
        {Array.from({ length: count }).map((_, index) => {
          const isActive = index === current - 1

          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className='flex items-center'
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`
                  h-2 rounded-full transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? 'w-6 bg-accent-foreground' // active → stretched
                      : 'w-2 bg-gray-400 hover:bg-gray-500'
                  } // inactive → dot
                `}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
