import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Images
import Logo from '../../assets/images/logo.png';
// Utils

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavbar, navigationOpen } = useContext(ToggleContext);

  const [activeNav, setActiveNav] = useState('/');

  const navigate = useNavigate();

  const signOut = (event) => {
    event.preventDefault();

    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
    navigate('../', { replace: true });
  };

  return (
    <>
      <header className='flex bg-green-700 justify-between items-center p-2 border-b-4 border-black border-solid w-full'>
        <div className='pl-2'>
          <Link to='/'>
            <img src={Logo} className='w-8 h-8' alt='Matched Betting' />
          </Link>
        </div>

        <nav
          onClick={() => {
            toggleNavbar();
          }}
          className='md:hidden no__highlights pr-4'
        >
          <span className='cursor-pointer text-white hover:text-hover-grey'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-8 h-8 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
              data-te-animation-init
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
        </nav>

        <nav className='hidden md:flex pr-2'>
          <section className=''>
            <ul className='flex gap-6'>
              <li
                className={
                  activeNav === '/'
                    ? 'px-2 py-4 text-center text-[#ffa500]'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/blackjack'
                    ? 'px-2 py-4 text-center text-[#ffa500]'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/blackjack'>
                  <span>Blackjack</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/texas-holdem'
                    ? 'px-2 py-4 text-center text-[#ffa500]'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/texas-holdem'>
                  <span>Texas Holdem</span>
                </Link>
              </li>
              {!user.email && (
                <>
                  <li
                    className={
                      activeNav === '/login'
                        ? 'px-2 py-4 text-center text-[#ffa500]'
                        : 'px-2 py-4 text-center'
                    }
                  >
                    <Link to='/login'>
                      <span>Login</span>
                    </Link>
                  </li>
                  <li
                    className={
                      activeNav === '/sign-up'
                        ? 'px-2 py-4 text-center text-[#ffa500]'
                        : 'px-2 py-4 text-center'
                    }
                  >
                    <Link to='/sign-up'>
                      <span>Sign Up</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </section>
        </nav>
      </header>

      {navigationOpen && (
        <section className='w-full absolute z-30 top-[98px] px-2'>
          <nav className='bg-green-800 text-gray-100 grid outline outline-4 outline-black'>
            <ul className='grid gap-4 items-center py-4 text-xl'>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/'
                    ? 'px-2 py-4 text-center text-[#ffa500]'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/blackjack'
                    ? 'px-2 py-4 text-center text-[#ffa500]'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/blackjack'>
                  <span>Blackjack</span>
                </Link>
              </li>
              <li
                onClick={toggleNavbar}
                className={
                  activeNav === '/texas-holdem'
                    ? 'px-2 py-4 text-center text-[#ffa500]'
                    : 'px-2 py-4 text-center'
                }
              >
                <Link to='/texas-holdem'>
                  <span>Texas Holdem</span>
                </Link>
              </li>
              {!user.email && (
                <>
                  <li
                    onClick={toggleNavbar}
                    className={
                      activeNav === '/login'
                        ? 'px-2 py-4 text-center text-[#ffa500]'
                        : 'px-2 py-4 text-center'
                    }
                  >
                    <Link to='/login'>
                      <span>Login</span>
                    </Link>
                  </li>
                  <li
                    onClick={toggleNavbar}
                    className={
                      activeNav === '/sign-up'
                        ? 'px-2 py-4 text-center text-[#ffa500]'
                        : 'px-2 py-4 text-center'
                    }
                  >
                    <Link to='/sign-up'>
                      <span>Sign Up</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}

export default Navbar;
