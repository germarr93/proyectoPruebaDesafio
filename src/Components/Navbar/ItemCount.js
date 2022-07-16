import React, {useState} from "react";

const ItemCount = ({stock,initial}) =>{

    const [count,setCount] = useState(initial)

    const restar = () =>{
               
        if(count > initial)
        setCount(count + 1)
               
    };  

    const sumar = () =>{
        if(count < stock)
        setCount(count + 1);
    }
    return (
        <div className="counter">
            <div className="counter-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>

            <div>
                <button className="add-btn">Agregar Carrito</button>
            </div>

        </div>
    )
}
export default ItemCount;



// export const ItemCount = ({numero}) =>
// {

// useEffect(() =>{
//     console.log('Chequear')
// },[numero])

//     return (
//         <>
//         <h2>{ numero} </h2>
//    </>
//     )
// }
