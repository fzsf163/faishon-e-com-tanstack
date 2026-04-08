import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { AlignJustify, ArrowRightToLine, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { StoreTopBarData } from '../data/navbarData'
import ShoppingCartBox from './shoppingcart'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  const [open, setOpen] = useState<string | null>(null)
  const [sheetOpen, setSheetOpen] = useState<boolean>(false)
  const location = useRouterState({
    select: (state) => state.location.pathname,
  })
  useEffect(() => {
    setSheetOpen(false)
  }, [location])
  return (
    <div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' className='w-fit h-fit p-0'>
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='overflow-auto w-full'>
          <SheetHeader>
            <SheetTitle>
              <Link to='/'>
                <img src='images/nexf-blue-logo.svg' className='w-20'></img>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className='w-64 p-4'>
            {StoreTopBarData.map((item) => {
              const isOpen = open === item.title

              return (
                <div key={item.title}>
                  {/* Parent */}
                  <div className='cursor-pointer font-medium py-1 flex justify-between'>
                    {item.children?.length ? (
                      <p onClick={() => setOpen(isOpen ? null : item.title)}>
                        {item.title}
                      </p>
                    ) : (
                      <Link to='/$menus' params={{ menus: item.title }}>
                        {item.title}
                      </Link>
                    )}

                    {item.children?.length ? (
                      <ChevronDown
                        className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    ) : null}
                  </div>

                  {/* Children */}
                  {isOpen && item.children && (
                    <div className='pl-4 space-y-1'>
                      {item.children.map((child) => (
                        <div
                          key={child.title}
                          className='text-sm text-gray-600 cursor-pointer hover:text-black'
                        >
                          <Link to='/$menus' params={{ menus: child.title }}>
                            {child.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {/*other stuffs*/}
          <div className='flex items-center gap-2 p-4 justify-between'>
            <ShoppingCartBox></ShoppingCartBox>
            <Link to='/sign-in'>
              <Button>
                <ArrowRightToLine></ArrowRightToLine> Login
              </Button>
            </Link>
          </div>
          <SheetFooter className='mt-10'>
            <SheetClose asChild>
              <Button type='button'>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
