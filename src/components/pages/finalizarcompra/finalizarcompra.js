import React, { useState } from "react";
import "../finalizarcompra/finalizarcompra.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import MsjFinalizado from "../../msjfinalizado/msjfinalizado";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  Address: "",
};

const FinalizarCompra = () => {
  const [values, setValues] = useState(initialState);

  const [numId, setNumId] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setNumId(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <h1>Complete el formulario</h1>
      <form className="contenedorForm" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 200 }}
          value={values.name}
          name="name"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 200 }}
          value={values.lastName}
          name="lastName"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Phone"
          style={{ margin: 10, width: 200 }}
          value={values.phone}
          name="phone"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 200 }}
          value={values.email}
          name="email"
          onChange={handleOnChange}
        />

        <TextField
          placeholder="City"
          style={{ margin: 10, width: 200 }}
          value={values.city}
          name="city"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Address"
          style={{ margin: 10, width: 200 }}
          value={values.direccion}
          name="Address"
          onChange={handleOnChange}
        />
      </form>
      <Button
        color="success"
        variant="contained"
        size="small"
        style={{ marginLeft: 575, paddingRight: 30, paddingLeft: 30 }}
        className="btnFinish"
      >
        Enviar
      </Button>
      {numId && <MsjFinalizado numId={numId} />}
    </div>
  );
};

export default FinalizarCompra;
