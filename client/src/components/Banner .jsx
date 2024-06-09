import { Link } from 'react-router-dom';
//import MarketPlace from './MarketPlace';
import anime from '../image/anime.gif';

const Hero = () => {
  return (
    <section className=' overflow-hidden mb-7 py-10  wow fadeInUp'>
      <div className='justify-center text-center'>
        <div className=''>
          <div>
            <h1 className='mt-10 text-4xl  font-bold lg:mx-96 lg:text-7xl '>
              Ignite Your
              <img src={anime} alt='' className='ml-32' width={200} srcset='' />
              Fashion Design Career!
              <br />
            </h1>
          </div>
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
        <Link to={'/sign-up'}>
          <button
            className='border py-2 px-6 bg-[#d6a6bc]  rounded-xl
       hover:border-slate-100 border-blue-950 wow fadeInLeft transition-all shadow-xl'
          >
            Get Started
          </button>
        </Link>
      </div>

      <div className='text-center mt-4 mx-10'>
        <h2 className='lg:text-3xl font-mono'>
          Earn a Fashion Certicate anywhere at the Comfort of your Time{' '}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
