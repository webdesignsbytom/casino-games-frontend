import React, { useContext } from 'react';
// Styles
import '../../styles/backgrounds.css';
// Context
import { UserContext } from '../../context/UserContext';

function TexasHoldemGamePage() {
  const { user } = useContext(UserContext);
  return (
    <div className='bg-gray-200 h-screen casino__background'>
      {/* nav */}
      <section className='grid grid-cols-2 justify-between items-center absolute bg-transparent-black py-2 px-4 w-full text-white'>
        <div className='grid grid-flow-col gap-4'>
          <span>Player: {user.username}</span>
          <span>Bank: {user.bank.funds}</span>
        </div>
        <div className='grid justify-end'>
          <button className='outline outline-1 outline-white bg-yellow-400 py-1 px-2 rounded text-black'>
            Leave Game
          </button>
        </div>
      </section>

      {/* Main game */}
      <section className='grid h-full '>
        <div className='mt-16 grid bg-yellow-200'>
          <section className='grid grid-cols-2 bg-blue-300 h-fit'>
            <div>PLAYER 1</div>
            <div>POAYER 2</div>
          </section>

          {/* TABLE AND SIDE MEMBERS */}
          <section className='grid grid-cols-a1a w-full px-10 h-full py-4'>
            <section>
              <div>PLAYER 6</div>
            </section>
            {/* TABLE */}
            <div className='grid px-10'>
              <section className='grid outline outline-black outline-1 rounded-3xl p-4'>
              <div className='grid outline outline-black outline-1 rounded-3xl'>
                TABLE
              </div>
              </section>
            </div>
            <section>
              <div>PLAYER 3</div>
            </section>
          </section>
          {/* BOTTOM ROW OF PLAYER */}
          <section className='grid grid-cols-2 bg-blue-300'>
            <div>PLAYER 4</div>
            <div>POAYER 5</div>
          </section>
        </div>
      </section>
      {/* table */}
    </div>
  );
}

export default TexasHoldemGamePage;
