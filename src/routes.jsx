import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Contatenos from "./pages/contatenos";


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/contato" element={<Contatenos />} />
                

                <Route path="*" element={<App/>} />



            </Routes>
        </BrowserRouter>
    )
}