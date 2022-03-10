import * as React from 'react';
import {Card,CardContent,Typography } from '@mui/material';
import './item.css'

const item = ({data}) => {
  
   return (
     
    <div className='contenedor'>
       <Card sx={{ maxWidth: 450,borderColor:'green' , boxShadow:10 }}>
        <CardContent>
        <img className='imgItem' src={data.img} alt='as'/>                                   
                
        <Typography gutterBottom variant="h5" component="div">
          {data.categoria} {data.marca}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio:${data.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock Disponible:{data.stock}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default item;