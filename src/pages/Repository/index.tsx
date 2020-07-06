import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

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
import logoImage from '../../assets/img/logo-github.svg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

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

      <InfoUserContainer>
        <InfoRepoContainer>
          <ImageUser src="https://avatars3.githubusercontent.com/u/42845859?v=4" />
          <DescriptionContainer>
            <TitleRepoUser>Gabryelle/OnRuby</TitleRepoUser>
            <DescriptionRepo>Descrição do repositório</DescriptionRepo>
          </DescriptionContainer>
        </InfoRepoContainer>
        <ListInfo>
          <ItemsListInfo>
            <NumberItems>1808</NumberItems>
            <TitleItems>Stars</TitleItems>
          </ItemsListInfo>
          <ItemsListInfo>
            <NumberItems>48</NumberItems>
            <TitleItems>Forks</TitleItems>
          </ItemsListInfo>
          <ItemsListInfo>
            <NumberItems>67</NumberItems>
            <TitleItems>Issues abertas</TitleItems>
          </ItemsListInfo>
        </ListInfo>
      </InfoUserContainer>

      <IssuesContainer>
        <IssuesDescriptionContainer>
          <InfoIssuesContainer>
            <IssuesName>fsfsd ffsdfsd ffsdfsdfh</IssuesName>
            <IssuesDescription>ffsdfsd</IssuesDescription>
          </InfoIssuesContainer>

          <RepositoryArrowIcon>
            <IoIosArrowForward />
          </RepositoryArrowIcon>
        </IssuesDescriptionContainer>
      </IssuesContainer>
    </>
  );
};

export default Repository;
