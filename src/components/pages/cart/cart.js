import React from 'react';
import { useContext } from 'react';
import { ArticuloContext } from '../../../cardcontext/cardcontext';

const Cart = () => {
	const { art,setArt,removeItem } = useContext(ArticuloContext);
	console.log(art)
		
	return (
		<div>
			
			{art.map((item)=>{
				return <div>
							
							
						<div><h2>{item.categoria}</h2><h5>{item.name}</h5><p>{item.cantidad} x ${item.price}</p>
						</div>
							
						<button onClick={() =>setArt([])}>Borrar todo</button>
						<button onClick={() =>removeItem(item.id)}>Borrar item</button>	
				 </div>
				})}
			 
			</div>
			
  );
}

export default Cart ;