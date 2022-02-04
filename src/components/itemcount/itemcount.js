// import React,{ useState } from "react"
// import './itemcount.css'


// const ItemCount = ({setOnAdd, stock ,onAdd}) =>{
//     const [btnActivo,setBtnActivado] = useState(true)
//     const [counter, setCounter] = useState(0);
//     const agregarProducto = ()=>{
//         if(counter < stock) {
//             let aux = counter + 1;
//             setCounter(aux)
//             if(aux > 0){
//                 setBtnActivado(false)
//             }
//         }
//      }
//     const restarProducto = ()=>{
//         if(counter > 0) {
//             let aux = counter - 1 ;
//             setCounter(aux)
//             if(aux < 1){
//                 setBtnActivado(true)
//             }
//          }
//         };

//     const add = ()=>{
//         setOnAdd(counter)
//         setOnAdd = onAdd
//         console.log(`Se Agregaron sus ${onAdd} productos al carrito`)
//         }
           
//     return(
//         <div>
//             <p>Stock Disponible:{stock} </p>
//             <p className="num">{counter}</p>
//             <div className="btns">
//             <button onClick={agregarProducto}>Agregar</button>
//             <button onClick={restarProducto}>Quitar</button>
//             </div>
//             <div>
//                 <button disabled={btnActivo} onClick={add} className="btn">Agregar al Carrito</button>
//             </div>
//         </div>
//     )
// };


// export default ItemCount
