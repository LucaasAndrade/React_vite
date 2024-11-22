import "./index.css";

import NavBar from "../../components/nav";
import Footer from "../../components/footer";


export default function FeedBack() {
    return (
        <>
            <NavBar />
            <section className="feedback_container">

                <div className="feedback_form">
                        <h2> Nos mande um FeedBack!</h2>

                        <div>
                            <label> Nome </label>
                            <input type="text" />
                        </div>

                        <div>
                            <label> Email: </label>
                            <input type="email" />
                        </div>
                        
                        <div>
                            <label> Data:</label>
                            <input type="date" />

                        </div>

                        <button type="submit"> Enviar </button>
                </div>
                

            </section>
            <Footer />
        </>
    )
}