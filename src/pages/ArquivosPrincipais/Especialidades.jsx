import React from "react";
import { useNavigate } from "react-router-dom";

export default function Especialidades() {
  const navigate = useNavigate();

  const path = ["/WebApp", "/Sistemas", "/Site"];

  const handleclick = (path) => {
    navigate(path);
  }

  return (
    <section className='especialidades'>
      <div className='interface'>

        <h2 className='titulo'>Minhas <span>Especialidades.</span></h2>

        <div className='flex'>
          <div className='div-box' onClick={(()=> handleclick(path[0]))}>
            <i className="bi bi-code-square"></i>
            <h3>Web App</h3>
            <p>
              Sou Desenvolvedor Web com experiência em criação de aplicações modernas, responsivas e escaláveis. Tenho domínio em HTML, CSS, JavaScript, além de frameworks como React.js, Node.js e bancos de dados como MongoDB e MySQL. Desenvolvo tanto no front-end quanto no back-end, com foco em performance, segurança e boa experiência do usuário.
            </p>
          </div>

          <div className='div-box' onClick={(()=> handleclick(path[1]))}>
            <i className="bi bi-body-text"></i>
            <h3>Sistemas</h3>
            <p>
              Crio sistemas personalizados para atender às necessidades específicas de empresas, negócios e projetos. Com foco em eficiência, automação e usabilidade, desenvolvo soluções como sistemas de gestão, painéis administrativos, controle de usuários, relatórios e integrações com bancos de dados.  
            </p>
          </div>

          <div className='div-box' onClick={(()=> handleclick(path[2]))}>
            <i className="bi bi-credit-card-2-front"></i>
            <h3>Criação de Site</h3>
            <p>Desenvolvo sites modernos, profissionais e totalmente responsivos — adaptados para todos os dispositivos. Utilizo tecnologias como HTML, CSS, JavaScript, React.js e Node.js, garantindo performance, segurança e uma ótima experiência para o usuário.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}