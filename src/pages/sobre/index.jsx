import "./index.css";

import NavBar from "../../components/nav";
import Footer from "../../components/footer";


import Graffite from "../../assets/images/graffite.png";
import Barber from "../../assets/images/BarbeariaOld.png";
import Interno from "../../assets/images/interno.png";

export default function Sobre() {
    return (
        <>
            <NavBar />
            <section className="sobre_container">

                <h2>Sobre a Nossa Barbearia</h2>
                <div className="container_one">
                    <div className="limit">
                        <img src={Interno} width="350px" />



                        <p> Com mais de [X] anos de história, nossa barbearia combina tradição e inovação para oferecer uma experiência única a cada cliente. Desde o primeiro corte até o atendimento de excelência, nossa missão sempre foi manter viva a cultura da barbearia, ao mesmo tempo em que nos adaptamos às necessidades e tendências do mundo moderno.

                            Acreditamos que a barbearia é mais do que um simples serviço de beleza – é um espaço de convivência, onde histórias são compartilhadas, e a tradição do cuidado masculino é preservada com respeito e sofisticação. Ao longo dos anos, nossa barbearia se tornou um verdadeiro ponto de encontro para homens que buscam não apenas um bom corte, mas também um ambiente acolhedor e profissional. </p>
                    </div>

                </div>

                <div className="container_two">
                    <div className="limit">

                        <p>
                            Nosso espaço é cuidadosamente planejado para refletir essa mistura de tradição e modernidade, com um design contemporâneo que mantém o charme e a personalidade das barbearias clássicas. Aqui, cada detalhe é pensado para que você se sinta à vontade e relaxado, enquanto nossos barbeiros experientes trabalham com precisão e dedicação.

                            Somos apaixonados pela arte do corte e da barba, e sabemos que o cuidado com a aparência também reflete o respeito próprio. Por isso, utilizamos apenas produtos de qualidade e técnicas atualizadas, sempre com o objetivo de proporcionar o melhor serviço para você.
                        </p>

                        <img src={Graffite} width="400px" />

                    </div>
                </div>

                <div className="container_three">

                    <div className="limit">

                        <img src={Barber} alt="" srcset="" width="400px" />

                        <p>
                            Nossa cultura vai além da simples técnica: ela é construída sobre uma profunda valorização das relações humanas. Aqui, cada cliente é tratado como parte da nossa família. O seu conforto e satisfação são nossa prioridade, e queremos que você se sinta em casa toda vez que vier.

                            Visite-nos e conheça de perto a tradição que nos torna únicos. Seja para um corte clássico, uma barba feita com precisão ou um momento de relaxamento, nossa barbearia é o lugar perfeito para cuidar de si mesmo e celebrar a arte da barbearia.
                        </p>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}