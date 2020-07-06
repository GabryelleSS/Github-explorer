import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import logoImage from '../../assets/img/logo-github.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import {
  Header,
  Logo,
  InfoUserContainer,
  ImageUser,
  InfoRepoContainer,
  DescriptionContainer,
  TitleRepoUser,
  DescriptionRepo,
  ListInfo,
  ItemsListInfo,
  NumberItems,
  TitleItems,
  IssuesContainer,
  IssuesDescriptionContainer,
  InfoIssuesContainer,
  IssuesName,
  IssuesDescription,
  RepositoryArrowIcon,
} from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <Logo src={logoImage} alt="Logo Github Explorer" />
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            alignItems: 'center',
            display: 'flex',
            fontSize: '18px',
            lineHeight: '2px',
          }}
        >
          <IoIosArrowBack style={{ marginRight: '10px' }} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <InfoUserContainer>
          <InfoRepoContainer>
            <ImageUser
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <DescriptionContainer>
              <TitleRepoUser>{repository.full_name}</TitleRepoUser>
              <DescriptionRepo>{repository.description}</DescriptionRepo>
            </DescriptionContainer>
          </InfoRepoContainer>
          <ListInfo>
            <ItemsListInfo>
              <NumberItems>{repository.stargazers_count}</NumberItems>
              <TitleItems>Stars</TitleItems>
            </ItemsListInfo>
            <ItemsListInfo>
              <NumberItems>{repository.forks_count}</NumberItems>
              <TitleItems>Forks</TitleItems>
            </ItemsListInfo>
            <ItemsListInfo>
              <NumberItems>{repository.open_issues_count}</NumberItems>
              <TitleItems>Issues abertas</TitleItems>
            </ItemsListInfo>
          </ListInfo>
        </InfoUserContainer>
      )}

      <IssuesContainer>
        {issues.map((issue) => (
          <IssuesDescriptionContainer key={issue.id} href={issue.html_url}>
            <InfoIssuesContainer>
              <IssuesName>{issue.title}</IssuesName>
              <IssuesDescription>{issue.user.login}</IssuesDescription>
            </InfoIssuesContainer>

            <RepositoryArrowIcon>
              <IoIosArrowForward />
            </RepositoryArrowIcon>
          </IssuesDescriptionContainer>
        ))}
      </IssuesContainer>
    </>
  );
};

export default Repository;
