import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';

function WelcomePage() {
  return (
    <div className='grid font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full p-1 items-center justify-center'>
        <section>
          <article>
            <h1 className='grids text-center'>
              <span>Welcome To</span> <br />
              <span>Casino Games</span>
            </h1>
          </article>
        </section>
        <section>
          <Link to='/games/texas-holdem'>
            <div className='grid outline outline-2 outline-black bg-white rounded-xl w-[150px] py-2 px-4 text-center'>
              Texas Holdem{' '}
            </div>
          </Link>
        </section>
        <section>
          <Link to='/games/blackjack'>
            <div className='grid outline outline-2 outline-black bg-white rounded-xl w-[150px] py-2 px-4 text-center'>
              Blackjack
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default WelcomePage;
