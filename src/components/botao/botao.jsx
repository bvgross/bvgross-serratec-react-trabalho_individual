import styles from "./botao.module.css"

export function Botao({ dark, onClick, estilo, children }) {

  let className = ""

  if (estilo === "padrao") {
    className = dark ? styles.botaoPadraoDarkStyle : styles.botaoPadraoLightStyle
  } else {
    className = dark ? styles.botaoDarkStyle : styles.botaoLightStyle
  }

  return (
    <button className={className} onClick={onClick}>{children}</button>
  )

}
