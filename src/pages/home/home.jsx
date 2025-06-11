import { useNavigate } from "react-router-dom"
import { Card } from "../../components/card/card.jsx"
import styles from "./home.module.css"


export function Home() {

  const navigate = useNavigate()

  const questoes = [
    { titulo: "Questão 01", descricao: "Tema Claro/Escuro" },
    { titulo: "Questão 02", descricao: "Mensagem de Boas-Vindas" },
    { titulo: "Questão 03", descricao: "Lista de Tarefas" },
  ]

  const handleClick = (index) => {
    switch (index) {
      case 0:
        navigate("/questao01")
        break;

      case 1:
        navigate("/questao02")
        break;

      case 2:
        navigate("/questao03")
        break;

      default:
        alert("Endereço da página não encontrado")
        break;
    }
  }

  return (
    <div className={styles.container}>
      {
        questoes.map((questao, index) => (
          <Card
            key={index}
            id={index}
            onClick={() => handleClick(index)}
            titulo={questao.titulo}
            descricao={questao.descricao} />
        ))
      }
    </div>
  )

}
