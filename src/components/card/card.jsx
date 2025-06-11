import styles from "./card.module.css"

export function Card({ titulo, descricao, onClick }) {

  return (
    <div className={styles.cardStyle} onClick={onClick}>
      <p className={styles.titulo}>{titulo}</p>
      <div className={styles.conteudo}>
        <p className={styles.descricao}>{descricao}</p>
        <p className={styles.confira}>Exercício →</p>
      </div>
    </div>
  )
}
