
import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './container/itemlistcontainer';
import motorola from './img/motorola-g8.jpg'
import intel from './img/notebook-intel.jpg'
import genius from './img/parlantes-genius.jpg'


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
      <ItemListContainer
      producto='Notebook'
      img={intel}
      marca='Intel '
      precio='$11000'
      stock='10'
      />
      <ItemListContainer
      producto='Parlante'
      img={genius}
      marca='Genius'
      precio='$8000'
      stock='10'
     />
     </div>
     </>
);
}

export default App;
