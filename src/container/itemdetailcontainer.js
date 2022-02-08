import * as React from 'react';
// import ItemCount from '../components/itemcount/itemcount'
// import ItemList from '../components/itemlist/itemlist'
import { useState, useEffect } from 'react';
import ItemDetail from '../components/itemdetail/itemdetail';


const ItemDetailContainer = () => {
  
  const [items,setItems] = useState([]);
  
    
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setItems(json))
            
    },[]);
    
    
    return (<div>
            <ItemDetail item={items} />         
                    
                </div>
    )       
     
  }

export default ItemDetailContainer