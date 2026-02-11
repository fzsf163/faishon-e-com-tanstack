import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '@/features/dashboard'

export const Route = createFileRoute('/user/_authenticated/')({
  component: Dashboard,
})
