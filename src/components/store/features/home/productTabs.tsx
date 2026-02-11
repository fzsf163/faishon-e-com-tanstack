import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsGroupProduct() {
  return (
    <Tabs defaultValue='bestDeals' className=''>
      <TabsList className='flex w-fit mx-auto'>
        <TabsTrigger value='bestDeals'>BEST DEALS</TabsTrigger>
        <TabsTrigger value='bestSellers'>BEST SELLERS</TabsTrigger>
      </TabsList>
      <TabsContent value='bestDeals'>
        <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10'>
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index}>
              <Card>
                <CardContent className='flex h-[14rem] items-center justify-center p-6 '>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
                <CardFooter className='flex items-center justify-center gap-2'>
                  <Button className='dark:text-foreground'>Buy Now</Button>
                  <Button variant={'outline'}>Add to cart</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value='bestSellers'>
        <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Card>
                <CardContent className='flex h-[14rem] items-center justify-center p-6 '>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
                <CardFooter className='flex items-center justify-center gap-2'>
                  <Button className='dark:text-foreground'>Buy Now</Button>
                  <Button variant={'outline'}>Add to cart</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
