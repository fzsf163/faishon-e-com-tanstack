import { CircleUser, Gift, ShoppingBag, ShoppingCart } from 'lucide-react'
import { StoreTopNavBarTypes } from './types'

export const StoreTopBarData: StoreTopNavBarTypes[] = [
  {
    title: 'Offers',
    text: 'Latest Offers',
    icon: <Gift className='w-full h-full' />,
  },
  {
    title: 'Cart',
    text: 'Add items',
    icon: <ShoppingCart className='w-full h-full' />,
  },
  {
    title: 'Pre-Order',
    text: 'Order Today',
    icon: <ShoppingBag className='w-full h-full' />,
  },
  {
    title: 'Account',
    text: 'Login or Register',
    icon: <CircleUser className='w-full h-full' />,
  },
]
