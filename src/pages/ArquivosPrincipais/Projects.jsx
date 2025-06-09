import React from 'react';
import ArquivsProjects from '../../ArquivsProjects';
import { useNavigate } from 'react-router-dom';

export default function Projetos() {
  const navigate = useNavigate();

  const handleclick = (path) =>{
    navigate(path)
  }

  return (
      <section className='portifolio'>
        <div className="interface">
          <h2 className='titulo'>Meus <span>Projetos.</span></h2>

          <div className="flex">
            {Object.values(ArquivsProjects).map((project, index) => (
              
                <div
                  key={index}
                  className="img-port"
                  style={{ backgroundImage: `url(${project.image})` }}
                  onClick ={( () => handleclick(project.path) )}
                >
                  <div className='overlay'>{project.name}</div>
                </div>
             
            ))}
          </div>
        </div>
      </section>

  );
}
