import './App.css';
import Emsheader from './components/Emsheader'
import Emsfooter from './components/Emsfooter'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import View from './pages/View';
import Edit from './pages/Edit';


function App() {
  return (
    <>
      <header>
        <Emsheader/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>

      </Routes>
      <footer>
        <Emsfooter/>
      </footer>
    </>
  );
}

export default App;
