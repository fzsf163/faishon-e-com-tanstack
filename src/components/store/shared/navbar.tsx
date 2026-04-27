import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Link } from '@tanstack/react-router'
import { ArrowRightToLine, ChevronDown } from 'lucide-react'
import { StoreTopBarData } from '../data/navbarData'
import SearchWithIcon from './searchWithIcon'
import ShoppingCartBox from './shoppingcart'
import logodark from '/images/nexf-blue-logo.svg?url'
import logolight from '/images/nexf-white-logo.svg?url'

export function StoreTopNavbar() {
  return (
    <div className='w-full bg-white  text-black dark:text-foreground dark:bg-secondary'>
      <div className='flex container-custom mx-auto w-full items-center justify-around gap-10 py-5  '>
        <div className='flex items-center justify-center gap-2 w-full'>
          <Link to='/'>
            <img className='w-full h-full max-h-32 max-w-24  dark:hidden' src={logodark}></img>
            <img className='w-full h-full hidden dark:block' src={logolight}></img>
          </Link>
          <SearchWithIcon></SearchWithIcon>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <NavMap />
          <ThemeSwitch />
          <ShoppingCartBox></ShoppingCartBox>
          <Link to='/sign-in'>
            <Button>
              <ArrowRightToLine></ArrowRightToLine> Login
            </Button>
          </Link>
        </div>
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
          <p className='cursor-context-menu'>{title}</p>
          <p>
            <ChevronDown></ChevronDown>
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='grid gap-1'>
        {children?.map((c) => {
          return (
            <Link
              to='/$menus'
              params={{ menus: c.title }}
              key={c.title}
              className='font-semibold text-lg '
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
    <div className='flex items-center justify-center gap-4'>
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
