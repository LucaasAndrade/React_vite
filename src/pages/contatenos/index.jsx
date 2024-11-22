


import 'react';

import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Infos from '../../components/infos';

import Insta from "../../assets/images/instagram-transformed.png";
import Zaps from "../../assets/images/zap-transformed.png";
import Maps from "../../assets/images/maps-transformed.png";

import './index.css';

export default function Sobre() {

    const data = [
        {
            id: 0,
            logo: Insta,
            titulo: "Nosso Instagram",
            info: "@barbearia_lisboa"
        },
        {
            id: 1,
            logo: Zaps,
            titulo: "Nosso número de WhatsApp",
            info: "(11) 9 4002-8922"
        },
        {
            id: 2,
            logo: Maps,
            titulo: "Nossa localização",
            info: "Av. Nações Unidas - N° 222"
        }
    ]

    return (
        <>
            <Nav />
            <main className='infos_container'>
                {data.map(item => {
                    return <Infos imagem={item.logo} titulo={item.titulo} info={item.info} />
                })}
            </main>
            <Footer />
        </>
    )
}