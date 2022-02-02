
import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './container/itemlistcontainer';
import motorola from './img/motorola-g8.jpg'



function App() {

  return (
    <>
     <Navbar/>
     <div className='cardProducto'>
     <ItemListContainer
      producto='Celular'
      img={motorola}
      marca='Motorola g8'
      precio='$29000'
      stock='10'
     />
     </div>
     </>
);
}

export default App;
