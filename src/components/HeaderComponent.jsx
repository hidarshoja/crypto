// src/components/HeaderComponent.jsx

import { Fragment, useState } from 'react';
import cryptoPrices from '../data/cryptoPrices';
import './style/HeaderComponent.css';

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { SiCardano , SiElectron, SiTether , SiBitcoin  } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";

  
const products = [
    { name: 'بیت کوین', href: '#', icon: SiBitcoin },
    { name: 'تتر', href: '#', icon: SiTether  },
    { name: 'ترون', href: '#', icon: SiElectron },
    { name: 'اتریوم', href: '#', icon: FaEthereum },
    { name: 'کاردانو', href: '#', icon: SiCardano },
  ];
const callsToAction = [
  { name: 'مشاهده وبلاگ', href: '#', icon: PlayCircleIcon },
  { name: 'تماس با ما', href: '#', icon: PhoneIcon },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HeaderComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
    <div className="header-container fixed top-0 z-50">
      <div className="ticker-container">
        <div className="ticker">
          {cryptoPrices.map((crypto, index) => (
            <div className="ticker-item" key={index}>
              <span className="name">{crypto.name}</span>: <span className="price">{crypto.price}</span>
            </div>
          ))}
          {cryptoPrices.map((crypto, index) => (
            <div className="ticker-item" key={index + cryptoPrices.length}>
              <span className="name">{crypto.name}</span>: <span className="price">{crypto.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <header className="bg-body1 z-50 border-b border-smallBox2 mt-12 fixed w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex gap-1 lg:flex-1">
        <a href="#" className="text-sm border px-3 py-1 rounded-md flex items-center justify-center hover:bg-green-500 font-semibold leading-6 text-text2">
           ورود
          </a>
          <a href="#" className="text-sm border px-3 py-1 rounded-md flex items-center justify-center hover:bg-green-500 font-semibold leading-6 text-text2">
           ثبت نام
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-text2">
              <ChevronDownIcon className="h-5 w-5 flex-none text-text2" aria-hidden="true" />
              ارزها
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#185d18] shadow-lg ring-1 ring-text2/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-text2 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-text2">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                       
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-text2/5 bg-green-950">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-text2 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-text2" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
         
          <a href="#" className="text-sm font-semibold leading-6 text-text2">
            ارتباط با ما
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-text2">
            وبلاگ
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-text2">
            بازار
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-text2">
            کیف پول
          </a>
         
          
          <a href="#" className="text-sm font-semibold leading-6 text-text2">
            تبدیل
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-text2">
            صفحه اصلی
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto rounded-full" src="/img/images.png" alt="desktop" />
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 top-16 z-10 w-full overflow-y-auto bg-[#004d00] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text2/10">
          <div className="flex items-center flex-row-reverse justify-between">
          <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  ورود
                </a>
               
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-text2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full flex-row-reverse items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-text2 hover:bg-gray-50">
                        ارزها
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-text2 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className='flex flex-col items-end justify-start'>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  صفحه اصلی
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  کیف پول
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  بازار
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  تبدیل
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  وبلاگ
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text2 hover:bg-gray-50"
                >
                  ارتباط با ما
                </a>
                </div>
                
              </div>
              <div className="py-6">
              <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/img/images.png"
                alt="mobile"
              />
            </a>
              
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </div>
  );
};

export default HeaderComponent;
