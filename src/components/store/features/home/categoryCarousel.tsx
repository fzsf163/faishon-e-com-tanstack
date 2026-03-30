import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight } from 'lucide-react'
import { CategoryBlocks } from '@/assets/imageObj'
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
    bg: 'bg-blue-100',
    btn: 'bg-[#5753C6]',
  },
  {
    bg: 'bg-red-100',
    btn: 'bg-[#DF3478]',
  },
  {
    bg: 'bg-sky-100',
    btn: 'bg-[#0588F0]',
  },
  {
    bg: 'bg-neutral-100',
    btn: 'bg-[#0D9B8A]',
  },
]

export function CategoryCarousel() {
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
          {CategoryBlocks.map((R, index) => {
            const style = styles[index % styles.length]
            return (
              <CarouselItem key={R.name + index} className='sm:basis-1/4'>
                <div className='p-2 max-w-80 sm:min-w-71.5'>
                  <div className=' rounded-theme relative z-0 overflow-hidden'>
                    <div className='flex h-full w-full max-h-49.25 sm:h-56 items-center justify-between rounded-theme gap-2'>
                      <div
                        className='h-full flex flex-col items-center justify-center gap-7 pl-4 pt-10
                      '
                      >
                        <div className='w-full'>
                          <p className='font-semibold text-xl dark:text-accent'>
                            {R.name}
                          </p>
                          <p className='text-muted-foreground text-sm'>
                            {R.productsCount} Products
                          </p>
                        </div>
                        <div className='w-full'>
                          <Button
                            size={'sm'}
                            className={`${style.btn} dark:text-foreground`}
                          >
                            <p className='text-sm'>Shop Now</p>{' '}
                            <ArrowRight></ArrowRight>
                          </Button>
                        </div>
                      </div>
                      <img
                        className='h-full w-full max-w-50 max-h-66 rounded-theme bg-inherit object-contain relative -z-10'
                        src={R.href}
                        alt={R.name}
                      ></img>
                      <div
                        className={`${style.bg} w-full sm:h-40 -z-30 absolute bottom-0 rounded-theme`}
                      ></div>
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
