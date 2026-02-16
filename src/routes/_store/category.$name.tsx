import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/category/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { name } = Route.useParams()
  return <div>Hello "/_store/category/"{name}!</div>
}
