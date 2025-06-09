import EstoqueImg from './assets/ProjetoEstoque.jpg';
import VagasImg from './assets/ProjetoVagas.jpg';
import PortifolioImg from './assets/ProPortifolio.jpg';

const projects = {
  ProjectEstoque: {
    image: EstoqueImg,
    name: 'Estoque',
    description: 'Este é um projeto pessoal desenvolvido para organizar o estoque pessoal. Permite cadastrar e acompanhar produtos usados diariamente e mensalmente, facilitando o controle e a contagem no final do mês. Também possui um sistema simples de banco de horas, permitindo acompanhar as horas trabalhadas por dia e gerar uma tabela mensal.',
    path: '/Estoque'
  },
  ProjectEstacionamento: {
    image: VagasImg,
    name: 'Estacionamento',
    description: 'Projeto desenvolvido para resolver problemas no estacionamento da zona azul. Permite que o condutor visualize e reserve vagas disponíveis por meio de uma tabela e um mapa dinâmico. Ainda está em desenvolvimento, mas a proposta é promissora.',
    path: '/Estacionamento'
  },
  ProjectPortifolio: {
    image: PortifolioImg,
    name: 'Portfólio',
    description: 'Projeto criado para apresentar meus conhecimentos como desenvolvedor. Embora simples, é uma página interativa que permite ao usuário ou recrutador conhecer um pouco mais sobre meu trabalho.',
    path: '/'
  }
};

export default projects;
