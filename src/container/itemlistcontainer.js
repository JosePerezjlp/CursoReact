import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../components/itemcount/itemcount'
import ItemList from '../components/itemlist/itemlist'

const itemListContainer = ({producto,img,marca,precio}) => {
  return (
    <Card sx={{ maxWidth: 280 , m: 2 , boxShadow:10}}>
       <Typography gutterBottom variant="h5" component="div" >
          {producto}
          <hr></hr>
        </Typography>
        <CardMedia
        component="img"
        height="300"
        image={img}
        alt="moto"
      />
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          Marca: {marca}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: {precio}
        </Typography>
        
      </CardContent>
      <CardActions >
         <ItemCount sx={{display:'flex',justifyContent:'center',alignItems:'center'}}/>
      </CardActions>
    <ItemList/>
    </Card>
   
  );
}

export default itemListContainer