import { useState } from "react";
import './Contador.css';

export const Contador = () => 
{
    const [cont, setContador] = useState(0);

    const sumarUno = () => {
        //setContador(contador+1);
        setContador((c) => c + 1);
    };

    return (
        <div>
            <button onClick={sumarUno}>Click me!</button>
            <p>Hiciste click {cont} veces!!</p>
        </div>
    );
}

export default Contador;