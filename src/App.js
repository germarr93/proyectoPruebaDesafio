import "./App.css";
import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount  from "./Components/ItemListContainer";
function App() {
    const onAdd = () =>{
    }
      return (
        <div>
          <NavBar/>
          <ItemListContainer title="bienvenidos"/>
          <ItemCount stock={5} initial={10} onAdd={onAdd}/>          
        </div>
       );
    }

export default App;
