import { ShoppingBag, ShoppingCart } from 'lucide-react'
import { Carousel_Images } from '@/assets/imageObj'
import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsGroupProduct() {
  const ismobile = useIsMobile()
  return (
    <Tabs defaultValue='bestDeals' className=''>
      <TabsList className='flex w-fit mx-auto'>
        <TabsTrigger value='bestDeals'>BEST DEALS</TabsTrigger>
        <TabsTrigger value='bestSellers'>BEST SELLERS</TabsTrigger>
      </TabsList>
      <TabsContent value='bestDeals'>
        <div className='mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 p-2 sm:p-0 sm:gap-10'>
          {/*{Ready_For_Order.map((R) => (
            <div key={R.name}>
              <Card className='border-none'>
                <CardContent className='flex h-32 sm:h-56 items-center justify-center sm:p-6'>
                  <img
                    className='shadow-sm rounded h-full w-full'
                    src={R.href}
                    alt={R.name}
                  ></img>
                </CardContent>
                <CardFooter className='flex items-center justify-center gap-2'>
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
          ))}*/}
        </div>
      </TabsContent>
      <TabsContent value='bestSellers'>
        <div className='mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 p-2 sm:p-0 sm:gap-10'>
          {Carousel_Images.map((R) => (
            <div key={R.name}>
              <Card className='border-none'>
                <CardContent className='flex h-32 sm:h-56 items-center justify-center sm:p-6'>
                  <img
                    className='shadow-sm rounded h-full w-full'
                    src={R.href}
                    alt={R.name}
                  ></img>
                </CardContent>
                <CardFooter className='flex items-center justify-center gap-2'>
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
      </TabsContent>
    </Tabs>
  )
}
