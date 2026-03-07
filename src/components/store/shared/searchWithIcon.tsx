import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SearchWithIcon() {
  return (
    <div className='min-w-[20rem]'>
      <div className='relative'>
        <Input
          className=' placeholder:font-bold placeholder:text-black/70 dark:placeholder:text-white/70 bg-background/40 text-black p-5 rounded-full border-none caret-black  focus-visible:ring-indgo-700 transition-all duration-75 ease-in-out'
          type='search'
          placeholder='Search'
        />
        <button
          className='absolute inset-y-0 end-0 flex h-full w-10 dark:*:text-white items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
          aria-label='Search'
        >
          <Search size={16} strokeWidth={2} aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
