import * as React from 'react';
import {Card,CardContent,Typography} from '@mui/material';

const CardCategoria = ({data}) => {
  
   return (
     
    <div className='sss'>
       <Card sx={{ maxWidth: 300, boxShadow:10 }}>
        <CardContent>
        <img src={data.img} alt='ss'/>                                   
                 
        <Typography gutterBottom variant="h5" component="div">
          {data.categoria} {data.marca}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          precio:${data.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock Disponible:{data.stock}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default CardCategoria;
