import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import PokerImage from '../../assets/images/pokerMd.png'
function TexasHoldemPokerPage() {
  return (
    <div className='grid font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='container mx-auto py-10 grid h-full lg:gap-20 lg:grid-cols-2 p-1'>
        {/* Left Side */}
        <section className='grid py-10'>
          <div>
            <img src={PokerImage} className='rounded' alt="Texas Hold'em Game" />
          </div>
          <div className='grid items-center'>
            <button className='outline outline-2 outline-black p-2 rounded h-fit'>
              Play Now!
            </button>
          </div>
        </section>
        {/* Right side */}
        <section className='grid'>
          <div className='outline outline-2 outline-black p-2 rounded'>
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
