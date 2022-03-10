import React,{ useState } from "react";
import './itemcount.css';
import Swal from "sweetalert2";

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
        Swal.fire({
			icon: 'success',
			title: 'Se agrego el producto al carrito',
			showConfirmButton: false,
			timer: 1500
		  })
        };
        return(
        <div>
            <p className="num">{counter}</p>
            <div className="btns">
            <button onClick={agregarProducto}><i className="fa-solid fa-plus"></i></button>
            <button onClick={restarProducto}><i className="fa-solid fa-minus"></i></button>
            </div>
            <div>
               <button disabled={btnActivo} onClick={add} className="btn"><i className="fa-solid fa-cart-plus"></i></button>
               
             </div>
            <div className="stock">
                <p>Stock Disponible:{stock-counter} </p>
            </div>
        </div>
    )
};
export default ItemCount;
