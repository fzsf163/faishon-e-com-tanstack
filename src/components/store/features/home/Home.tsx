import { ArrowRight } from 'lucide-react'
import { Ctg_List } from '@/assets/cateogryList'
import { productsTopSellings, SideBanner_Images } from '@/assets/imageObj'
// import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { ProductCarousel } from '../../shared/productCarousel'
import { CarouselMain } from './carousel'
import { CategoryCarousel } from './categoryCarousel'
import CustomerReviewCarousel from './customerCarousel'
import FeaturedShowCase from './featuredShowcase'
import LatestOfersCarousel from './latestOffersCarousel'
import TrendingProducts from './trendingProducts'

export function Home() {
  // const ismobile = useIsMobile()
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

      <div className='sm:mt-25'>
        <TrendingProducts></TrendingProducts>
      </div>

      <div className='sm:mt-25'>
        <p className='font-semibold sm:text-2xl text-center'>Latest Offers</p>
        <div className='flex items-center justify-center mt-5 sm:mt-10'>
          <LatestOfersCarousel></LatestOfersCarousel>
        </div>
      </div>

      <div className='sm:mt-25'>
        <p className='font-semibold sm:text-2xl text-center'>
          Tshirt Collection
        </p>
        <Button className='rounded-theme float-end mr-3 bg-gray-100 shadow-none text-foreground'>
          View All <ArrowRight></ArrowRight>
        </Button>
        <div className='flex items-center justify-center mt-5 sm:mt-10'>
          <ProductCarousel
            product_object={productsTopSellings}
          ></ProductCarousel>
        </div>
      </div>

      <div className='sm:mt-25'>
        <p className='font-semibold sm:text-2xl text-center'>
          Panjabi Collection
        </p>
        <Button className='rounded-theme float-end mr-3 bg-gray-100 shadow-none text-foreground'>
          View All <ArrowRight></ArrowRight>
        </Button>
        <div className='flex items-center justify-center mt-5 sm:mt-10'>
          <ProductCarousel
            product_object={productsTopSellings}
          ></ProductCarousel>
        </div>
      </div>

      <div className='mt-25 max-w-(--breakpoint-2xl) mx-auto  grid sm:grid-cols-2 gap-4 p-2 sm:p-0'>
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

      <div className='mt-25'>
        <p className='font-semibold sm:text-2xl text-center'>Customer Review</p>
        <div className='mt-10'>
          <CustomerReviewCarousel></CustomerReviewCarousel>
        </div>
      </div>

      <div className='sm:mt-25'>
        <p className='font-semibold sm:text-2xl text-center'>
          Featured Showcase
        </p>
        <div className='mt-10'>
          <FeaturedShowCase></FeaturedShowCase>
        </div>
      </div>
    </div>
  )
}
