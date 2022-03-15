import * as React from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
// import ItemCount from '../components/itemcount/itemcount'
// import ItemList from '../components/itemlist/itemlist'
import { useState, useEffect } from "react";
import ItemDetail from "../../components/itemdetail/itemdetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  //console.log(items)
  let { id } = useParams();

  useEffect(() => {
    const producto = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs[0]);
    };
    producto();
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
