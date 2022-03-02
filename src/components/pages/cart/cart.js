import React from 'react';
import { useContext } from 'react';
import { ArticuloContext } from '../../../cardcontext/cardcontext';
import '../cart/cart.css'
import CarritoVacio from './render';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { art,setArt,removeItem} = useContext(ArticuloContext);
	console.log(art)
	let precioTotal = art.reduce((total,item)=> total +(item.cantidad*item.precio),0)
	return (
		<div >
			{art.length>0?art.map((item)=>{
										
				return  <div className='cart' key={item.id}>
						<div>({item.imagen} <h2>{item.categoria}({item.cantidad}) </h2><h5>{item.name}</h5><p>${item.precio }</p>
						</div>
							
						<button onClick={() =>setArt([])}>Borrar todo</button>
						<button onClick={() =>removeItem(item.id)}>Borrar item</button>
					<Link to={'/finalizarcompra'} style={{textDecoration:'none'}} >	<button onClick={()=>setArt([])}>Finalizar compra</button> </Link>
				 </div> 
				   
				}):<CarritoVacio/>}<div><p>precio total:${precioTotal} </p></div>
			</div>
			
  )
}

export default Cart ;