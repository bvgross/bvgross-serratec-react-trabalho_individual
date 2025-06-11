import { useState } from "react"
import { Botao } from "../../components/botao/botao.jsx"
import styles from "./questao02.module.css"
import { useNavigate } from "react-router-dom"

export function Questao02() {

  const navigate = useNavigate()
  const [entrada, setEntrada] = useState(false)
  const handleClickEntrar = () => {
    setEntrada(true)
  }
  const handleClickVoltar = () => {
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <p className={styles.saudacao}>
        {entrada ? "Bem-vindo!" : "Olá!"}
      </p>
      {!entrada && (
        <button
          className={styles.botao}
          onClick={handleClickEntrar} >
          {!entrada && "Entrar"}
        </button>
      )}
      <Botao
        dark={true}
        onClick={handleClickVoltar}
        estilo="padrao"
      >
        ← Voltar
      </Botao>
    </div >
  )
}
