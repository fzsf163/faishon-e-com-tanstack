import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { IconTrash } from '@tabler/icons-react'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function ShoppingCartBox() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className=' cursor-pointer'>
            <ShoppingCart></ShoppingCart>
          </div>
        </DialogTrigger>
        <DialogContent className='rounded-theme w-fit h-fit sm:min-w-200'>
          <div className='flex flex-col items-center gap-2 '>
            <DialogHeader>
              <DialogTitle className='sm:text-center text-2xl'>
                Shopping Cart
              </DialogTitle>
              <DialogDescription className='sm:text-center'>
                See what's in your cart. Login to save your cart.
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className='min-h-100 p-4'>
            {/*<p>Seems like you haven't add anyhting</p>*/}
            <div className='grid grid-cols-12 gap-4'>
              <img
                src='nexf/product/3.png'
                className='aspect-3/4 rounded-theme w-full col-span-2'
              ></img>
              <div className='col-span-9 grid grid-rows-3 gap-1'>
                <p className='text-xl font-semibold'>Dress Collection Eid</p>

                <p className='text-md text-muted-foreground'>Size: Free Size</p>
                <p className='font-semibold text-xl'>
                  {' '}
                  <span className='font-extrabold '>&#x09F3;</span>600
                </p>

                <div className='flex items-center justify-center gap-3 bg-accent w-fit font-semibold rounded-theme h-fit'>
                  <Button
                    size={'icon'}
                    className='rounded-theme bg-accent border shadow-none text-accent-foreground'
                    onClick={() => setCount((x) => x + 1)}
                  >
                    +
                  </Button>
                  <p>{count}</p>
                  <Button
                    size={'icon'}
                    className='rounded-theme bg-accent border shadow-none text-accent-foreground'
                    onClick={() => setCount((x) => (x > 0 ? x - 1 : 0))}
                  >
                    -
                  </Button>
                </div>
              </div>
              <Button className='bg-red-400 col-span-1' size={'icon'}>
                <IconTrash></IconTrash>
              </Button>
            </div>
          </div>
          <DialogFooter className='sm:justify-start sm:flex-col gap-5'>
            <div className='text-2xl flex items-center justify-between'>
              <p>Total</p>
              <p className=''>
                <span className='font-extrabold '>&#x09F3;</span> 200
              </p>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <div className='w-full flex items-center justify-center gap-4'>
              <Link to='/checkout' className='w-full'>
                <Button className='w-full p-6 rounded-theme bg-primary'>
                  Check Out
                </Button>
              </Link>
              <Link to='/whishlist' className='w-full'>
                <Button className='w-full p-6 rounded-theme bg-accent-foreground text-accent'>
                  Wishlist
                </Button>
              </Link>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
