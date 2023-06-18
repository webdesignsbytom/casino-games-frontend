import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/home/WelcomePage';
import TexasHoldemPokerPage from './pages/texas-holdem/TexasHoldemPokerPage';
import BlackjackPage from './pages/blackjack/BlackjackPage';
import TestPage from './pages/test/TestPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<WelcomePage />} />
      <Route path='/games/texas-holdem' index element={<TexasHoldemPokerPage />} />
      <Route path='/games/blackjack' index element={<BlackjackPage />} />
      <Route path='/test' index element={<TestPage />} />
    </Routes>
  );
}

export default App;
