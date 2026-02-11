import { createLazyFileRoute } from '@tanstack/react-router'
import SettingsAccount from '@/features/settings/account'

export const Route = createLazyFileRoute(
  '/user/_authenticated/settings/account',
)({
  component: SettingsAccount,
})
