import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";
import MainProductIMG from "../img/MainProductIMG.png"
import MainFuncionariosImg from "../img/MainFuncionariosImg.png"
import MainFornecedoresIMG from "../img/MainFornecedoresIMG.png"

function MainPage() {
  const userName = "Usuário"; // Substitua pelo nome do usuário obtido de contexto ou API

  return (
    <div className={styles.container}>
      <h1>Bem-vindo(a), {userName}</h1>
      <h4>Escolha o grupo de conteúdo <br/> desejado:</h4>

      <div className={styles.buttonContainer}>
        <Link to="/products" className={styles.button}>
          <span className="button-text">Produtos</span>
          <img src={MainProductIMG} alt="imagem reciclável botão de produtos" />
        </Link>
        <Link to="/workers" className={styles.button}>
          <span className="button-text">Funcionários</span>
          <img src={MainFuncionariosImg} alt="imagem do botão de funcionários"/>
        </Link>
        <Link to="/companies" className={styles.button}>
          <span className="button-text">Empresas</span>
          <img src={MainFornecedoresIMG} alt="Imagem do botão de empresas" />
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
