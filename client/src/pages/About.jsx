import React from 'react';
import eas from '../image/eas5.jpg';
import eas1 from '../image/eas3.jpg';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className=''>
      <div>
        <Link to='/' className='text-center '>
          <h2 className=' font-serif font-semibold pt-20 md:text-4xl text-2xl'>
            EASE
          </h2>
        </Link>
      </div>
      <div>
        <h2 className='text-center my-6  font-2xl text-2xl text-color1 md:text-lg'>
          Why EaseApparel
        </h2>
      </div>
      <section
        className='mx-6 text-md font-bold 
            wow fadeInUp transition-all
                                     duration-300 border border-indigo-200 
                                     rounded-3xl p-4 lg:p-8 text-center 
                                     flex flex-col space-y-8
                                      hover:border-gray-200 
                                      hover:border-opacity-50 hover:shadow-2xl'
      >
        <div className='lg:flex flex-row w-auto justify-evenly'>
          <img src={eas1} alt='done' className='w-full h-48  lg:w-full' />

          <div className='my-1 font-thin lg:text-sm md:text-4xl md:px-44 md:font-extrabold   '>
            An online platform for fashion bringing comfort and convience as it
            name imply.
            <br />
            As a fashion ethusiast and a lover of fashion ,we are dedicating to
            bring lovers of fashion and native attire the best that could be
            offered with the simplicity of making it ease without going through
            stress.
            <br />
            <div>
              <p>
                Easeapparel is created with long time vision of creativity
                ,started from bed rock with lot of struggle and hardship , but
                with the aim of making a stress-free world, the vision keeps
                burning all through.
              </p>
            </div>
          </div>
        </div>
        <div
          className='shadow lg:flex flex-row-reverse w-auto justify-evenly 
           rounded pb-3 md:text-lg'
        >
          <img src={eas} alt='donner' className='w-full h-48  lg:w-full' />

          <p className='mt-5 font-thin lg:text-sm md:text-4xl md:px-44 md:font-extrabold '>
            Our Aim and vision is making your wish about your sense of fashion
            comes true without going through stress, just with tap ,Our AGENTS
            are right with you taking your orders .At your comfort we make your
            fashion wish come through .
            <br />
            Ease offered NO DELAY, NO DISAPPOINTMENT, FAST DELIVERY, AFFORDABLE
            PRICE ,CLIENTS ACCOUNT TO MANAGE and LOTS MORE
            <br />
            To enjoy our EXCLUSIVE deal and Discounts create an account or
            log-in with a click
          </p>
        </div>
        <div className='flex justify-center mb-4'>
          <Link to={'/sign-up'}>
            <button
              className=' font-serif py-3 px-8
               bg-[#fbb9fd] rounded-xl
       wow fadeInLeft transition-all shadow-xl'
            >
              Get Started!
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
