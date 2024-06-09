import { TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import HomePage from '../components/HomePage';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden mx-11 my-2'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className=' '>
        <HomePage />
      </div>
      <div className='p-3 lg:mx-96'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-5 flex flex-col gap-8 py-12'>
        <Link
          to={'/search'}
          className='text-lg text-teal-500 hover:underline text-center'
        >
          View all blog posts
        </Link>
      </div>
    </div>
  );
}
