import { Container } from './Utils';
import Banner from './Banner ';
import Accordion from './Accordion';
import anime from '../image/how5.jpg';
import anime1 from '../image/comm.jpg';
import anime2 from '../image/img13.png';
import anime3 from '../image/eas3.jpg';
import anime4 from '../image/eas6.jpg';
import anime5 from '../image/eas5.jpg';
import anime6 from '../image/cybertailor.png';

import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple,
} from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <div>
      <Banner />

      <Container className='wow fadeInLeft  flex items-cent flex-col-reverse xl:flex-col xl:space-y-0  xl:space-x-5  '>
        <div className='wow fadeInLeft w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:w-full'>
          <div
            className='transition-all duration-300 border border-pink-100 rounded-3xl mx-4 lg:p-8 
                    text-center flex flex-col bg-[#ffffff] space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'
          >
            <div className='flex items-center  justify-center'>
              <img src={anime} alt='' />
            </div>
            <h3 className='text-xl ml-5 lg:text-2xl text-[#181a4a]'>
              Beginner's Level
            </h3>
            <h2 className='max-w-lg px-5 pb-3 text-[#c4458f] text-pretty text-sm font-sans'>
              Unlock your creativity with tailoring! As a Beginner Learn the
              basics of stitching, cutting, and designing your own clothes. With
              endless possibilities, turn your imagination into wearable art.
              Start your journey today and craft unique pieces that truly
              express your style!{' '}
            </h2>
          </div>
          <div
            className='transition-all duration-300 border border-pink-100 rounded-3xl mx-7 lg:p-8 
                    text-center flex flex-col bg-[#ffffff] space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'
          >
            <div className='flex items-center  justify-center'>
              <img src={anime1} height={10} alt='' />
            </div>
            <h3 className='text-xl ml-5 lg:text-2xl text-[#181a4a]'>
              Gain Experience
            </h3>
            <p className='max-w-lg px-5 pb-3 text-[#c4458f] text-pretty text-sm font-sans'>
              Gain hands-on experience in tailoring and watch your skills
              flourish! Practice cutting, stitching, and designing to create
              stunning, custom-fit garments. Each project hones your craft,
              boosting your confidence and creativity. Dive into the world of
              tailoring, where every stitch brings you closer to mastering this
              timeless art. Start sewing today!
            </p>
          </div>
          <div
            className='transition-all duration-300 border border-pink-100 rounded-3xl mx-7 lg:p-8 
                    text-center flex flex-col bg-[#ffffff] space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'
          >
            <div className='flex items-center  justify-center'>
              <img src={anime2} height={15} alt='' />
            </div>
            <h3 className='text-xl ml-5 lg:text-2xl text-[#181a4a]'>
              Career Level Up
            </h3>
            <p className='max-w-lg px-5 pb-3 text-[#c4458f] text-pretty text-sm font-sans'>
              Elevate your tailoring career to new heights! Master advanced
              techniques, explore intricate designs, and perfect your craft.
              With each project, enhance your portfolio, impress clients, and
              open doors to exclusive opportunities. Take the next step in your
              tailoring journey and transform your passion into a thriving,
              successful career. Level up now!
            </p>
          </div>
        </div>
      </Container>

      <div
        className='wow flex flex-col justify-center
        items-center lg:flex-row  lg:justify-evenly fadeInUp mt-7 pb-10 w-auto bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: "url('/banter.png')" }}
      >
        <div
          className='wow fadeInUp text-balance text-center pt-6 
          md:text-2xl font-bold'
        >
          <div>
            <img src={anime3} alt='' className='rounded-full' />
          </div>
        </div>
        <div className='flex  text-[#c4458f] flex-col mt-8 justify-center'>
          <h4 className='font-serif lg:text-4xl'>New to Tailoring?</h4>
          <h1 className='font-serif lg:text-4xl'> No Problem!</h1>
          <Link to={'/sign-up'}>
            <button
              className='border text-xl font-serif py-1 px-4
               bg-white text-blue-950 rounded-xl
       hover:border-slate-100 border-blue-950 
       wow fadeInLeft transition-all shadow-xl'
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <Container className='wow fadeInUp mt-16'>
        <div
          className=' flex flex-col justify-evenly gap-3 
         lg:flex lg:flex-row '
        >
          <div className='gap-3 lg:mt-20'>
            <div className='shadow rounded-3xl p-4 space-y-4'>
              <h3
                className='text-xl lg:text-2xl text-[#c4458f] 
              font-bold'
              >
                Growth
              </h3>
              <h1 className='font-semibold'>Get Hands On Skill</h1>
              <h3 className='max-w-lg text-thin font-serif'>
                Develop advanced skills, embrace new trends, and refine your
                craftsmanship. Every project is a step towards mastery, Grow
                your expertise and watch your success unfold!
              </h3>
            </div>
          </div>
          <div>
            <img src={anime4} alt='' className='rounded-full' />{' '}
          </div>
        </div>
        <div className=' mt-8 flex flex-col justify-evenly gap-3  lg:flex lg:flex-row-reverse '>
          <div className='gap-3 lg:mt-20'>
            <div className='shadow rounded-3xl p-4  space-y-4'>
              <h3 className='text-xl lg:text-2xl font-bold text-[#c4458f]'>
                Skills
              </h3>
              <h1 className='font-semibold'>Noob To Expert</h1>
              <p className='max-w-lg font-serif text-lg'>
                Start with the basics of stitching and cutting, then gradually
                master advanced techniques and intricate designs
              </p>
            </div>
          </div>
          <div>
            <img src={anime5} className='rounded-full' alt='' />{' '}
          </div>
        </div>
      </Container>
      <div className='flex  flex-col lg:flex-row justify-between mt-10 p-6'>
        <div>
          <div className='text-center text-sm font-thin mb-4 text-[#c4458f]'>
            <p>IT TAKES A COMMUNITY</p>
          </div>
          <div className='text-center text-lg font-serif'>
            <h4>Join the CyberTailor</h4>
            <h4 className=''>Learners Community</h4>
          </div>
          <div className='text-center px-12 py-4  text-[#583ba8]'>
            <p>
              it takes a village to raise a child , it takes a community to
              raise a professional!, join our community for extra "motivation"
            </p>
          </div>
          <div className='flex justify-center mb-4'>
            <Link to={'/sign-up'}>
              <button
                className=' font-serif py-3 px-8
               bg-[#fbb9fd] rounded-xl
       wow fadeInLeft transition-all shadow-xl'
              >
                join community!
              </button>
            </Link>
          </div>
        </div>

        <img
          src={anime6}
          className='shadow  h-36 w-full lg:h-64 lg:w-full'
          alt=''
        />
      </div>
      <Accordion />
    </div>
  );
};

export default Home;
