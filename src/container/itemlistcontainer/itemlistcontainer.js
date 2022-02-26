import * as React from 'react';
import {db} from '../../firebase/firebaseConfig';
import { collection,query,getDocs } from 'firebase/firestore';
// import ItemCount from '../components/itemcount/itemcount'
import ItemList from '../../components/itemlist/itemlist'
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
  const [items,setItems] = useState([]);
    //console.log(items)
    useEffect(()=>{
        const productos = async () =>{
          const q = query(collection(db,'productos'));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id:doc.id});
          })
          setItems(docs)
        }
        productos();
       },[]);

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer