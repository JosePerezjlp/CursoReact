import React from 'react';
import { useState } from 'react';
// import Item from '../item/item'
import {CardMedia,Card,CardContent,Typography } from '@mui/material';
import ItemCount from '../itemcount/itemcount';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) =>{
        const [onAdd,setOnAdd] = useState();
        const [stock,setStock] = useState(10)
               return (                          
                 <div className='detail'>        
                        <Card sx={{ maxWidth: 550, mt:5 , ml:45 , mb:5 , boxShadow:10 }}  >       
                        <CardContent>  
                        <CardMedia
                                   component="img"
                                    height="400"
                                   image={item.image}
                                        />   
                        <Typography gutterBottom variant="h5" component="div">        
                                {item.title} 
                        </Typography> 
                        <Typography variant="body2" color="text.secondary">
                                   {item.category}
                           </Typography>    
                        <Typography variant="body2" color="text.secondary">
                                   Precio:${item.price}
                           </Typography>
                         <br></br>
                           <Typography variant="body2" color="text.secondary">
                                   {item.description}
                           </Typography>
                           </CardContent>
                          {onAdd?<Link to={'/cart'}><button style={{backgroundColor:'cyan',marginLeft:210,marginBottom:3}}>Terminar mi compra</button></Link>:<ItemCount onAdd={onAdd} setOnAdd={setOnAdd} setStock={setStock} stock={stock} />}
                        </Card>
                    </div>
                )
             }  
                  
export default ItemDetail;