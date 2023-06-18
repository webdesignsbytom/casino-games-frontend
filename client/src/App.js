import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/home/WelcomePage';
import TexasHoldemPokerPage from './pages/texas-holdem/TexasHoldemPokerPage';
import BlackjackPage from './pages/blackjack/BlackjackPage';
import TestPage from './pages/test/TestPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<WelcomePage />} />
      <Route path='/games/texas-holdem' element={<TexasHoldemPokerPage />} />
      <Route path='/games/texas-holdem/how-to-play' element={<TestPage />} />
      <Route path='/games/blackjack' element={<BlackjackPage />} />
      <Route path='/games/blackjack/how-to-play' element={<TestPage />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
  );
}

export default App;
