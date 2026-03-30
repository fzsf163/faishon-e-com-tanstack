import { StarFilledIcon } from '@radix-ui/react-icons'
import Autoplay from 'embla-carousel-autoplay'
import { Heart, ShoppingCartIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious, // type CarouselApi,
} from '@/components/ui/carousel'

const styles = [
  {
    bg: 'bg-red-100',
  },
  {
    bg: 'bg-sky-100',
  },
]

const latestOffers = [
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '890',
    href: '/public/nexf/product/9.png',
    oldprice: '660',
    discount: '-20%',
    description:
      'This block will collect data from that specific products description. A few lines will be displayed here and the rest will get three dot...',
    review: '3435',
    stars: '5',
    storename: 'Nilam Fashion',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '990',
    href: '/public/nexf/product/10.png',
    oldprice: '620',
    discount: '-10%',
    description:
      'This block will collect data from that specific products description. A few lines will be displayed here and the rest will get three dot...',
    review: '3435',
    stars: '5',
    storename: 'Nilam Fashion',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '320',
    href: '/public/nexf/product/11.png',
    description:
      'This block will collect data from that specific products description. A few lines will be displayed here and the rest will get three dot...',
    review: '3435',
    stars: '5',
    storename: 'Nilam Fashion',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '560',
    href: '/public/nexf/product/12.png',
    oldprice: '660',
    description:
      'This block will collect data from that specific products description. A few lines will be displayed here and the rest will get three dot...',
    review: '3435',
    stars: '5',
    storename: 'Nilam Fashion',
  },
]

export default function LatestOfersCarousel() {
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
            const style = styles[index % styles.length]
            return (
              <CarouselItem key={L.name + index} className='sm:basis-1/2'>
                <div className={`grid grid-cols-2 ${style.bg} rounded-theme`}>
                  <div>
                    <img
                      src={L.href}
                      alt={L.name}
                      className='rounded-theme h-full w-full object-center'
                    ></img>
                  </div>
                  <div
                    className={`rounded-theme grid place-content-evenly pl-6`}
                  >
                    <p className='flex items-center justify-start gap-2'>
                      <p className='flex items-center justify-start'>
                        {Array.from({ length: Number(L.stars) }).map((_, i) => {
                          return (
                            <div key={i}>
                              <StarFilledIcon
                                className='rounded-theme'
                                color='green'
                              ></StarFilledIcon>
                            </div>
                          )
                        })}
                      </p>
                      <span className='text-muted-foreground'>
                        {L.review} Reviews
                      </span>
                    </p>
                    <div>
                      <p className='font-semibold text-lg'>{L.name}</p>
                      <p className='text-muted-foreground text-sm'>
                        {L.description}
                      </p>
                    </div>
                    <p className='text-muted-foreground font-extralight text-sm'>
                      Store: {L.storename}
                    </p>
                    <div className='space-y-2'>
                      <Badge className='rounded-full bg-red-100/40 text-red-500 shadow-none w-fit'>
                        {L.discount ? L.discount + 'OFF' : null}
                      </Badge>
                      <div className='flex items-baseline gap-2 justify-start'>
                        <p className='font-semibold text-xl'>
                          {' '}
                          <span className='font-extrabold'>&#x09F3;</span>
                          {L.price}
                        </p>
                        <p className='font-semibold text-muted-foreground line-through text-sm'>
                          {' '}
                          <span className='font-extrabold'>&#x09F3;</span>
                          {L.oldprice}
                        </p>
                      </div>
                      <div className='flex items-center justify-start gap-2'>
                        <Button className='rounded-theme'>
                          <ShoppingCartIcon></ShoppingCartIcon> Add to cart
                        </Button>
                        <Button
                          size={'icon'}
                          variant={'outline'}
                          className='rounded-theme'
                        >
                          <Heart></Heart>
                        </Button>
                      </div>
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
