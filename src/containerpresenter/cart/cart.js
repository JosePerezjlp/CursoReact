import React from 'react';
import { useContext } from 'react';
import { ArticuloContext } from '../../cardcontext/cardcontext';

const Cart = () => {
	const {art,addItem} = useContext(ArticuloContext);
	console.log(art)
		
	return (
		<div>
			
			{art.map((item)=>{
				return (<div>name {item.title} </div>)
			})}
			</div>
			
  );
}

export default Cart ;