import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/offers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_store/offers"!</div>
}
