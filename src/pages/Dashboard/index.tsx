import React, { useState, FormEvent } from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import api from '../../services/api';

import {
  Logo,
  DashboardTitle,
  Form,
  InputSearchRepository,
  ButtonSearchRepository,
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
  const [respositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepository}`);

    const repository = response.data;

    setRepositories([...respositories, repository]);
    setNewRepository('');
  };

  return (
    <>
      <Logo src={logoImage} alt="Logo Github Explorer" />
      <DashboardTitle>Expore repositórios no Github</DashboardTitle>

      <Form onSubmit={handleAddRepository}>
        <InputSearchRepository
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
        />
        <ButtonSearchRepository>Pesquisar</ButtonSearchRepository>
      </Form>

      <RepositoriesContainer>
        {respositories.map((repo) => (
          <Repository key={repo.id}>
            <UserImage
              src={repo.owner.avatar_url}
              alt={`Imagem do repositário do usuário ${repo.owner.login}`}
            />

            <RepositoryDescriptionContainer>
              <RepositoryName>{repo.full_name}</RepositoryName>
              <RepositoryDescription>{repo.description}</RepositoryDescription>
            </RepositoryDescriptionContainer>

            <RepositoryArrowIcon>
              <IoIosArrowForward />
            </RepositoryArrowIcon>
          </Repository>
        ))}
      </RepositoriesContainer>
    </>
  );
};

export default Dashboard;
