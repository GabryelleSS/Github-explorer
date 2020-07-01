import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

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

const Dashboard: React.FC = () => (
  <>
    <Logo src={logoImage} alt="Logo Github Explorer" />
    <DashboardTitle>Expore repositórios no Github</DashboardTitle>

    <Form>
      <InputSearchRepository />
      <ButtonSearchRepository>Pesquisar</ButtonSearchRepository>
    </Form>

    <RepositoriesContainer>
      <Repository>
        <UserImage
          src="https://avatars1.githubusercontent.com/u/42845859?s=400&u=1d1e4f6a234e5ed703f0187dd1574f07fbe3a733&v=4"
          alt="Gabryelle SS"
        />
        <RepositoryDescriptionContainer>
          <RepositoryName>gabryelleSS</RepositoryName>
          <RepositoryDescription>
            Descrição do repositório
          </RepositoryDescription>
        </RepositoryDescriptionContainer>

        <RepositoryArrowIcon>
          <IoIosArrowForward />
        </RepositoryArrowIcon>
      </Repository>
      <Repository>
        <UserImage
          src="https://avatars1.githubusercontent.com/u/42845859?s=400&u=1d1e4f6a234e5ed703f0187dd1574f07fbe3a733&v=4"
          alt="Gabryelle SS"
        />
        <RepositoryDescriptionContainer>
          <RepositoryName>gabryelleSS</RepositoryName>
          <RepositoryDescription>
            Descrição do repositório
          </RepositoryDescription>
        </RepositoryDescriptionContainer>

        <RepositoryArrowIcon>
          <IoIosArrowForward />
        </RepositoryArrowIcon>
      </Repository>
      <Repository>
        <UserImage
          src="https://avatars1.githubusercontent.com/u/42845859?s=400&u=1d1e4f6a234e5ed703f0187dd1574f07fbe3a733&v=4"
          alt="Gabryelle SS"
        />
        <RepositoryDescriptionContainer>
          <RepositoryName>gabryelleSS</RepositoryName>
          <RepositoryDescription>
            Descrição do repositório
          </RepositoryDescription>
        </RepositoryDescriptionContainer>

        <RepositoryArrowIcon>
          <IoIosArrowForward />
        </RepositoryArrowIcon>
      </Repository>
      <Repository>
        <UserImage
          src="https://avatars1.githubusercontent.com/u/42845859?s=400&u=1d1e4f6a234e5ed703f0187dd1574f07fbe3a733&v=4"
          alt="Gabryelle SS"
        />
        <RepositoryDescriptionContainer>
          <RepositoryName>gabryelleSS</RepositoryName>
          <RepositoryDescription>
            Descrição do repositório
          </RepositoryDescription>
        </RepositoryDescriptionContainer>

        <RepositoryArrowIcon>
          <IoIosArrowForward />
        </RepositoryArrowIcon>
      </Repository>
    </RepositoriesContainer>
  </>
);

export default Dashboard;
