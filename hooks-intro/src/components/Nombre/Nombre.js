import { useState } from "react";
import './Nombre.css';

function Nombre() {
    const [miNombre, setNombre] = useState('');

    const loguear = (e) => {
        setNombre(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={loguear} placeholder="Cual es tu nombre?"/>
            {
                miNombre.length ? <div>
                    Buen dia {miNombre}!!!
                </div> : undefined
            }
        </div>
    );
}
export default Nombre;