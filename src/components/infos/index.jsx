import "react";

import "./index.css";
export default function Infos({imagem, titulo, info}) {
    return (
        <>
            <div className="card_infos">
                <img src={imagem} width="200px" height="200px"/>
                <h3>
                    {titulo}
                </h3>
                <p>
                    {info}
                </p>
            </div>
        </>
    )
}