import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github logo" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/52216400?s=460&u=5e790ab37dc071a3fe6ce01fe421647561900932&v=4"
            alt="Eduardo Diniz"
          />
          <div>
            <strong>DinizEduardo/goBarber</strong>
            <p>Aplicação do desafio final do gostack 2019</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/52216400?s=460&u=5e790ab37dc071a3fe6ce01fe421647561900932&v=4"
            alt="Eduardo Diniz"
          />
          <div>
            <strong>DinizEduardo/goBarber</strong>
            <p>Aplicação do desafio final do gostack 2019</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/52216400?s=460&u=5e790ab37dc071a3fe6ce01fe421647561900932&v=4"
            alt="Eduardo Diniz"
          />
          <div>
            <strong>DinizEduardo/goBarber</strong>
            <p>Aplicação do desafio final do gostack 2019</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/52216400?s=460&u=5e790ab37dc071a3fe6ce01fe421647561900932&v=4"
            alt="Eduardo Diniz"
          />
          <div>
            <strong>DinizEduardo/goBarber</strong>
            <p>Aplicação do desafio final do gostack 2019</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
