import { StarFilledIcon } from '@radix-ui/react-icons'

export const featured = [
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/1.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/2.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',

    href: 'nexf/product/3.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',

    href: 'nexf/product/4.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/5.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/6.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/7.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/8.png',
  },
  {
    name: 'Embroidery Classic Fit Panjabi ',
    href: 'nexf/product/9.png',
  },
]
export default function FeaturedShowCase() {
  const first = featured.at(0)
  const second = featured.slice(1, 4)
  const third = featured.slice(4, 6)
  const fourth = featured.slice(6, 9)

  return (
    <div className='[&_img]:rounded-theme [&_img]:h-full [&_img]:w-full [&_img]:object-cover grid grid-cols-9 gap-2 w-fit'>
      <section className=' col-span-3 relative text-white group'>
        <img src={first?.href} alt={first?.name}></img>
        <div className='absolute bottom-0 bg-black/30 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <p className='flex items-center justify-start'>
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <span key={i}>
                  <StarFilledIcon className='rounded-theme text-orange-300'></StarFilledIcon>
                </span>
              )
            })}
          </p>
          <p className='font-sans font-semibold'>{first?.name}</p>
        </div>
      </section>
      <section className='grid grid-cols-2 gap-2 w-fit col-span-2'>
        {second.map((i, index) => {
          return (
            <div
              key={i.href}
              className={`
                ${index === 2 ? 'col-span-2 row-span-2 relative group ' : 'relative group'}
              `}
            >
              <img
                src={i?.href}
                alt={i?.name}
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 bg-black/30 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <p className='flex items-center justify-start'>
                  {Array.from({ length: 5 }).map((_, i) => {
                    return (
                      <span key={i}>
                        <StarFilledIcon className='rounded-theme text-orange-300'></StarFilledIcon>
                      </span>
                    )
                  })}
                </p>
                <p className='font-sans font-semibold text-white text-sm'>
                  {first?.name}
                </p>
              </div>
            </div>
          )
        })}
      </section>
      <section className='grid grid-cols-1 gap-2  col-span-2'>
        {' '}
        {third.map((i) => {
          return (
            <div key={i.href} className='relative group text-white'>
              <img src={i?.href} alt={i?.name}></img>
              <div className='absolute bottom-0 bg-black/30 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <p className='flex items-center justify-start'>
                  {Array.from({ length: 5 }).map((_, i) => {
                    return (
                      <span key={i}>
                        <StarFilledIcon className='rounded-theme text-orange-300'></StarFilledIcon>
                      </span>
                    )
                  })}
                </p>
                <p className='font-sans font-semibold'>{first?.name}</p>
              </div>
            </div>
          )
        })}
      </section>
      <section className=' grid grid-cols-2 gap-2 w-fit col-span-2'>
        {fourth.map((i, index) => {
          return (
            <div
              key={i.href}
              className={`
                ${index === 0 ? 'col-span-2 row-span-2 relative group' : 'relative group'}
              `}
            >
              <img
                src={i?.href}
                alt={i?.name}
                className='w-full h-full object-cover'
              />
              <div className='absolute bottom-0 bg-black/30 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <p className='flex items-center justify-start'>
                  {Array.from({ length: 5 }).map((_, i) => {
                    return (
                      <span key={i}>
                        <StarFilledIcon className='rounded-theme text-orange-300'></StarFilledIcon>
                      </span>
                    )
                  })}
                </p>
                <p className='font-sans font-semibold text-white text-sm'>
                  {first?.name}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
