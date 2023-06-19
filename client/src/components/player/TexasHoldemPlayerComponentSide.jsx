import React from 'react';

function TexasHoldemPlayerComponentSide({ playerData }) {
  console.log('playerData', playerData);
  return (
    <div className='w-fit h-fit grid grid-cols-2'>
      <div>
        <img
          className='w-20 h-20 rounded-full outline outline-1 outline-black'
          src={playerData.profile.profileimageUrl}
          alt='profile img'
        />
      </div>
      <div className='grid'>
        <div>
          <p>{playerData.username}</p>
          <p>£{playerData.bank.funds}</p>
          <p>PLayert</p>
          <p>PLayert</p>
        </div>
        <div className='outline outline-1 outline-black rounded-full h-8 w-8 grid items-center justify-center '>
          <span>D</span>
        </div>
      </div>
    </div>
  );
}

export default TexasHoldemPlayerComponentSide;
