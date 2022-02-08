// import * as React from 'react';
// // import ItemCount from '../components/itemcount/itemcount'
// import ItemList from '../components/itemlist/itemlist'
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ItemListContainer = () => {
//   const [items,setItems] = useState([]);
    
//     useEffect(()=>{
//         fetch('https://rickandmortyapi.com/api/character')
//             .then(response => response.json())
//             .then(json => setItems(json))
//     },[]);
    
    

//   return (
//     <ItemList items={items} />
//   );
// }

// export default ItemListContainer