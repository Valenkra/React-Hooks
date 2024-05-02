import { useState } from "react";
import './Contador.css';

export const Contador = () => 
{
    const [contador, setContador] = useState(0);

    const sumarUno = () => {
        //setContador(contador+1);
        setContador((c) => c++);
    };
    
    return (
        <div>
            <button onClick={sumarUno}>Click me!</button>
            <p>Hiciste click {contador} veces!!</p>
        </div>

    );
}

export default Contador;