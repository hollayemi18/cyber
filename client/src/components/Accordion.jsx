import React from 'react';
import { Disclosure } from '@headlessui/react';

const Accordion = () => {
  return (
    <div className='w-full  px-4 mb-8'>
      <div className='w-fullmax-w-md p-2 mx-auto rounded-2xl'>
        <h3 className='text-center text-color1 text-3xl mb-6'>freqywnru</h3>
        <Disclosure className='wow fadeInLeft'>
          {({ open }) => (
            <>
              <Disclosure.Button className=' flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-slate-300 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span> When will my package arrive?</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                Depends on how urgent you want our team working on your request
                , for normal request it takes 5-7 days for delivery
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure className='wow fadeInLeft'>
          {({ open }) => (
            <>
              <Disclosure.Button className=' flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-slate-300 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span> When will my package arrive?</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                Depends on how urgent you want our team working on your request
                , for normal request it takes 5-7 days for delivery
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure className='wow fadeInLeft'>
          {({ open }) => (
            <>
              <Disclosure.Button className=' flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-slate-300 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span> When will my package arrive?</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                Depends on how urgent you want our team working on your request
                , for normal request it takes 5-7 days for delivery
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
