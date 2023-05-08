import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Navbar from '../../components/nav/Navbar'

function BlackjackPage() {
  return (
    <div className='grid font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
    <Navbar />
    {/* Main */}
    <main className='grid h-full p-1'>
      <Link to='/texas-holdem'>Texas Holdem</Link>
      <Link to='/blackjack'>Blackjack</Link>
    </main>
  </div>
  )
}

export default BlackjackPage