import { useEffect, useState } from "react";
import "./style.css";
import { deleteFeedback, getAllFeedbacks } from "../../api/endpoints";

export function FeedBackControl() {
	const [feedback, setFeedback] = useState([]);
	useEffect(() => {
		getAllFeedbacks().then((data) => setFeedback(data));
	}, [feedback]);

	return (
		<div className="container">
			<h1>Feedbacks</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
                        <th>Nome do usuário</th>
						<th>Feedback</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
					{/* Example row, you can map through your feedback data here */}
					{feedback.map((item) => {
						return (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.nome}</td>
                                <td>{item.avaliacao}</td>
								<td>
									<button onClick={() => deleteFeedback(item.id)}>Deletar</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
