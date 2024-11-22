import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Contatenos from "./pages/contatenos";
import Sobre from "./pages/sobre";
import FeedBack from "./pages/feedback";


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                
                <Route path="/contato" element={<Contatenos />} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/feedback" element={<FeedBack/>} />
                

                <Route path="*" element={<App/>} />



            </Routes>
        </BrowserRouter>
    )
}