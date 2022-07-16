import React, { useState } from "react";
import {productos}  from "../Mock/productos";
import { useEffect } from "react";
import ItemList from "./ItemList";


const ItemListContainer = ({title}) =>{
     const [items,setItems] = useState([]);

    useEffect(()=>  {
  
    const traigoProd = new Promise((res,rej) =>{
            setTimeout(()=>
            {
                res(productos);
            },2000)
        });
        traigoProd
        .then((data)=>{
            setItems(data);
        })
        .catch((error) => {
            console.log(error);
        });  
    },[]);




    return(
        <div>
                <h2>{title}</h2>
                <ItemList items={items}/>  
        </div>
    );
};
export default ItemListContainer;