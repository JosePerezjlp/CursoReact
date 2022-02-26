import * as React from 'react';
import {Card,CardContent,Typography,CardMedia } from '@mui/material';
import './item.css'

const item = ({data}) => {
  
   return (
     
    <div className='contenedor'>
       <Card sx={{ maxWidth: 450, boxShadow:10 }}>
        <CardContent>
        <CardMedia    
           component="img"
           height="300"
           image={data.img}                                   
                 />
        <Typography gutterBottom variant="h5" component="div">
          {data.categoria} {data.marca}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          precio:${data.precio}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default item;