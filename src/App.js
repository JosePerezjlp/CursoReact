import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticuloProvider } from './cardcontext/cardcontext';
import ItemDetailContainer from './container/itemdetailcontainer/itemdetailcontainer';
// PAGES
import Inicio from './components/pages/inicio/inicio'
import Nosotros from './components/pages/nosotros/nosotros';
import Contacto from './components/pages/contacto/contacto';

import Cart from './components/pages/cart/cart';

const App = () => {

  return (
    
      <Router>
      <ArticuloProvider>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
        </Routes>
        </ArticuloProvider>
    
     </Router>
     
)
};

export default App;
