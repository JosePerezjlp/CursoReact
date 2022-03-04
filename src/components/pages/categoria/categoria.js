import React from "react";
import { useEffect,useState} from "react";
import { useParams } from 'react-router';
import {db} from '../../../firebase/firebaseConfig';
import { collection,query,getDocs,where } from 'firebase/firestore';
import CardCategoria from "../../cardCategoria/cardCategoria";
import { Link } from "react-router-dom";
import './categoria.css'
const Categoria = ()=>{
    const [acce,setAcce]= useState([]);
    let {categoria}  = useParams();
     
    console.log(acce)
      
    useEffect(()=>{
      const gender = async () =>{
        const q = query(collection(db,'productos'),where('categoria', "==",categoria));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
          docs.push({...doc.data(), id:doc.id});
        })
        setAcce(docs)
      }
      gender();
  },[categoria]);

    return(
        <div className="cat">
            {acce.map((accesorios)=>{
                return <Link to={`/detail/${accesorios.id}`} style={{ textDecoration: 'none' }} key={accesorios.id} ><CardCategoria data={accesorios}/></Link>
            })}
        </div>
        
    )
}

export default Categoria;