import { createLazyFileRoute } from '@tanstack/react-router'
import ComingSoon from '@/components/coming-soon'

export const Route = createLazyFileRoute('/user/_authenticated/help-center/')({
  component: ComingSoon,
})
