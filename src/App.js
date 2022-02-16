import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticuloProvider } from './cardcontext/cardcontext';

// PAGES
import Inicio from './containerpresenter/inicio/inicio'
import Nosotros from './containerpresenter/nosotros/nosotros';
import Contacto from './containerpresenter/contacto/contacto';
import ItemDetailV from './containerpresenter/itemdetailv/itemdetailv'
import Cart from './containerpresenter/cart/cart'

const App = () => {

  return (
      <Router>
        <ArticuloProvider>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detail/:id' element={<ItemDetailV />}/>
        </Routes>
     
     </div>
     </ArticuloProvider>
     </Router>
     
);
}

export default App;
