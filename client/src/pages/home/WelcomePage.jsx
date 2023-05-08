import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <Link to='/texas-holdem'>Texas Holdem</Link>
      <Link to='/blackjack'>Blackjack</Link>
    </div>
  );
}

export default WelcomePage;
