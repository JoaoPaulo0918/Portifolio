import imagens from '../../../public/images/Img'
export default function Inicio() {
    return (
      <section className="corpo-do-site">
        <div className="interface">
            <div className="flex">
                <div className="txt-corpo-site">
                    <h1>Transformando ideias<span>.</span></h1>
                    <p>Já pensou naquele site maneiro ou naquele aplicativo web? Então você veio ao lugar certo!
                       Me chamo João Paulo, e sou desenvolvedor web, e atualmente desenvolvo sites, aplicativos e sistemas.
                       Venha me conhecer, traga suas ideias e objetivos e vamos transforma-los em uma realidade funcional, e intuitiva para os usuários.
                    </p>

                    <div className="btn-contato">
                        <a href="#">
                            <button>Entre em contato</button>
                        </a>
                    </div>
                </div>
                <div className="img-corpo-site">
                    <img src={imagens.logoPng} alt="" className='logoMeio'/>
                </div>
            </div>
        </div>
      </section>
    )
  }

  