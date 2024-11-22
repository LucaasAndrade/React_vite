import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Contatenos from "./pages/contatenos";
import Sobre from "./pages/sobre";
import { FeedBackControl } from "./pages/FeedBackControl";
import FeedBack from "./pages/FeedBack";

export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />

				<Route path="/contato" element={<Contatenos />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/feedback" element={<FeedBack />} />
				<Route path="/admin/feedback-control" element={<FeedBackControl />} />

				<Route path="*" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
}
