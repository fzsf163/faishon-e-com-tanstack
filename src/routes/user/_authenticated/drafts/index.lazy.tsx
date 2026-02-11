import Drafts from '@/features/drafts'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/user/_authenticated/drafts/')({
  component: Drafts,
})
