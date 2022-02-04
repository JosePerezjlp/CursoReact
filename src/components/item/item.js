import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './item.css'

const item = ({data}) => { 
 console.log(data.title)
  return (
    <div className='contenedor'>
      
    <Card sx={{ maxWidth: 250 , }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.body}
        </Typography>
      </CardContent>
      
    </Card>
    
    </div>
  );
}

export default item