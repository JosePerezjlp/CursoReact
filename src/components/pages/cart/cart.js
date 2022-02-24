import React from 'react';
import { useContext } from 'react';
import { ArticuloContext } from '../../../cardcontext/cardcontext';
import '../cart/cart.css'
import CarritoVacio from './render';

const Cart = () => {
	const { art,setArt,removeItem,carga } = useContext(ArticuloContext);
	console.log(art)
	let precioTotal = art.reduce((total,item)=> total +(item.cantidad*item.precio),0)
	return (
		<div className='cart'>
			{carga?art.map((item)=>{
										
				return  <div key={item.id}>
						<div><h2>{item.categoria}({item.cantidad}) </h2><h5>{item.name}</h5><p>${item.precio }</p>
						</div>
							
						<button onClick={() =>setArt([])}>Borrar todo</button>
						<button onClick={() =>removeItem(item.id)}>Borrar item</button>
							
				 </div> 
				   
				}):<CarritoVacio/>}<div><p>precio total:${precioTotal} </p></div>
			</div>
			
  )
}

export default Cart ;