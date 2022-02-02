import React, { useState, useEffect } from 'react';
import Item from '../item/item'

const ItemList = () =>{
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
                    <Item data={item}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ItemList;