import './App.css'


import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// importar componentes criados
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import NavBarApp from './Layouts/Navbar/Navbar';


function App() {
  return (
    <div className="App">
 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBarApp />}>
                <Route index element={<Home /> } />
                <Route path='About' element={<About /> } />                
                <Route path='Contact' element={<Contact /> } />

                <Route path='*' element={ <Navigate replace to="/"/> } />
            </Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
