import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const item = ({data}) => { 
 console.log(data.title)
  return (
    <Card sx={{ mt:10 , maxWidth: 345 }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.body}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default item