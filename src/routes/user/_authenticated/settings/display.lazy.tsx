import { createLazyFileRoute } from '@tanstack/react-router'
import SettingsDisplay from '@/features/settings/display'

export const Route = createLazyFileRoute(
  '/user/_authenticated/settings/display',
)({
  component: SettingsDisplay,
})
