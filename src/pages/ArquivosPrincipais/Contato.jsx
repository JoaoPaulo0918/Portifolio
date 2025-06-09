import { useState } from "react";

export default function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    // Envia os dados para o FormSubmit
    await fetch("https://formsubmit.co/js0918990@gmail.com", {
      method: "POST",
      body: data,
    });

    setMensagemEnviada(true);

    // Redireciona após 3 segundos
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
        <section className='formulario'>
        <div className='interface'>
          <h2 className='titulo'>Entre <span>em Contato.</span></h2>
          
          {!mensagemEnviada ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="nome" placeholder="Seu nome completo" required />
              <input type="email" name="email" placeholder="Seu email" required />
              <input type="tel" name="telefone" placeholder="Seu telefone" />
              <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>

              {/* Configurações extras */}
              <input type="hidden" name="_subject" value="Nova mensagem do site!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="btn-enviar">
                <input type="submit" value="Enviar" className="submit" />
              </div>
            </form>
          ) : (
            <p style={{ fontSize: "18px", color: "green", marginTop: "20px" }}>
              Obrigado! Sua mensagem foi enviada com sucesso. Redirecionando...
            </p>
          )}
        </div>
        
      </section>
  )
}