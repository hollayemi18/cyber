//import { Container } from '../components/Utils';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFolderOpen, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import MarketPlace from './MarketPlace';
//import photo from '../image/as14.png';
import { useState } from 'react';

const order = <FontAwesomeIcon icon={faBook} size='1xl' />;
const history = <FontAwesomeIcon icon={faFolderOpen} size='1xl' />;

const Cards = () => {
  const [amount] = useState('58,330.0');

  return (
    <div>
      <div
        className=' wow fadeInLeft flex flex-col mx-6 justify-evenly bg-fuchsia-50 transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl  lg:p-2 lg:mx-20 text-center shadow-xl'
      >
        <div className='flex flex-row justify-evenly'>
          <button>
            <img
              className='text-indigo-900'
              src='/images/update-payment.png'
              alt=''
              width={50}
              height={70}
            />
          </button>
          <div className='flex flex-col pl-10'>
            <em className='font-bold text-orange-600'>Balance</em>
            <h2 className='text-2xl text-blue-800 pt-1'>#{amount}</h2>
          </div>
        </div>
      </div>
      <Container className='wow fadeInUp relative'>
        <div
          className='grid grid-cols-3 md:grid-cols-4 gap-1 mt-2 mb-2 border-indigo-950 bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl'
        ></div>
        <div
          className='grid grid-cols-3 md:grid-cols-3 gap-1 border-indigo-500-400 border w-full bg-blue-950 border-opacity-50 
                shadow-1xl rounded-xl'
        >
          <OrderList />

          <div className='no underline text-black'>
            <Link to='/dashboard/measurement'>
              <div className='text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium'>
                <div className='flex  items-center justify-center bg-slate-100 mx-5 py-3 shadow-lg '>
                  {order}
                </div>
                <p className='mt-2 text-xs font-black  text-white'>
                  measurement
                </p>
              </div>
            </Link>
          </div>
          <Link>
            <div className='text-center py-5  lg:py-16 space-y-3 text-indigo-800 font-medium'>
              <div className='flex  items-center justify-center bg-slate-100 mx-5 py-3  rounded-r-3xl shadow-lg '>
                {history}
              </div>
              <p className='mt-2 text-xs font-black  text-white'>
                History Payment
              </p>
            </div>
          </Link>
        </div>
        <div
          className='grid grid-cols-3 md:grid-cols-4 gap-1 mt-2  border-indigo-950 bg-white border w-full border-opacity-50 
                shadow-1xl rounded-xl'
        ></div>
        <div
          className=' wow fadeInLeft w-full mt-4 mb-4 mx-auto  md:w-full bg-white transition-all duration-300 border
                     border-gray-200 border-opacity-50 rounded-3xl p-4 lg:py-4 text-center flex flex-col
                      space-y-4 lg:space-y-1 shadow-xl'
        >
          <div className='text-center flex flex-row justify-between lg:py-5 text-indigo-800 font-medium'>
            <em className='text-sm font-black  text-indigo-700'>Pending</em>
            <p className='pr-3 text-orange-600'> 1</p>
          </div>
          <div className='text-center flex flex-row  justify-between lg:py-5 text-indigo-800 font-medium'>
            <em className='text-sm font-black  text-indigo-700'>
              In Progress Order
            </em>
            <p className='pr-3 text-green-600'> 3</p>
          </div>
        </div>
      </Container>
      <MarketPlace />
    </div>
  );
};

export default Cards;
