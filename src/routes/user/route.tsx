import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: RouteComponent,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
