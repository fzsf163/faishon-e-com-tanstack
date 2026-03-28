import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProductCard from '../../shared/productCard'

const productsTopSellings = [
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '890',
    href: '/public/nexf/product/1.png',
    oldprice: '660',
    discount: '-20%',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '990',
    href: '/public/nexf/product/2.png',
    oldprice: '620',
    discount: '-10%',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '320',
    href: '/public/nexf/product/3.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '560',
    href: '/public/nexf/product/4.png',
    oldprice: '660',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '720',
    href: '/public/nexf/product/5.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '670',
    href: '/public/nexf/product/6.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '1120',
    href: '/public/nexf/product/7.png',
    oldprice: '1260',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '2590',
    href: '/public/nexf/product/8.png',
    oldprice: '3660',
  },
]
const productsNewArrivals = [
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '890',
    href: '/public/nexf/product/9.png',
    oldprice: '660',
    discount: '-20%',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '990',
    href: '/public/nexf/product/10.png',
    oldprice: '620',
    discount: '-10%',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '320',
    href: '/public/nexf/product/11.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    price: '560',
    href: '/public/nexf/product/12.png',
    oldprice: '660',
  },
]

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
