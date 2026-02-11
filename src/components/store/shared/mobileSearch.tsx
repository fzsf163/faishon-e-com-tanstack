'use client'

import { CommandDialog, CommandInput } from '@/components/ui/command'
import { Search } from 'lucide-react'
import * as React from 'react'

export default function SearchWithModal() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <button
        className='inline-flex h-9 w-fit rounded-lg border border-input bg-background/85 dark:bg-background/40 px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 '
        onClick={() => setOpen(true)}
      >
        <span className='flex grow items-center'>
          <Search
            className='-ms-1 me-3 text-muted-foreground/80'
            size={16}
            strokeWidth={2}
            aria-hidden='true'
          />
          <span className='font-normal text-muted-foreground/70'>Search</span>
        </span>
        <kbd className='-me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70'>
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type to search...' />
      </CommandDialog>
    </>
  )
}
