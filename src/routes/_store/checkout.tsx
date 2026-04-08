import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_store/checkout"!</div>
}
