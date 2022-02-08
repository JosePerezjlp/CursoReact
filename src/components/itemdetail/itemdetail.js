import React from 'react';
// import Item from '../item/item'
import {CardMedia,Card,CardContent,Typography } from '@mui/material';

const ItemDetail = ({item}) =>{
                
                return (     
                       
                 <div>        
                        <Card sx={{ maxWidth: 250 , m:10 }} >       
                        <CardContent>  
                        <CardMedia
                                   component="img"
                                    height="300"
                                   image={item.image}
                                   
                            />   
                        <Typography gutterBottom variant="h5" component="div">        
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

                        </Card>
                    </div>
                )
            
     }  
     

export default ItemDetail;