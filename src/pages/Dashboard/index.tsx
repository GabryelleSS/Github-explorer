import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import api from '../../services/api';

import {
  Logo,
  DashboardTitle,
  Form,
  InputSearchRepository,
  ButtonSearchRepository,
  MessageError,
  RepositoriesContainer,
  Repository,
  RepositoryDescriptionContainer,
  UserImage,
  RepositoryName,
  RepositoryDescription,
  RepositoryArrowIcon,
} from './styles';

import logoImage from '../../assets/img/logo-github.svg';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories'
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositório.');
    }
  };

  return (
    <>
      <Logo src={logoImage} alt="Logo Github Explorer" />
      <DashboardTitle>Expore repositórios no Github</DashboardTitle>

      <Form onSubmit={handleAddRepository}>
        <InputSearchRepository
          hasError={!!inputError}
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
        />
        <ButtonSearchRepository>Pesquisar</ButtonSearchRepository>
      </Form>

      {inputError && <MessageError>{inputError}</MessageError>}

      <RepositoriesContainer>
        {repositories.map((repo) => (
          <Link
            key={repo.full_name}
            to={`/repositories/${repo.full_name}`}
            style={{ textDecoration: 'none' }}
          >
            <Repository>
              <UserImage
                src={repo.owner.avatar_url}
                alt={`Imagem do repositário do usuário ${repo.owner.login}`}
              />

              <RepositoryDescriptionContainer>
                <RepositoryName>{repo.full_name}</RepositoryName>
                <RepositoryDescription>
                  {repo.description}
                </RepositoryDescription>
              </RepositoryDescriptionContainer>

              <RepositoryArrowIcon>
                <IoIosArrowForward />
              </RepositoryArrowIcon>
            </Repository>
          </Link>
        ))}
      </RepositoriesContainer>
    </>
  );
};

export default Dashboard;
