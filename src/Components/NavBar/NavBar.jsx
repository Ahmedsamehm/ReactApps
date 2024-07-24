import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './navbar.css'
const navigation = [
  { name: 'PORTFOLIO', href: '#', current: true },
  { name: 'ABOUT', href: '#', current: false },
  { name: 'CONTACT', href: '#', current: false },

]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example () {
  return (
    <Disclosure as='nav' className='navbar fixed z-10 w-full  '>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-7'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                aria-hidden='true'
                className='block h-6 w-6 group-data-[open]:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden h-6 w-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center md:justify-between sm:items-stretch sm:justify-center'>
            <div className='flex flex-shrink-0 items-center  text-white text-2xl font-bold'>
              <a href='#'>START REACT</a>
            </div>
            <div className='hidden sm:ml-6 sm:block   '>
              <div className='flex space-x-16 linkHolder  '>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'Active  text-white '
                        : 'text-gray-300 ',
                      'rounded-md px-3 py-2 text-lg font-bold'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this mobNav */}
      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2  text-center'>
          {navigation.map(item => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}