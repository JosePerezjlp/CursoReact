import React, { useState, useEffect } from 'react';
import ItemList from '../itemlist/itemlist'
const Item = () =>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setItems(json))
    },[]);
    
    return (
        <div>
            {items.map((item)=>{
                return (
                    <div key={item.id}>
                    <ItemList data={item}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Item;