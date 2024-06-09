import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';
import anime from '../image/anime.gif';
export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='shadow-inner w-full '>
      <Link
        to='/'
        className='self-center lg:ml-8  ml-3  text-lg  lg:text-2xl font-bold dark:text-white'
      >
        <span className='italic font-serif hover:not-italic '>
          cyber
          <span className='not-italic'>Tailor</span>
        </span>
      </Link>

      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10  sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link className='font-serif' to='/sign-in'>
            <Button
              className='font-serif font mx-0 p-0 bg-gradient-to-l from-pink-800 via-indigo-900 to-black'
              outline
            >
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      {currentUser ? (
        <Navbar.Collapse>
          <Navbar.Link active={path === ''} as={'div'}>
            <Link to=''>
              {' '}
              <span className='flex my-4 '>Learning</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === ''} as={'div'}>
            <Link to=''>
              {' '}
              <span className='flex my-4 '>pratical</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === ''} as={'div'}>
            <Link to=''>
              {' '}
              <span className='flex my-4 '>Badges and Certificate</span>
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>
              {' '}
              <span className='flex my-4 '>Home</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/blog'} as={'div'}>
            <Link to='/blog'>
              {' '}
              <span className='flex my-4 '>Blog</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>
              {' '}
              <span className='flex my-4 '>About</span>
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>
              <span className='flex my-4 '>Projects</span>
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}
