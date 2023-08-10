import { useState } from "react";
import Botao from "../components/utils/botao/botao";
import Login from "../login";
import Cadastrar from "../cadastro";

export default function Inicio () {
    const [tela, settela] = useState('');



    if(tela === ''){
            return(
                <div>
                    <div>
                        <h1>"Logo do site"</h1>
                    </div>

                    <div>
                        <Botao name={"Logar"}/>
                    </div>

                    <div>
                        <Botao  name={"Cadastrar"}/>
                    </div>
                </div>
            );
    }

    if(tela === '1'){
        return <Login/>
    }

    if(tela === '2'){
        return <Cadastrar />
    }
}