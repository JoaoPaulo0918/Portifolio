import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'
import imagens from '../public/images/Img'
import './App.css'
import './style.css'
import Inicio from './pages/ArquivosPrincipais/Inicio'
import Especialidades from './pages/ArquivosPrincipais/Especialidades'
import Sobre from './pages/ArquivosPrincipais/Sobre'
import Projetos from './pages/ArquivosPrincipais/Projects'
import Contato from './pages/ArquivosPrincipais/Contato'

function App() {

  const [menuVisivel, setMenuVisivel] = useState(false);
  const abrirMenu = () => setMenuVisivel(true);
  const fecharMenu = () => setMenuVisivel(false);

  return (
    <>
    

        <main>
          <Inicio />

          <Especialidades />

          <Sobre />

          <Projetos />

          <Contato />
          
        </main>

        <footer>
          <div className='interface'>
            <div className='line-footer'>
              <div className='flex'>
                <div className='logo-footer'>
                  <a href="" >
                    <img src={imagens.logoPng} className='logoImg' alt="Logo" />
                  </a>
                </div>
                <div className='btn-Social'>
                  <a href="https://www.instagram.com/jpdev2025/"><button><i className="bi bi-instagram"></i></button></a>
                  <a href="https://github.com/JoaoPaulo0918"><button><i className="bi bi-github"></i></button></a>
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-silva-57349221b/"><button><i className="bi bi-linkedin"></i></button></a>
                </div>
              </div>
            </div>
            <p>
              <i className="bi bi-envelope-fill"></i><a href="mailto:js0918990@gmail.com" className='rodape-email'>js0918990@gmail.com</a>
            </p>
            <div className='border'>

              <div className="img-corpo-site">
                <div className="divLogo">
                  <div className="slider">
                    {/* Imagens - bloco 1 */}
                    <img src={imagens.viteLogo} className="logoMedida" alt="Vite logo" />
                    <img src={imagens.reactLogo} className="logoMedida" alt="React logo" />
                    <img src={imagens.logoHtml} className="logoMedida" alt="HTML logo" />
                    <img src={imagens.logoCss} className="logoMedida" alt="CSS logo" />
                    <img src={imagens.logoSass} className="logoMedida" alt="Sass logo" />
                    <img src={imagens.logoJavaScript} className="logoMedida" alt="JavaScript logo" />
                    <img src={imagens.logoBoot} className="logoMedida" alt="bootstrap logo" />
                    <img src={imagens.logoNodeJs} className="logoMedida" alt="NodeJS logo" />
                    <img src={imagens.logoMongo} className="logoMedida" alt="Mongo logo" />
                    <img src={imagens.logoPhp} className="logoMedida" alt="PHP logo" />
                    <img src={imagens.logoMysql} className="logoMedida" alt="Mysql logo" />
                    <img src={imagens.logogit} className="logoMedida" alt="Git logo" />
                    <img src={imagens.logogithub} className="logoMedida" alt="github logo" />
                    <img src={imagens.logoVs} className="logoMedida" alt="Vs code logo" />

                    {/* Imagens - bloco 2 (duplicado) */}
                    <img src={imagens.viteLogo} className="logoMedida" alt="Vite logo" />
                    <img src={imagens.reactLogo} className="logoMedida" alt="React logo" />
                    <img src={imagens.logoHtml} className="logoMedida" alt="HTML logo" />
                    <img src={imagens.logoCss} className="logoMedida" alt="CSS logo" />
                    <img src={imagens.logoSass} className="logoMedida" alt="Sass logo" />
                    <img src={imagens.logoJavaScript} className="logoMedida" alt="JavaScript logo" />
                    <img src={imagens.logoBoot} className="logoMedida" alt="bootstrap logo" />
                    <img src={imagens.logoNodeJs} className="logoMedida" alt="NodeJS logo" />
                    <img src={imagens.logoMongo} className="logoMedida" alt="Mongo logo" />
                    <img src={imagens.logoPhp} className="logoMedida" alt="PHP logo" />
                    <img src={imagens.logoMysql} className="logoMedida" alt="Mysql logo" />
                    <img src={imagens.logogit} className="logoMedida" alt="Git logo" />
                    <img src={imagens.logogithub} className="logoMedida" alt="github logo" />
                    <img src={imagens.logoVs} className="logoMedida" alt="Vs code logo" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </footer>
      
    </>
  )
}

export default App
