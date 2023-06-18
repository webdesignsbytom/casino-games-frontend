import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function QuickDepositComponent() {
  const { toggleQuickDepositOpenClosed } = useContext(ToggleContext);
  return (
    <section className='grid h-screen absolute z-50 w-full'>
      <div className='grid items-center justify-center'>
        <div className='grid relative h-fit outline outline-2 outline-black py-2 px-4 rounded-xl bg-yellow-400'>
          <div
            onClick={toggleQuickDepositOpenClosed}
            className='grid absolute right-2 top-2 cursor-pointer'
          >
            ✖
          </div>
          <div className='text-center text-xl font-semibold'>
            <span>Quick Deposit</span>
          </div>
          <div>
            <form action=''>
              <div className='grid'>
                <label htmlFor='depositAmount'>Deposit Amount</label>
                <input
                  className='outline outline-2 outline-black'
                  type='number'
                  name='depositAmount'
                  id='depositAmount'
                />
              </div>
              <div className='grid justify-center my-2'>
                <button className='outline outline-2 outline-black py-2 px-4 rounded-xl bg-white'>
                  Deposit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickDepositComponent;
