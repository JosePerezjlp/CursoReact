import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticuloProvider } from './cardcontext/cardcontext';
import ItemDetailContainer from './container/itemdetailcontainer/itemdetailcontainer';
import LogoMarcas from './components/logogamer/logogamer';
// PAGES
import Inicio from './components/pages/inicio/inicio'
import Nosotros from './components/pages/nosotros/nosotros';
import Cart from './components/pages/cart/cart';
import Categoria from './components/pages/categoria/categoria';
import FinalizarCompra from './components/pages/finalizarcompra/finalizarcompra';
const App = () => {

  return (
    
      <Router>
      <ArticuloProvider>

        <Navbar/>
        <LogoMarcas/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route path='/categoria/:categoria' element={<Categoria />}/>
          <Route path='/finalizarcompra' element={<FinalizarCompra />}/>
        </Routes>
        <Footer/>
        </ArticuloProvider>
    
     </Router>
     
)
};

export default App;
