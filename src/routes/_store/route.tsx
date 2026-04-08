import { createFileRoute, Outlet } from '@tanstack/react-router'
import Footer from '@/components/store/shared/footer'
import { SheetSide } from '@/components/store/shared/mobileNav'
import SearchWithModal from '@/components/store/shared/mobileSearch'
import { StoreTopNavbar } from '@/components/store/shared/navbar'
import SearchWithIcon from '@/components/store/shared/searchWithIcon'
import { ThemeSwitch } from '@/components/theme-switch'

export const Route = createFileRoute('/_store')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-center gap-4 p-3 lg:hidden w-full  bg-slate-900 text-primary-foreground dark:text-foreground dark:bg-secondary sticky top-0 z-50'>
        <SheetSide></SheetSide>
        <SearchWithIcon></SearchWithIcon>
        <ThemeSwitch />
      </div>
      <div className='hidden lg:block sticky top-0 z-50'>
        <StoreTopNavbar></StoreTopNavbar>
      </div>
      <Outlet />
      <div className='text-center mt-10'>
        <Footer></Footer>
      </div>
    </div>
  )
}
