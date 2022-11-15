import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Link} from 'react-router-dom'

import {
  BrowserRouter,
  Routes, 
  Route,} from "react-router-dom";
import Inicio from './pages/Inicio';
import Post from './components/Post';
import Teste from './components/Teste';
import User from './components/User';
import Footer from './components/Footer';

function App() {
  return (
    
   


    

       <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/teste/:slug"  component={Teste} />
          <Route path='/user/:id' element={<User />} />
        </Routes>
        <Footer/>
      
    </BrowserRouter>
     
    
  );
}

export default App;
