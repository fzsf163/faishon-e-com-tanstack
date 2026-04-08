import { ArrowRight, MessageCircle, MessageSquare } from 'lucide-react'
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
        <div className='col-span-10 sm:col-span-7'>
          <CarouselMain></CarouselMain>
        </div>
        <div className='col-span-3 hidden sm:block'>
          <div className='sm:grid grid-cols-1 gap-6 hidden'>
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

      <div className='mt-2 p-2 sm:mt-6 grid grid-cols-2 grid-rows-auto place-items-start sm:flex gap-4 sm:gap-10 sm:max-w-(--breakpoint-2xl) mx-auto  items-center sm:justify-around bg-[#F4FAFF] dark:bg-accent sm:h-20 w-full rounded-theme'>
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
      <div className=' sm:mt-25'>
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

      <div className=' grid grid-cols-2 items-center mt-25 rounded-theme relative'>
        <div className='bg-[url("/nexf/cta/cta-bg.jpg")] absolute bottom-0 h-[85%] w-full -z-10 rounded-theme'></div>
        <div className='grid grid-rows-auto gap-3 max-w-xl pl-15'>
          <p className='text-2xl font-semibold'>Need Expert Help</p>
          <p className='text-muted-foreground'>
            For any queries and order related issues, call our helpline or knock
            on our WhatsApp or Facebook page. We are here from 10 am to 8 pm.
          </p>
          <div className='flex items-center justify-start gap-2 mt-3'>
            <Button className='bg-blue-600 rounded-theme'>
              <span>
                <MessageSquare></MessageSquare>
              </span>
              Messenger
            </Button>
            <Button className='bg-teal-600 rounded-theme'>
              <span>
                <MessageCircle></MessageCircle>
              </span>
              Whatsapp
            </Button>
          </div>
        </div>
        <div>
          <img
            src='nexf/cta/representative.png'
            alt='female with a headphone image'
            className='max-h-95'
          ></img>
        </div>
      </div>
    </div>
  )
}
