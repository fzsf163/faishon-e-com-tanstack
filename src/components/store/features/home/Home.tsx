import { Link } from '@tanstack/react-router'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
import { Ctg_List } from '@/assets/cateogryList'
import { Ready_For_Order, SideBanner_Images } from '@/assets/imageObj'
import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProductCarousel } from '../../shared/productCarousel'
import { CarouselMain } from './carousel'
import TabsGroupProduct from './productTabs'

export function Home() {
  const ismobile = useIsMobile()
  return (
    <div>
      <div className='flex flex-shrink-0 items-stretch flex-wrap lg:flex-nowrap justify-center gap-5 sm:mt-10'>
        <CarouselMain></CarouselMain>
        <div className='sm:grid grid-cols-1 gap-5 h-fit hidden'>
          {SideBanner_Images.map((S) => {
            return (
              <img
                className='h-[19.2rem] w-full rounded-lg'
                src={S.href}
                key={S.name}
                alt={S.name}
              ></img>
            )
          })}
        </div>
      </div>

      <div className='mt-2 sm:mt-20 grid grid-cols-3 sm:grid-cols-6 gap-5 sm:gap-10 sm:max-w-screen-2xl mx-auto w-fit items-center justify-around p-5'>
        {Ctg_List.map((C) => (
          <div key={C.name}>
            <Card className='border-none shadow-none'>
              <CardContent className='grid grid-cols-1 gap-2 place-items-center'>
                <p className='rounded-full p-6 bg-slate-200'>{C.icon}</p>
                <p className='font-semibold text-sm sm:text-lg text-nowrap'>
                  {C.name}
                </p>{' '}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className='sm:mt-10'>
        <div className='text-center space-y-2'>
          <p className='font-semibold sm:text-2xl'>FEATURED CATEGORIES</p>
          <p className='font-normal sm:text-xl'>
            Get your desired product from featured category
          </p>
        </div>
        <div className=' mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 max-w-screen-2xl mx-auto p-2 sm:p-0'>
          {Ready_For_Order.map((R) => (
            <div key={R.name}>
              <Card>
                <CardContent className='flex items-center justify-center flex-col gap-2 p-3 sm:p-2'>
                  <img
                    className='aspect-[4/3] bg-slate-400 rounded-md w-full'
                    src={R.href}
                    alt={R.name}
                  ></img>
                  <div className='text-center sm;p-3'>
                    <Link
                      to='/category/$name'
                      params={{ name: R.name }}
                      className='font-semibold capitalize text-sm sm:text-lg'
                    >
                      Category {R.name}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className=' mt-5 sm:mt-10'>
        <p className='font-semibold sm:text-2xl text-center'>
          Ready for Order 🔥
        </p>
        <div className='flex items-center justify-center mt-5 sm:mt-10'>
          <ProductCarousel></ProductCarousel>
        </div>
      </div>

      <div className='mt-5 sm:mt-10'>
        <p className='font-semibold sm:text-2xl text-center'>
          Featured Products
        </p>
        <div className=' mt-5 sm:mt-10 max-w-screen-2xl mx-auto'>
          <TabsGroupProduct></TabsGroupProduct>
        </div>
      </div>

      <div className='mt-10 max-w-screen-2xl mx-auto  grid sm:grid-cols-2 gap-4 p-2 sm:p-0'>
        {SideBanner_Images.map((S) => {
          return (
            <div key={S.name}>
              <img
                className='shadow rounded h-full w-full'
                src={S.href}
                alt={S.name}
              ></img>
            </div>
          )
        })}
      </div>

      <div className='mt-10'>
        <p className='font-semibold sm:text-2xl text-center'>New Arrival</p>
        <p className='font-normal text-base text-center mt-4 underline underline-offset-8 decoration-orange-300 decoration-[2px]'>
          Gadgets
        </p>
        <div className=' mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 p-2 sm:p-0 sm:gap-10 max-w-screen-2xl mx-auto'>
          {Ready_For_Order.map((R) => (
            <div key={R.name}>
              <Card className='space-y-4'>
                <CardContent className='flex sm:h-[14rem] items-center justify-center p-0'>
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
