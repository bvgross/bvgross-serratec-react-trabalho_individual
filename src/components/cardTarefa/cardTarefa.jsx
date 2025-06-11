import { useState } from "react"
import styles from "./cardTarefa.module.css"

export function CardTarefa({
  adicionar,
  aoAdicionarTarefa,
  aoConcluirTarefa,
  tituloInicial = "",
  textoInicial = "",
  concluidoInicial = false,
  index
}) {
  const [titulo, setTitulo] = useState(tituloInicial)
  const [texto, setTexto] = useState(textoInicial)
  const [concluido, setConcluido] = useState(concluidoInicial)

  const handleTituloChange = (e) => {
    setTitulo(e.target.value)
  }

  const handleTextoChange = (e) => {
    setTexto(e.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      aoAdicionarTarefa(titulo, texto)
    }
  }

  return (
    <div className={styles.cardStyle}>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={handleTituloChange}
          className={concluido ? styles.tituloConcluido : styles.titulo}
          onKeyDown={handleKeyDown}
        />
        <div className={styles.conteudo}>
          <input
            type="text"
            placeholder="Digite a tarefa"
            value={texto}
            onChange={handleTextoChange}
            className={concluido ? styles.textoConcluido : styles.texto}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      {adicionar ?
        (
          <div className={styles.botaoContainer}>
            <button
              className={styles.botaoAdicionar}
              onClick={() => {
                if (aoAdicionarTarefa) {
                  aoAdicionarTarefa(titulo, texto);
                  setTitulo("");
                  setTexto("");
                }
              }}
            >
              +
            </button>
          </div>
        )
        :
        (
          <div className={styles.botaoContainer}>
            <button
              className={concluido ? styles.botaoConcluirMarcado : styles.botaoConcluir}
              onClick={() => {
                if (aoConcluirTarefa) {
                  aoConcluirTarefa(index);
                  setConcluido(!concluido)
                }
              }}
            >
              ✓
            </button>
          </div>
        )

      }
    </div>
  )
}
