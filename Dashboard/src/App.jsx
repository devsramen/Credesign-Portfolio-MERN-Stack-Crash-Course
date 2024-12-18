import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;