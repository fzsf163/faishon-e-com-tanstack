import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: () => {
    return (
      <>
        <TooltipProvider>
          <Outlet />
          <Toaster />
        </TooltipProvider>
        {import.meta.env.MODE === 'development' && (
          <>
            <ReactQueryDevtools buttonPosition='bottom-right' />
            <TanStackRouterDevtools position='bottom-right' />
          </>
        )}
      </>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
