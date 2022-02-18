import * as React from 'react';
import { useParams } from 'react-router';
// import ItemCount from '../components/itemcount/itemcount'
// import ItemList from '../components/itemlist/itemlist'
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemdetail/itemdetail';

const ItemDetailContainer = () => {
  const [item,setItem] = useState({});
          //console.log(items)
	let id = useParams();
	let itemID = id.id;
        //console.log(itemID)
    
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${itemID}`)
      .then(res => res.json())
      .then(json => setItem(json))
    },[itemID]);
        
        return (
          <div>
             <ItemDetail item={item} />
             </div>
         )
 };

export default ItemDetailContainer;