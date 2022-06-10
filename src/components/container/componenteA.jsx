import React from "react";
import { Contacto } from "../../models/object";
import ComponenteB from "../pure/componenteB";

const ComponenteA = ()=>{
    const usuario = new Contacto("Miguel","Carvalho","miguel@gmail.com",true);
    // console.log("el usuario es:",usuario);
    return (
        <div>
            <ComponenteB contacto={usuario}/>
        </div>
    );
}

export default ComponenteA;
