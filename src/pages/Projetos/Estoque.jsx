import { useState } from 'react'
import './ProjectsStyles.css'
import imageEstoque from '../Projetos/imgEstoque'
import projects from '../../ArquivsProjects'


function Estoque(){

    {/*Lista das imagens*/}
    const imagens = [imageEstoque.estoque, imageEstoque.estoque1, 
    imageEstoque.estoque2, imageEstoque.estoque3, imageEstoque.estoque4, imageEstoque.estoque5];

    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximo = () => {
        setIndiceAtual((prevIndex) =>
            prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        );
    };

    const voltar = () => {
        setIndiceAtual((prevIndex) =>
            prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
        );
    };

    const project = projects.ProjectEstoque
    return (
        <>
            <div className="divProject">
                <div className="project">
                    
                            <div className="imageProject">
                                <div className="imgWrapper">
                                    <div className='divImage'>
                                        <img src={imagens[indiceAtual]} className='imgPrincipal' alt="Estacionamento" />
                                    </div>
                                    <div className="mask"></div> {/* Máscara escura com recorte */}
                                    <div className="info">
                                        <h2> {project.name}</h2>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <div className='buttonDinamic'>
                                    <div className='divButtons'>
                                        <button  onClick={voltar}><i className="bi bi-arrow-left-circle-fill"></i></button>
                                        <button  onClick={proximo}><i className="bi bi-arrow-right-circle-fill"></i></button>
                                    </div>
                                    <h1>{indiceAtual + 1} / {imagens.length}</h1>
                                </div>
                                
                            </div>
                        
                </div>
            </div>
        </>
    )
}

export default Estoque