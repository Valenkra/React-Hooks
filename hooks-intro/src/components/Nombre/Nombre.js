import { useState } from "react";
import './Nombre.css';

export const Nombre = () => {

    const [nombre, setNombre] = useState('');

    const loguear = (e) => {
        setNombre(e.target.value);
    }

    return (
        <>
            <input type="text" onChange={loguear}>Cual es tu nombre</input>
            <label> Buen día {nombre} </label>    
            {
                nombre.length ? <div>
                    Buen dia {nombre}!!!
                </div> : undefined
            }
        </>
    );
}
export default Nombre;