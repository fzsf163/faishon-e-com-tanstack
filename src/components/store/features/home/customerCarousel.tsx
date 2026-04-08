import { StarFilledIcon } from '@radix-ui/react-icons'
import Autoplay from 'embla-carousel-autoplay'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, // type CarouselApi,
} from '@/components/ui/carousel'

const latestOffers = [
  {
    name: 'Rakib Zobair',
    itemreviewed: 'Embroidery Classic Fit Panjabi',
    userpic: 'nexf/product/9.png',
    description:
      'I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep patterns with great accuracy. The design is sleek and lightweight, making it comfortable...',
    stars: '5',
  },
  {
    name: 'Tanzia Siddiqua',
    itemreviewed: 'Embroidery Classic Fit Panjabi',
    userpic: 'nexf/product/10.png',
    description:
      'I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep patterns with great accuracy. The design is sleek and lightweight, making it comfortable...',
    stars: '5',
  },
  {
    name: 'Farzana Eivy',
    itemreviewed: 'Embroidery Classic Fit Panjabi',
    userpic: 'nexf/product/11.png',
    description:
      'I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep patterns with great accuracy. The design is sleek and lightweight, making it comfortable...',
    stars: '5',
  },
  {
    name: 'Jakik Khan',
    itemreviewed: 'Embroidery Classic Fit Panjabi',
    userpic: 'nexf/product/12.png',
    description:
      'I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep patterns with great accuracy. The design is sleek and lightweight, making it comfortable...',
    stars: '5',
  },
  {
    name: 'Jakik Khan2',
    itemreviewed: 'Embroidery Classic Fit Panjabi',
    userpic: 'nexf/product/12.png',
    description:
      'I absolutely love this smartwatch! It tracks my steps, heart rate, and even sleep patterns with great accuracy. The design is sleek and lightweight, making it comfortable...',
    stars: '5',
  },
]

export default function CustomerReviewCarousel() {
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
          {latestOffers.map((L, index) => {
            return (
              <CarouselItem key={L.name + index} className='sm:basis-1/3'>
                <div className='grid grid-cols-1 grid-row-auto place-content-start gap-6 max-h-62 bg-sky-50 rounded-theme p-6'>
                  <div className='rounded-theme grid place-content-start gap-3'>
                    <div className='flex items-center justify-start gap-2'>
                      <p className='flex items-center justify-start'>
                        {Array.from({ length: Number(L.stars) }).map((_, i) => {
                          return (
                            <span key={i}>
                              <StarFilledIcon className='rounded-theme text-orange-400'></StarFilledIcon>
                            </span>
                          )
                        })}
                      </p>
                      <span className='text-muted-foreground'>
                        <Badge className='rounded-full bg-yellow-100/20 text-red-2-500 shadow-none w-fit font-sans text-xs'>
                          Verified Purchase
                        </Badge>
                      </span>
                    </div>
                    <p className='text-muted-foreground text-sm '>
                      {L.description}
                    </p>
                  </div>
                  <hr></hr>
                  <div className='flex items-center justify-start gap-3'>
                    <div className='size-10'>
                      <img
                        src={L.userpic}
                        alt={L.name}
                        className='h-full w-full object-cover rounded-full'
                      ></img>
                    </div>
                    <div>
                      <p className='font-semibold text-sm'>{L.name}</p>
                      <p className='font-sans text-sm text-muted-foreground'>
                        {L.itemreviewed}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious
          variant={'outline'}
          className='text-muted-foreground'
        />
        <CarouselNext variant={'outline'} className='text-muted-foreground' />
      </Carousel>
    </div>
  )
}
