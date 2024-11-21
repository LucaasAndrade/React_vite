

import logo from "../../assets/images/logo.png"

export default function Footer() {
    return (
        <>
            <div className='nav_container'>
                <h2> FEITO PARA VOCÊ </h2>
                <img src={logo} width="130px" height="120px" />
                <h2>PENSADO EM VOCÊ</h2>
            </div>
        </>
    );
}