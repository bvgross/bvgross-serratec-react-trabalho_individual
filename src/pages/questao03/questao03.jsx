import styles from "./questao03.module.css"
import { Botao } from "../../components/botao/botao.jsx"
import { CardTarefa } from "../../components/cardTarefa/cardTarefa.jsx"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Questao03() {
  const [tarefas, setTarefas] = useState([])
  const navigate = useNavigate()

  class Tarefa {
    constructor(titulo, texto) {
      this.titulo = titulo;
      this.texto = texto;
      this.concluido = false;
    }
  }

  const handleAdicionarTarefa = (titulo, texto) => {
    const novaTarefa = new Tarefa(titulo, texto)
    setTarefas([...tarefas, novaTarefa])
    console.log(tarefas)
  }

  const handleConcluirTarefa = (index) => {
    const novasTarefas = [...tarefas]
    tarefas[index].concluido = true
    setTarefas(novasTarefas)
  }

  const handleClickVoltar = () => {
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <p className={styles.texto}>Adicionar tarefa:</p>
      <CardTarefa
        adicionar={true}
        aoAdicionarTarefa={handleAdicionarTarefa}
      />
      <p className={styles.texto}>Tarefas:</p>
      {tarefas.map((tarefa, index) => (
        <CardTarefa
          key={index}
          adicionar={false}
          index={index}
          aoConcluirTarefa={handleConcluirTarefa}
          tituloInicial={tarefa.titulo}
          textoInicial={tarefa.texto}
          concluidoInicial={tarefa.concluido}
        />
      ))}
      <Botao
        dark={true}
        onClick={handleClickVoltar}
        estilo="padrao"
      >
        ← Voltar
      </Botao>
    </div>
  )
}
