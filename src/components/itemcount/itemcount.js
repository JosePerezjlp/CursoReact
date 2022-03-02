import React,{ useState } from "react";
import './itemcount.css';

const ItemCount = ({ stock ,onAdd }) =>{
    const [btnActivo,setBtnActivado] = useState(true);
    const [counter, setCounter] = useState(0);
    const agregarProducto = ()=>{
               
        if(counter < stock) {
            let aux = counter + 1;
            setCounter(aux)
            if(aux > 0 )  {
              setBtnActivado(false)
            }
        }
     };
    const restarProducto = ()=>{
           if(counter > 0) {
            let aux = counter - 1 ;
            setCounter(aux)
            if(aux < 1){
                setBtnActivado(true)
            }
         }
        };
    const add = ()=>{
        onAdd(counter)
        };
        return(
        <div>
            <p className="num">{counter}</p>
            <div className="btns">
            <button onClick={agregarProducto}><i class="fa-solid fa-plus"></i></button>
            <button onClick={restarProducto}><i class="fa-solid fa-minus"></i></button>
            </div>
            <div>
               <button disabled={btnActivo} onClick={add} className="btn">Agregar al Carrito</button>
               
             </div>
            <div className="stock">
                <p>Stock Disponible:{stock} </p>
            </div>
        </div>
    )
};
export default ItemCount;
