import { BrowserRouter } from "react-router-dom"
import { Home } from "./pages/home/home.jsx"
import { Rotas } from "./routes/routes.jsx"

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
