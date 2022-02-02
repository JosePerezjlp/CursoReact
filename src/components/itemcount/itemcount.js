import React,{ useState } from "react"
import './itemcount.css'


const ItemCount = () =>{
    const [btnActivo,setBtnActivado] = useState(true)
    const [counter, setCounter] = useState(0);
    
    const agregarProducto = ()=>{
        if(counter < 10) {
            setCounter(counter + 1)
        }
        if(counter === 0){
            setBtnActivado(false)
        }
     }
        
    const restarProducto = ()=>{
        if(counter > 0) {
            
            setCounter(counter - 1)
         }
        if(counter === 0){
            setBtnActivado(true)
        }
     
        };
           
    return(
        <div>
            <p>Stock Disponible:10</p>
            <p className="num">{counter}</p>
            <div className="btns">
            <button onClick={agregarProducto}>Agregar</button>
            <button onClick={restarProducto}>Quitar</button>
            </div>
            <div>
                <button disabled={btnActivo}  className="btn">Agregar al Carrito</button>
            </div>
        </div>
    )
};


export default ItemCount
