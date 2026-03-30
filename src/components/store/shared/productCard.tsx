import { Heart, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type Products = {
  name: string
  href: string
  price?: string | null
  oldprice?: string | null
  discount?: string | null
}

export default function ProductCard({
  href,
  name,
  price,
  oldprice,
  discount,
}: Products) {
  return (
    <div className='max-h-112 h-full w-full  max-w-72 relative group'>
      <div className='flex items-center justify-between absolute w-full p-3'>
        {discount ? (
          <Badge className='rounded-full bg-white font-medium text-muted-foreground hover:bg-white select-none'>
            {discount}
          </Badge>
        ) : (
          <div className='bg-transparent select-none' />
        )}
        <Button
          variant={'outline'}
          size={'icon'}
          className='bg-white hover:bg-blue-100 cursor-pointer rounded-theme opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300'
        >
          <Heart></Heart>
        </Button>
      </div>
      <img src={href} alt={name} className='rounded-theme'></img>
      <div className='flex items-center justify-between'>
        <div className='mt-3'>
          <p className='text-sm text-muted-foreground leading-5'>{name}</p>
          <div className='flex items-center justify-start gap-3'>
            <p className='font-bold text-xl'>
              <span className='font-extrabold'>&#x09F3;</span>
              {price}
            </p>
            {oldprice ? (
              <p className='text-muted-foreground text-lg line-through'>
                <span className='font-black'>&#x09F3;</span>
                {oldprice}
              </p>
            ) : null}
          </div>
        </div>
        <Button
          variant={'outline'}
          size={'icon'}
          className='bg-accent hover:bg-blue-100 cursor-pointer rounded-theme'
        >
          <ShoppingCart></ShoppingCart>
        </Button>
      </div>
    </div>
  )
}
