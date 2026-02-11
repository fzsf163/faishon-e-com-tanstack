import { Link } from '@tanstack/react-router'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ThemeSwitch } from '@/components/theme-switch'
import { StoreTopBarData } from '../data/navbarData'
import SignInModal from './modalSIngIn'
import SearchWithIcon from './searchWithIcon'

export function StoreTopNavbar() {
  return (
    <div className='w-full  bg-slate-900 text-primary-foreground dark:text-foreground dark:bg-secondary'>
      <div className='flex items-center justify-center gap-10 py-5 '>
        <p>LOGO</p>
        <SearchWithIcon></SearchWithIcon>
        <NavMap />
        <ThemeSwitch />
        {/* <ProfileDropdown /> */}
      </div>
    </div>
  )
}

function NavMap() {
  return (
    <div className='flex items-center justify-center gap-10'>
      {StoreTopBarData.map(({ icon, text, title }) => {
        if (title === 'Offers') {
          return (
            <Link
              to='/offers'
              key={title}
              className='flex items-center gap-1 w-full '
            >
              <div className='flex flex-col gap-0 sr-only'>
                <h3 className='font-semibold text-nowrap'>{title}</h3>
                <small className='text-xs text-nowrap'>{text}</small>
              </div>

              <Tooltip>
                <TooltipTrigger>
                  <div className='size-10'>{icon}</div>
                </TooltipTrigger>
                <TooltipContent className='text-primary-foreground dark:text-foreground dark:bg-secondary'>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          )
        } else {
          return (
            <div key={title}>
              <SignInModal icon={icon} text={text} title={title}></SignInModal>
            </div>
          )
        }
      })}
    </div>
  )
}
