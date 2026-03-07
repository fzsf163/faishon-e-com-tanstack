import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/$menus')({
  component: RouteComponent,
})

function RouteComponent() {
  const { menus } = Route.useParams()
  return <div>Hello {menus} !</div>
}
