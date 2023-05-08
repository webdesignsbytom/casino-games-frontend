import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/home/WelcomePage';
import TexasHoldemPokerPage from './pages/texas-holdem/TexasHoldemPokerPage';
import BlackjackPage from './pages/blackjack/BlackjackPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<WelcomePage />} />
      <Route path='/texas-holdem' index element={<TexasHoldemPokerPage />} />
      <Route path='/blackjack' index element={<BlackjackPage />} />
    </Routes>
  );
}

export default App;
