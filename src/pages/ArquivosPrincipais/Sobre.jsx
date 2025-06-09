import imagens from '../../../public/images/Img'
export default function Sobre() {
  return (
    <section className='sobre'>
      <div className='interface'>
        <div className='flex'>
          <div className='img-sobre'>
            <img src={imagens.minhaFoto} alt="minha foto" className='euImg' />
          </div>

          <div className='txt-sobre'>
            <h2>
              Prazer, <span>me chamo João Paulo.</span>
            </h2>
            <p>
              Sou <strong>Desenvolvedor Web</strong> e <strong>Técnico em Desenvolvimento de Sistemas</strong>, com experiência na criação de
              sites responsivos, sistemas web e landing pages. Trabalho com tecnologias modernas, utilizando:
            </p>

            <ul>
              <li><strong>Linguagens de programação:</strong> JavaScript, React (com Vite), Node.js, PHP</li>
              <li><strong>Marcação e estilo:</strong> HTML5, CSS3, SASS</li>
              <li><strong>Frameworks e ferramentas:</strong> Bootstrap, Git, GitHub</li>
              <li><strong>Bancos de dados:</strong> MySQL (relacional) e MongoDB (não relacional)</li>
            </ul>

            <p>
              Tenho facilidade para aprender novas tecnologias, raciocínio lógico apurado e perfil criativo.
              Valorizo uma boa comunicação e o trabalho em equipe, sempre buscando soluções eficientes e bem estruturadas.
            </p>

            <p>
              Atualmente, estou em constante evolução, estudando para ampliar meus conhecimentos e entregar resultados cada vez melhores.
            </p>

            <div className='btn-Social'>
              <a href="https://www.instagram.com/jpdev2025/"><button><i className="bi bi-instagram"></i></button></a>
              <a href="https://github.com/JoaoPaulo0918"><button><i className="bi bi-github"></i></button></a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-silva-57349221b/"><button><i className="bi bi-linkedin"></i></button></a>
            </div>
          </div>
          
        </div>
      </div>

    </section >
  )
}