import { Route, Routes } from 'react-router-dom';
// Pages
import WelcomePage from './pages/home/WelcomePage';
import TexasHoldemPokerPage from './pages/texas-holdem/TexasHoldemPokerPage';
import BlackjackPage from './pages/blackjack/BlackjackPage';
import TestPage from './pages/test/TestPage';
import GamesOverviewPage from './pages/games/GamesOverviewPage';
import TexasHoldemGamePage from './pages/texas-holdem/TexasHoldemGamePage';
import BankingOverviewPage from './pages/banking/BankingOverviewPage';
import WithdrawalPage from './pages/banking/WithdrawalPage';
import DepositPage from './pages/banking/DepositPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<WelcomePage />} />
      <Route path='/games' element={<GamesOverviewPage />} />
      <Route path='/games/texas-holdem' element={<TexasHoldemPokerPage />} />
      <Route path='/games/texas-holdem/live-game' element={<TexasHoldemGamePage />} />
      <Route path='/games/texas-holdem/how-to-play' element={<TestPage />} />
      <Route path='/games/blackjack' element={<BlackjackPage />} />
      <Route path='/games/blackjack/how-to-play' element={<TestPage />} />
      <Route path='/banking' element={<BankingOverviewPage />} />
      <Route path='/banking/deposits' element={<DepositPage />} />
      <Route path='/banking/withdrawals' element={<WithdrawalPage />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
  );
}

export default App;
