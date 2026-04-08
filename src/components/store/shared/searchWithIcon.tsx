import { useState } from 'react'
import { Search } from 'lucide-react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'

export default function SearchWithIcon() {
  const [open, setOpen] = useState(false)
  return (
    <div className='min-w-[20rem] flex flex-col gap-4'>
      <div className='relative cursor-pointer' onClick={() => setOpen(true)}>
        <Input
          className=' placeholder:font-bold placeholder:text-black/70 dark:placeholder:text-white/70 bg-background/40 text-black p-5 rounded-full border-none caret-transparent  focus-visible:ring-indgo-700 transition-all duration-75 ease-in-out'
          type='search'
          placeholder='Search'
          readOnly
          tabIndex={-1}
        />
        <Search
          size={16}
          strokeWidth={2}
          aria-hidden='true'
          className='absolute right-4 top-3'
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className='rounded-theme'>
          <CommandInput placeholder='Type a command or search...' />
          <CommandList className='overflow-y-auto no-scrollbar'>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading='Settings'>
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
