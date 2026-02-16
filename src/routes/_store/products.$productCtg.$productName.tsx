import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_store/products/$productCtg/$productName'
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { productName, productCtg } = Route.useParams()
  return (
    <div>
      Hello "/_store/products/{productCtg}/{productName}!
    </div>
  )
}
