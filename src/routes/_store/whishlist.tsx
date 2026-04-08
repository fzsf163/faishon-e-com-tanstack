import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/whishlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_store/whishlist"!</div>
}
