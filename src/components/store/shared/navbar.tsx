import { Link } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ThemeSwitch } from '@/components/theme-switch'
import { StoreTopBarData } from '../data/navbarData'
import SearchWithIcon from './searchWithIcon'
import logodark from '/images/nexf-blue-logo.svg?url'
import logolight from '/images/nexf-white-logo.svg?url'

export function StoreTopNavbar() {
  return (
    <div className='w-full container-custom mx-auto  bg-white text-black dark:text-foreground dark:bg-secondary'>
      <div className='flex items-center justify-center gap-10 py-5 '>
        <Link to='/'>
          <img className='w-21 h-5  dark:hidden' src={logodark}></img>
          <img className='w-21 h-5 hidden dark:block' src={logolight}></img>
        </Link>
        <SearchWithIcon></SearchWithIcon>
        <NavMap />
        <ThemeSwitch />
        {/* <ProfileDropdown /> */}
      </div>
    </div>
  )
}
const HoverComponent = ({
  title,
  children,
}: {
  title: string
  children?: {
    title: string
  }[]
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className='flex items-center justify-center gap-1 font-semibold'>
          <p>{title}</p>
          <p>
            <ChevronDown></ChevronDown>
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        {children?.map((c) => {
          return (
            <Link
              to='/$menus'
              params={{ menus: c.title }}
              key={c.title}
              className='flex items-center gap-6 w-full font-semibold '
            >
              <p>{c.title}</p>
            </Link>
          )
        })}
      </HoverCardContent>
    </HoverCard>
  )
}

function NavMap() {
  return (
    <div className='flex items-center justify-center gap-10'>
      {StoreTopBarData.map(({ title, children }) => {
        return (
          <div key={title}>
            {children?.length ? (
              <HoverComponent
                title={title}
                children={children}
              ></HoverComponent>
            ) : (
              <Link
                to='/$menus'
                params={{ menus: title }}
                key={title}
                className='flex items-center gap-1 w-full font-semibold '
              >
                <p>{title}</p>
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
