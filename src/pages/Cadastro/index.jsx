import { Form } from "../../components/Form"

import './style.css'
import logo from '../../assets/images/logo.png'


export const Cadastro = () => {
    return (
        <>
        <div className="div-cadastro">
            <div className="div-cadastro-about">
                <img src={logo} alt="" />
                <p><span>Conecte-se</span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                <p><span>Conheça</span> novas pessoas através de amigos de seus amigos e comunidades</p>
                <p><span>Compartilhe</span> seus vídeos, fotos e paixões em um só lugar</p>
            </div>
            <div className="div-cadastro-form">
               <Form />
            </div>
        </div>
        <footer>
            &copy; Orkut.com
            <button>Sobre o Orkut.com</button> -
            <button>Centro de segurança</button> - 
            <button>Privacidade</button> - 
            <button>Termos</button> - 
            <button>Contato</button>
        </footer>
        </>
    )
}