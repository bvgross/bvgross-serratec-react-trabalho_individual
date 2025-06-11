import styles from "./questao01.module.css"
import { Botao } from "../../components/botao/botao.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Questao01() {
  const navigate = useNavigate()

  const [temaEscuro, setTemaEscuro] = useState(true)

  const handleClickTema = () => {
    setTemaEscuro(!temaEscuro)
  }

  const handleClickVoltar = () => {
    navigate("/")
  }

  return (
    <div className={temaEscuro ? styles.containerDarkStyle : styles.containerLightStyle}>
      <Botao
        dark={temaEscuro}
        onClick={handleClickTema}
        estilo="interruptor">
        {temaEscuro ? "Tema Claro" : "Tema Escuro"}
      </Botao>
      <Botao
        dark={temaEscuro}
        onClick={handleClickVoltar}
        estilo="padrao">
        ← Voltar
      </Botao>
    </div >
  )
}
