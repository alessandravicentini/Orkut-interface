import './style.css'

import logo from '../../assets/images/logo.png'
import pato from '../../assets/images/pato.jpg'
import details from '../../assets/images/details.png'
import chocolate from '../../assets/images/chocolate.jpg'
import garfield from '../../assets/images/garfield.jpg'
import coding from '../../assets/images/coding.jpg'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams } from 'react-router-dom'

export const Home = () => {

    const history = useHistory()
    const params = useParams()

    return (
        <>
        <header>
            <div className='header-left'>
                <img src={logo} alt="logo" />
                <button>Início</button>
                <button>Perfil</button>
                <button>Página de recados</button>
                <button>Amigos</button>
                <button>Comunidades</button>
            </div>
            <div className='header-right'>
                <button onClick={() => history.push('/')}>Sair</button>
                <input placeholder='pesquisa do orkut' type="text" name="" id="" />
                <button className='button-search'>&#128269;</button>
            </div>
        </header>
        <div className='main-div'>
        <div className="div-left">
            <div className="div-user">
                <img src={pato} alt="pato" />
                <p>{`${params.name}${params.surname}`}</p>
            </div>
            <div className="div-buttons">
                <button>&#128100; perfil</button>
                <button>&#128221; recados</button>
                <button>&#128247; álbum</button>
                <button>&#128249; vídeos</button>
                <button>&#128172; mensagens</button>
                <button>&#129505; depoimentos</button>
                <button>&#128295; configurações</button>
            </div>
        </div>
        <div className="div-middle">
            <h2>{`${params.name}${params.surname}`}</h2>
            <img src={details} alt="detalhes" />
            <div className="div-user-info">
                <p><span className='span-left'>status de relacionamento: </span><span>programador</span></p>
                <p><span className='span-left'>quem sou eu: </span><span>um feliz e contente aluno da Kenzie</span></p>
                <p><span className='span-left'>país: </span><span>Brasil</span></p>
            </div>
        </div>
        <div className="div-right">
            <div className="div-friends">
                <p className='title'>meus amigos (0)</p>
                <p className='span-friends'>você ainda não adicionou nenhum amigo</p>
                <button>adicionar amigos</button>
            </div>
            <div className='div-community'>
                <p className='title'>minhas comunidades (3)</p>
                <div className='div-community-items'>
                    <div className='community'>
                        <img src={chocolate} alt="" />
                        <span>EU AMO CHOCOLATE (720)</span>
                    </div>
                    <div className='community'>
                        <img src={garfield} alt="" />
                        <span>Eu Odeio Acordar Cedo (20765)</span>
                    </div>
                    <div className='community'>
                        <img src={coding} alt="" />
                        <span>Javascript já me fez chorar (68439)</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}