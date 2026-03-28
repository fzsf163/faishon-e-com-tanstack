import { ShoppingBag, ShoppingCart } from 'lucide-react'
import { Ctg_List } from '@/assets/cateogryList'
import { Ready_For_Order, SideBanner_Images } from '@/assets/imageObj'
import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProductCarousel } from '../../shared/productCarousel'
import { CarouselMain } from './carousel'
import { CategoryCarousel } from './categoryCarousel'
import TabsGroupProduct from './productTabs'

export function Home() {
  const ismobile = useIsMobile()
  return (
    <div className='container-custom'>
      <div className='grid grid-cols-10 gap-6 mt-6'>
        <div className='col-span-7'>
          <CarouselMain></CarouselMain>
        </div>
        <div className='col-span-3'>
          <div className='sm:grid grid-cols-1 gap-6  hidden'>
            {SideBanner_Images.map((S) => {
              return (
                <img
                  className='h-full md:min-h-54 w-full max-h-54 rounded-lg object-cover'
                  src={S.href}
                  key={S.name}
                  alt={S.name}
                ></img>
              )
            })}
          </div>
        </div>
      </div>

      <div className='mt-6 flex gap-1 sm:gap-10 sm:max-w-(--breakpoint-2xl) mx-auto  items-center justify-around bg-[#F4FAFF] dark:bg-accent h-20 w-full rounded-theme'>
        {Ctg_List.map((C) => (
          <div key={C.name}>
            <div className='border-none shadow-none dark:bg-accent'>
              <div className='flex items-center justify-center gap-2'>
                <img className='' src={C.icon}></img>
                <p className='font-normal text-sm text-nowrap'>{C.name}</p>{' '}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='sm:mt-25'>
        <div className='text-center space-y-2'>
          <p className='font-semibold sm:text-2xl'>Popular Categories</p>
        </div>
        <div className='flex items-center justify-center mt-5 sm:mt-10'>
          <CategoryCarousel></CategoryCarousel>
        </div>
      </div>

      <div className=' mt-5 sm:mt-10'>
        <p className='font-semibold sm:text-2xl text-center'>
          Ready for Order 🔥
        </p>
        <div className='flex items-center justify-center mt-5 sm:mt-10'>
          <ProductCarousel product_object={Ready_For_Order}></ProductCarousel>
        </div>
      </div>

      <div className='mt-5 sm:mt-10'>
        <p className='font-semibold sm:text-2xl text-center'>
          Featured Products
        </p>
        <div className=' mt-5 sm:mt-10 max-w-(--breakpoint-2xl) mx-auto'>
          <TabsGroupProduct></TabsGroupProduct>
        </div>
      </div>

      <div className='mt-10 max-w-(--breakpoint-2xl) mx-auto  grid sm:grid-cols-2 gap-4 p-2 sm:p-0'>
        {SideBanner_Images.map((S) => {
          return (
            <div key={S.name}>
              <img
                className='shadow-sm rounded-theme h-full w-full'
                src={S.href}
                alt={S.name}
              ></img>
            </div>
          )
        })}
      </div>

      <div className='mt-10'>
        <p className='font-semibold sm:text-2xl text-center'>New Arrival</p>
        <p className='font-normal text-base text-center mt-4 underline underline-offset-8 decoration-orange-300 decoration-2'>
          Gadgets
        </p>
        <div className=' mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 p-2 sm:p-0 sm:gap-10 max-w-(--breakpoint-2xl) mx-auto'>
          {Ready_For_Order.map((R) => (
            <div key={R.name}>
              <Card className='space-y-4'>
                <CardContent className='flex sm:h-56 items-center justify-center p-0'>
                  <img
                    src={R.href}
                    alt={R.name}
                    className='h-full w-full'
                  ></img>
                </CardContent>
                <CardFooter className='flex items-center justify-center gap-2 sm:gap-5 pb-2 sm:p-6'>
                  <Button
                    size={ismobile ? 'icon' : 'default'}
                    className='dark:text-foreground rounded-full sm:rounded-md'
                  >
                    {!ismobile ? 'Buy Now' : <ShoppingBag></ShoppingBag>}
                  </Button>
                  <Button
                    size={ismobile ? 'icon' : 'default'}
                    variant={'outline'}
                    className='rounded-full sm:rounded-md'
                  >
                    {!ismobile ? 'Add To Cart' : <ShoppingCart></ShoppingCart>}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
