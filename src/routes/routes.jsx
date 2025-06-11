import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home.jsx"
import { Questao01 } from "../pages/questao01/questao01.jsx"
import { Questao02 } from "../pages/questao02/questao02.jsx"
import { Questao03 } from "../pages/questao03/questao03.jsx"

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questao01" element={<Questao01 />} />
      <Route path="/questao02" element={<Questao02 />} />
      <Route path="/questao03" element={<Questao03 />} />
    </Routes>
  )

}
