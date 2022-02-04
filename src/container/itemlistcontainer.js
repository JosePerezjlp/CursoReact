import * as React from 'react';
// import ItemCount from '../components/itemcount/itemcount'
import ItemList from '../components/itemlist/itemlist'
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [items,setItems] = useState([]);
    
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setItems(json))
    },[]);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer