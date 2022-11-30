import './App.css';
import Navbar from './Navbar';
import Confirm from './Confirm';
import LogIn from './LogIn';
import SignIn from './SignIn';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Navbar /><Outlet /></>}>
        <Route index element={<Home/>} />
        <Route path='login' element={<LogIn />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='confirm' element={<Confirm />} />
      </Route>
    </Routes>

  );
}

export default App;
