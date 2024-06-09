import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div
      className='flex flex-col
     sm:flex-row p-3 border justify-center 
     items-center rounded-tl-3xl rounded-br-3xl text-center'
    >
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-1xl'>Want to learn more with A.I?</h2>
        <p className='my-2'>Checkout these resources to elevate your skills</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-xl mx-10'>
          <a
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn More
          </a>
        </Button>
      </div>
    </div>
  );
}
