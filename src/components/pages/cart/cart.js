import React from 'react';
import { useContext } from 'react';
import { ArticuloContext } from '../../../cardcontext/cardcontext';
import '../cart/cart.css'
import CarritoVacio from './render';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { art,setArt,removeItem} = useContext(ArticuloContext);
	//console.log(art)
	let precioTotal = art.reduce((total,item)=> total +(item.cantidad*item.precio),0)
	return (
		<div >
			{art.length>0?art.map((item)=>{
										
				return  <div className='cart' key={item.id}>
						
						<div> <h2>{item.categoria} {item.name} ({item.cantidad})<button className='btn1' onClick={() =>removeItem(item.id)}><i className="fa-solid fa-trash"></i></button> </h2> <img src={item.img} alt='sera'/><p>${item.precio }</p>
						Stock Disponible:{item.stock - item.cantidad}
												
						</div>
						<button className='btnVaciar' onClick={() =>setArt([])}>Vaciar Carrito</button>
						
					<Link to={'/finalizarcompra'} style={{textDecoration:'none'}} >	<button className='btnFinalizar' onClick={()=>setArt([])}>Finalizar compra</button> </Link>
				 </div> 
				   
				}):<CarritoVacio/>}<div><p>precio total:${precioTotal} </p></div>
			</div>
			
  )
}

export default Cart ;