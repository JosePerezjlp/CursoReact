import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
// import Item from '../item/item'
import {CardMedia,Card,CardContent,Typography } from '@mui/material';
import ItemCount from '../itemcount/itemcount';
import { Link } from 'react-router-dom';
import { ArticuloContext }  from '../../cardcontext/cardcontext';
import AlertDetail from '../itemdetail/alertDetail'


const ItemDetail = ({item}) =>{
        const [render,setRender] = useState(true)
        const [stock,setStock] = useState(10);
        const { addItem,setCarga } = useContext(ArticuloContext);
        console.log(item)
        function onAdd(cantidad){
                setCarga(true);
                setRender(false);
                 addItem({item,cantidad})
                };
        
                return (
                                                  
                 <div className='detail'>
                          
                        <Card sx={{ maxWidth: 550, mt:5 , ml:45 , mb:5 , boxShadow:10 }}  >       
                        <CardContent>  
                        <CardMedia
                                   component="img"
                                    height="400"
                                   image={item.img}
                                        />   
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
                                   
                           </Typography>
                          
                           </CardContent>
                          {render? <ItemCount onAdd={onAdd} setStock={setStock} stock={stock}/>:<Link to={'/cart'}><button onClick={onAdd} style={{backgroundColor:'cyan',marginLeft:210,marginBottom:3}}>Terminar Compra  </button> <AlertDetail/></Link>}
                        </Card>
                        
                    </div>
                )
             };
                  
export default ItemDetail;