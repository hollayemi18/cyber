import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div
      className='group my-0 py-0  relative w-full border border-x-0 border-y-1 border-teal-700 hover:border-1 h-[300px]
    overflow-hidden sm:w-[430px] transition-all'
    >
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[180px] w-full  object-cover group-hover:h-[120px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-4 text-center flex flex-col gap-5'>
        <p className='text-lg font-serif'>{post.title}</p>
        <span className=' font-serif  text-sm'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='z-5  group-hover:bottom-2
          absolute bottom-[-70px] left-0 right-0 border border-[#c4458f]
            text-[#c4458f] hover:bg-indigo-950 hover:text-white transition-all duration-300 text-center py-2 rounded-md
            !rounded-tl-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
