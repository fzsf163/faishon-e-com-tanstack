import { createFileRoute } from '@tanstack/react-router'
import { Home } from '@/components/store/features/home/Home'

export const Route = createFileRoute('/_store/')({
  component: Home,
})
