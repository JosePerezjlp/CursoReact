import './App.css';
import Navbar from './components/navbar/navbar';
// import ItemListContainer from './container/itemlistcontainer';

import ItemDetailContainer from './container/itemdetailcontainer';

function App() {

  return (
    <>
     <Navbar/>
     <div className='app'>
     <ItemDetailContainer/>
     {/* <ItemListContainer */}
      {/* /> */}
     </div>
     </>
);
}

export default App;
