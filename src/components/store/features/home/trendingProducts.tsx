import { productsNewArrivals, productsTopSellings } from '@/assets/imageObj'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProductCard from '../../shared/productCard'

export default function TrendingProducts() {
  return (
    <div>
      <div className='text-center space-y-2'>
        <p className='font-semibold sm:text-2xl'>Trending Products</p>
      </div>
      <Tabs defaultValue='topSellings' className='mt-3 rounded-theme'>
        <TabsList className='flex w-fit mx-auto rounded-theme'>
          <TabsTrigger value='topSellings'>Top Sellings</TabsTrigger>
          <TabsTrigger value='newArrivals'>New Arrivals</TabsTrigger>
        </TabsList>
        <TabsContent value='topSellings'>
          <div className='grid grid-rows-2 grid-cols-4 gap-7 mt-4'>
            {productsTopSellings.map((p) => {
              return (
                <div key={p.href}>
                  <ProductCard
                    href={p.href}
                    name={p.name}
                    price={p.price}
                    oldprice={p.oldprice}
                    discount={p.discount}
                  ></ProductCard>
                </div>
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value='newArrivals'>
          <div className='grid grid-rows-2 grid-cols-4 gap-7 mt-4'>
            {productsNewArrivals.map((p) => {
              return (
                <div key={p.href}>
                  <ProductCard
                    href={p.href}
                    name={p.name}
                    price={p.price}
                    oldprice={p.oldprice}
                    discount={p.discount}
                  ></ProductCard>
                </div>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
