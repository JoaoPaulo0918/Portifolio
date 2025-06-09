import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import App from './App.jsx';
import imagens from '../public/images/Img';
import Inicio from './pages/ArquivosPrincipais/Inicio';
import Especialidades from './pages/ArquivosPrincipais/Especialidades';
import WebApp from './pages/ArquivosPrincipais/Especialidades/WebApp';
import Sistemas from './pages/ArquivosPrincipais/Especialidades/Sistemas';
import Site from './pages/ArquivosPrincipais/Especialidades/Site';
import Sobre from './pages/ArquivosPrincipais/Sobre';
import Projetos from './pages/ArquivosPrincipais/Projects';
import Contato from './pages/ArquivosPrincipais/Contato';
import Estacionamento from './pages/Projetos/Estacionamento';
import Estoque from './pages/Projetos/Estoque';

// ✅ Componente para o Menu com estado
function Navigation() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <nav className='navMenu'>
      <div className="menu">
        <Link to="/" onClick={fecharMenu}>
          <img src="sua-logo.png" className="logoImg" alt="Logo" />
        </Link>
        <Link to="/Inicio" className="a" onClick={fecharMenu}>Inicio</Link>
        <Link to="/Especialidades" className="a" onClick={fecharMenu}>Especialidades</Link>
        <Link to="/Sobre" className="a" onClick={fecharMenu}>Sobre</Link>
        <Link to="/Projetos" className="a" onClick={fecharMenu}>Projetos</Link>
        <Link to="/contato" onClick={fecharMenu}>
          <div className="btn-contato"><button>Contato</button></div>
        </Link>
      </div>

      <div className="menuMobile">
        <i className="bi bi-list" onClick={toggleMenu}></i>

        {menuAberto && (
          <div className="subMenu">
            <i className="bi bi-x" onClick={fecharMenu}></i>
            <Link to="/Inicio" className="a" onClick={fecharMenu}>Inicio</Link>
            <Link to="/Especialidades" className="a" onClick={fecharMenu}>Especialidades</Link>
            <Link to="/Sobre" className="a" onClick={fecharMenu}>Sobre</Link>
            <Link to="/Projetos" className="a" onClick={fecharMenu}>Projetos</Link>
            <Link to="/contato" onClick={fecharMenu}>
              <div className="btn-contato"><button>Contato</button></div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


// ✅ App principal com rotas e menu
function MainApp() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Especialidades" element={<Especialidades />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path='/Estacionamento' element={<Estacionamento />} />
        <Route path='/Estoque' element={<Estoque />} />
        <Route path='/WebApp' element={<WebApp />} />
        <Route path='/Site' element={<Site />} />
        <Route path='/Sistemas' element={<Sistemas />} />
      </Routes>
    </Router>
  );
}

// ✅ Renderização principal
createRoot(document.getElementById('root')).render(<MainApp />);
