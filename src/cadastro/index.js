
import Botao from "../components/utils/botao/botao";
import Inserir from "../components/utils/inputText/input";

export default function Cadastrar() {

    function teste(){
        alert("Teste!!!!!");
    }

  return(
    <div>

      <div>
        <h1>Cadastro</h1>
      </div>

      <div>
        <h2>E-mail</h2>
        <Inserir name={"text"} place={"Inserir E-mail"}/>
      </div>

      <div>
        <h2>Senha</h2>
        <Inserir name={"text"} place={"Inserir senha"}/>
      </div>

      <div>
        <Botao event={teste} name={"Cadastrar"}/>
      </div>

    </div>
  );
}
