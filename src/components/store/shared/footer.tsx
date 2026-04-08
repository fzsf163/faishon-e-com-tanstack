import { MapPin, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <div>
      <footer className='bg-slate-900'>
        <div className='max-w-(--breakpoint-xl) px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
          <div className=' space-y-10 sm:space-y-0 sm:grid  gap-10 lg:grid-cols-12 w-full'>
            <div className='col-span-4'>
              <div className='flex justify-center text-primary-foreground sm:justify-start'>
                <img
                  src='images/nexf-white-logo.svg'
                  alt='Logo'
                  className='w-1/2  sm:h-6 sm:w-21 p-4 sm:p-0'
                ></img>
              </div>

              <p className='max-w-md mx-auto mt-3 leading-relaxed text-center text-gray-400 sm:max-w-sm sm:mx-0 sm:text-left text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to further negotiations.
              </p>

              <ul className='flex justify-center gap-6 mt-8 md:gap-3 sm:justify-start'>
                <li>
                  <a
                    href='/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-teal-500 transition hover:text-teal-500/75'
                  >
                    <span className='sr-only'>Facebook</span>
                    <img src='/nexf/icons-footer/fb.svg'></img>
                  </a>
                </li>

                <li>
                  <a
                    href='/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-teal-500 transition hover:text-teal-500/75'
                  >
                    <span className='sr-only'>Instagram</span>
                    <img src='/nexf/icons-footer/insta.svg'></img>
                  </a>
                </li>

                <li>
                  <a
                    href='/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-teal-500 transition hover:text-teal-500/75'
                  >
                    <span className='sr-only'>Youtube</span>
                    <img src='/nexf/icons-footer/youtube.svg'></img>
                  </a>
                </li>

                <li>
                  <a
                    href='/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-teal-500 transition hover:text-teal-500/75'
                  >
                    <span className='sr-only'>Twitter</span>
                    <img src='/nexf/icons-footer/x.svg'></img>
                  </a>
                </li>

                <li>
                  <a
                    href='/'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-teal-500 transition hover:text-teal-500/75'
                  >
                    <span className='sr-only'>Whatsapp</span>
                    <img src='/nexf/icons-footer/wa.svg'></img>
                  </a>
                </li>
              </ul>
            </div>

            <div className='grid w-fit m-auto justify-center gap-5  sm:gap-8 sm:grid-cols-2 lg:col-span-8 md:grid-cols-8'>
              <div className='text-left col-span-3'>
                <p className='text-sm font-medium text-muted-foreground'>
                  Company
                </p>

                <nav className='mt-4'>
                  <ul className='space-y-2 text-sm text-primary-foreground dark:text-muted-foreground'>
                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        About Us
                      </a>
                    </li>

                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Terms &amp; Conditions
                      </a>
                    </li>

                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Latest News
                      </a>
                    </li>

                    <li>
                      <a className='transition hover:text-white/75' href='/'>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='text-left col-span-3'>
                <p className='text-sm font-medium text-muted-foreground'>
                  Policies
                </p>

                <nav className='mt-4'>
                  <ul className='space-y-2 text-sm text-primary-foreground dark:text-muted-foreground'>
                    <li>
                      <a className='transition hover:text-white/75' href='/'>
                        Delivery Policy
                      </a>
                    </li>

                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Return Policy
                      </a>
                    </li>
                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Refund Policy
                      </a>
                    </li>

                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Cancellation Policy
                      </a>
                    </li>

                    <li>
                      <a className=' transition hover:text-white/75' href='/'>
                        Warranty Policy
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='text-left col-span-2'>
                <p className='text-sm font-medium text-muted-foreground'>
                  Useful Links
                </p>

                <ul className='mt-8 space-y-4 text-sm'>
                  <li>
                    <Button className='rounded-theme w-full max-w-33 flex items-center justify-start gap-1'>
                      <span>
                        <MapPin></MapPin>
                      </span>
                      <span className='text-sm'> Store Locator</span>
                    </Button>
                  </li>

                  <li>
                    <Button className=' rounded-theme w-full max-w-33  flex items-center justify-start gap-2'>
                      <span>
                        <PhoneCall></PhoneCall>
                      </span>
                      <span className='text-sm'>Call Helpline</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*footer footer part*/}
          <div className='pt-6 mt-12 border-t border-gray-800 text-muted-foreground'>
            <div className='text-center sm:flex sm:justify-between sm:text-left'>
              <p className='mt-4 text-sm sm:order-first sm:mt-0'>
                &copy; 2026 NEXF Lifestyle Limited. All Rights Reserved.
              </p>
              <p className='text-sm'>Fuled by CyberSpace Digital</p>
              <div className='grid justify-center sm:flex items-center sm:justify-start gap-2'>
                <p className='text-sm mt-2 sm:mt-0'>We Accept</p>
                <div className='grid grdi-rows-auto grid-cols-3 sm:flex items-center justify-start gap-2 [&_img]:w-12'>
                  <img src='/nexf/payment/bank.png'></img>
                  <img src='/nexf/payment/bkash.png'></img>
                  <img src='/nexf/payment/cod.png'></img>
                  <img src='/nexf/payment/nagad.png'></img>
                  <img src='/nexf/payment/rocket.png'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
