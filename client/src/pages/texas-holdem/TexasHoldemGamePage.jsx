import React, { useContext, useState } from 'react';
// Styles
import '../../styles/backgrounds.css';
// Context
import { UserContext } from '../../context/UserContext';
import EmptyCardComponent from '../../components/cards/EmptyCardComponent';
import TexasHoldemPlayerComponent from '../../components/player/TexasHoldemPlayerComponent';
import { npcUserData } from '../../utils/TempData';

function TexasHoldemGamePage() {
  const { user } = useContext(UserContext);

  const [playersArray, setPlayersArray] = useState(npcUserData)

  return (
    <div className='h-screen casino__background'>
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
        <div className='mt-16 grid grid-rows-a1a'>
          <section className='grid grid-cols-2'>
            <div>
              <TexasHoldemPlayerComponent playerData={playersArray[0]} />
            </div>
            <div>
              <TexasHoldemPlayerComponent playerData={playersArray[1]} />
            </div>
          </section>

          {/* TABLE AND SIDE MEMBERS */}
          <section className='grid grid-cols-a1a w-full px-10 h-full py-4'>
            <section>
              <div className='w-fit h-fit'>
                <TexasHoldemPlayerComponent playerData={playersArray[5]} />
              </div>
            </section>
            {/* TABLE */}
            <div className='grid px-10 h-fit mx-auto my-auto'>
              <section className='grid outline outline-black outline-1 rounded-3xl p-6 bg-yellow-600 '>
                <div className='grid grid-rows-a1a outline outline-black outline-1 rounded-3xl bg-green-600 table__bg p-2'>
                  {/* top users */}
                  <div className='grid grid-cols-2 p-2'>
                    <section className='flex gap-2 justify-center'>
                      <EmptyCardComponent />
                      <EmptyCardComponent />
                    </section>
                    <section className='flex gap-2 justify-center'>
                      <EmptyCardComponent />
                      <EmptyCardComponent />
                    </section>
                  </div>
                  {/* side and table*/}
                  <div className='grid grid-cols-a1a p-2 h-fit'>
                    <section className='grid justify-center items-center h-fit'>
                      <div className='flex gap-2 justify-center rotate-90 h-fit'>
                        <EmptyCardComponent />
                        <EmptyCardComponent />
                      </div>
                    </section>
                    <section className='grid p-1'>
                      <div className='outline outline-white outline-1 rounded-3xl grid grid-cols-3 px-2 py-8'>
                        <section className='grid text-center items-center justify-center'>
                          <span className='font-extrabold text-white'>
                            WORLD <br /> POKER
                          </span>
                        </section>
                        <section className='grid'>
                          <div className='grid grid-cols-5 w-fit py-4 gap-4'>
                            <EmptyCardComponent />
                            <EmptyCardComponent />
                            <EmptyCardComponent />
                            <EmptyCardComponent />
                            <EmptyCardComponent />
                          </div>
                        </section>
                        <section className='grid text-center items-center justify-center'>
                          <span className='font-extrabold text-white'>
                            TEXAS <br /> HOLD'EM
                          </span>
                        </section>
                      </div>
                    </section>
                    <section className='grid justify-center items-center'>
                      <div className='flex gap-2 justify-center rotate-90 h-fit'>
                        <EmptyCardComponent />
                        <EmptyCardComponent />
                      </div>
                    </section>
                  </div>
                  {/* bottom users */}
                  <div className='grid grid-cols-2 p-2'>
                    <section className='flex gap-2 justify-center '>
                      <EmptyCardComponent />
                      <EmptyCardComponent />
                    </section>
                    <section className='flex gap-2 justify-center'>
                      <EmptyCardComponent />
                      <EmptyCardComponent />
                    </section>
                  </div>
                </div>
              </section>
            </div>
            <section>
              <div>
                <TexasHoldemPlayerComponent playerData={playersArray[2]} />
              </div>
            </section>
          </section>
          {/* BOTTOM ROW OF PLAYER */}
          <section className='grid grid-cols-2'>
            <div>
              <TexasHoldemPlayerComponent playerData={playersArray[3]} />
            </div>
            <div>
              <TexasHoldemPlayerComponent playerData={playersArray[4]} />
            </div>
          </section>
        </div>
      </section>
      {/* table */}
    </div>
  );
}

export default TexasHoldemGamePage;
