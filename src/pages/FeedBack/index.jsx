import "./index.css";

import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import { createFeedback } from "../../api/endpoints";

export default function FeedBack() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);
		const data = {
			nome: form.get("nome"),
			email: form.get("email"),
			avaliacao: form.get("avaliacao"),
			data: new Date().toLocaleDateString(),
		};
		if (!data.nome || !data.email || !data.avaliacao) {
			alert("Todos os campos são obrigatórios.");
			return;
		}

		createFeedback(data);
        e.target.reset();
        alert("Feedback enviado com sucesso!");

	};
	return (
		<>
			<NavBar />
			<section className="feedback_container">
				<form className="feedback_form" onSubmit={handleSubmit}>
					<h2> Nos mande um FeedBack!</h2>

					<div>
						<label> Nome </label>
						<input type="text" name="nome" />
					</div>

					<div>
						<label> Email: </label>
						<input type="email" name="email" />
					</div>

					<div>
						<label> Feedback:</label>
						<textarea name="avaliacao"></textarea>
					</div>

					<button type="submit"> Enviar </button>
				</form>
			</section>
			<Footer />
		</>
	);
}
