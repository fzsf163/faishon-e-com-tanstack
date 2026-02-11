import Orders from '@/features/orders'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/user/_authenticated/products/$section/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {/* <Header>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header> */}

      <Orders></Orders>
    </div>
  )
}
