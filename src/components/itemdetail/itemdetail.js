import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {Card,CardContent,Typography } from '@mui/material';
import ItemCount from '../itemcount/itemcount';
import { Link } from 'react-router-dom';
import { ArticuloContext }  from '../../cardcontext/cardcontext';
import '../itemdetail/itemdetail.css'

const ItemDetail = ({item}) =>{
        const [render,setRender] = useState(true)
        const { addItem,setCarga } = useContext(ArticuloContext);
        console.log(item)
        function onAdd(cantidad){
                setCarga(true);
                setRender(false);
                 addItem({item,cantidad})
                };
        
                return (
                                                  
                 <div className='detail'>
                          
                        <Card sx={{ maxWidth: 400, mt:5 , ml:55 , mb:5 , boxShadow:10 }}  >       
                        <CardContent>  
                        <img className='imgDetail' src={item.img} alt='ss' />  
                        <Typography gutterBottom variant="h5" component="div">        
                                {item.categoria} 
                        </Typography> 
                        <Typography variant="body2" color="text.secondary">
                                   {item.marca}
                           </Typography>    
                        <Typography variant="body2" color="text.secondary">
                                   Precio:${item.precio}
                           </Typography>
                         <br></br>
                           <Typography variant="body2" color="text.secondary">
                                   {item.descripcion}
                           </Typography>
                          
                           </CardContent>
                          {render? <ItemCount onAdd={onAdd} stock={item.stock}/>:<Link to={'/cart'} ><button className='finish' style={{backgroundColor:'cyan',marginLeft:150,marginBottom:3}}>Terminar Compra  </button></Link>}
                        </Card>
                        
                    </div>
                )
             };
                  
export default ItemDetail;