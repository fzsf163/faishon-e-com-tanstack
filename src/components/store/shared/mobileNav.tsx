'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import CategoryList from './categoriesNav'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className=''>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost'>
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='overflow-auto'>
          <SheetHeader>
            <SheetTitle>Produts</SheetTitle>
            <SheetDescription>Browse Products</SheetDescription>
          </SheetHeader>
          <div>
            <CategoryList></CategoryList>
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
