import NavBar from "./components/nav";
import Footer from "./components/footer";
import Card from "./components/card";
import img1 from "./assets/images/img1.jpg";
import barber from "./assets/images/barbearia.jpg";
import './App.css';

function App() {
  
  const avaliacoes = [
    {
      id: 0,
      nome: "Lucas Andrade",
      avaliacao: "Muito bom! Atendimento excelente!"
    },
    {
      id: 1,
      nome: "Pedro Lucas",
      avaliacao: "Otimo atendimento, profissionais muito atenciosos."
    },
    {
      id: 2,
      nome: "Fernando Muller",
      avaliacao: "Top! Top!"
    }
  ];

  return (
    <>
      <NavBar />
      <main>
        <img src={img1} width="100%" height="auto" />

        <section className='main_container'>
          <div className='mc_img'>
            <img src={barber} width="400px" id='img1'/>
            <img src={barber} width="400px" id='img2'/>
            <img src={barber} width="400px" id='img3'/>
          </div>
          <div className='mc_text'>
            <h3>Barbearia Moderna e Acolhedora</h3>
            <p>

Nossa barbearia oferece um ambiente moderno e confortável, pensado especialmente para quem busca qualidade e um atendimento personalizado. Com um design clean e sofisticado, buscamos proporcionar uma experiência única, onde cada detalhe é cuidado com carinho.

Aqui, você encontra profissionais experientes e apaixonados pelo que fazem, prontos para oferecer o melhor corte, barba ou estilo que combine com você. Além disso, nosso espaço foi projetado para que você se sinta à vontade, relaxado e bem atendido, seja para um rápido corte ou para uma pausa mais longa no seu dia.

Visite-nos e experimente um serviço de barbearia de qualidade, em um ambiente acolhedor e moderno. Você merece se sentir bem, e nós estamos aqui para garantir isso!
            </p>
          </div>
        </section>
      </main>
      <section className="avaliacoes">
        {avaliacoes.map(item => {
            return <Card nome={item.nome} avaliacao={item.avaliacao} />
          })}
      </section>
      <Footer />
    </>
  )
}

export default App
