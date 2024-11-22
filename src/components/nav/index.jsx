
import 'react';
import './index.css';
import logo from "../../assets/images/logo.png"


export default function NavBar() {


    return (
        <>
            <div className='nav_container'>
                <h2> FEITO PARA VOCÊ </h2>
                <a href='/'><img src={logo} width="130px" height="120px" /> </a>

                <div className='nav_links'>
                    <a href='/sobre'> Sobre nós </a>
                    <a> Feedback </a>
                    <a href='/contato'> Contate-nos </a>
                </div>
            </div>
        </>   
    );
}

