import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import PokerImage from '../../assets/images/pokerMd.png';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';

function TexasHoldemPokerPage() {
  const { user } = useContext(UserContext);
  const { toggleNavbarOpenClosed, setActiveNav } = useContext(ToggleContext);
  let navigate = useNavigate();

  const navigateToPage = (event) => {
    const { id } = event.target;
    console.log('ssddd', id);
    setActiveNav(id);
    toggleNavbarOpenClosed();
    navigate(`${id}`);
  };
  return (
    <div className='grid font-poppins lg:h-screen grid-rows-reg overflow-hidden lg:max-h-screen bg-gray-50'>
      <Navbar />
      {/* Main */}
      <main className='container mx-auto grid h-full lg:gap-20 lg:grid-cols-2 p-1'>
        {/* Left Side */}
        <section className='grid'>
          <section className='my-4'>
            <article>
              <h1 className='text-3xl text-center font-semibold'>
                TEXAS HOLD'EM POKER
              </h1>
            </article>
          </section>
          <div className='px-4 mb-6'>
            <img
              src={PokerImage}
              className='rounded'
              alt="Texas Hold'em Game"
            />
          </div>
          <div className='grid items-center px-4 mb-2'>
            <div className='text-center outline outline-2 outline-black p-2 rounded h-fit bg-yellow-400 hover:bg-yellow-500'>
              <span className='font-semibold'>
                Available Funds: {user.currency.currencySymbol}
                {user.bank.funds}
              </span>
            </div>
          </div>
          <div className='grid items-center px-4 mb-4'>
            <button
              onClick={navigateToPage}
              className='outline outline-2 outline-black p-2 rounded h-fit bg-yellow-400 hover:bg-yellow-500'
            >
              <span className='font-semibold'>Play Now!</span>
            </button>
          </div>
        </section>
        {/* Right side */}
        <section className='grid px-2 mb-2'>
          <div className='outline outline-2 outline-black p-2 rounded text-center'>
            <article>
              <div>
                <h2>Texas Hold'em Poker</h2>
              </div>
              <section className='my-2'>
                <div>
                  <h3>How to play?</h3>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, vel? Quisquam, doloribus minus nulla dolor nisi esse
                    ipsum eaque totam ratione cupiditate laborum, odit qui
                    deleniti voluptate labore incidunt nam, commodi odio tempore
                    natus. Et molestias eligendi magni, laboriosam voluptatem
                    nobis modi eveniet nam corporis ducimus consequuntur
                    assumenda vel. Iusto?
                    <span className='pl-1 text-hyperlink-blue'>
                      <Link to='/games/texas-holdem/how-to-play'>Learn More...</Link>
                    </span>
                  </p>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TexasHoldemPokerPage;
