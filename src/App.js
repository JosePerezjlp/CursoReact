import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// PAGES
import Inicio from './pages/inicio/inicio';
import Nosotros from './pages/nosotros/nosotros';
import Contacto from './pages/contacto/contacto';
import ItemDetailContainer from './pages/itemdetailcontainer/itemdetailcontainer';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
        </Routes>
     
     </div>
     </Router>
);
}

export default App;
