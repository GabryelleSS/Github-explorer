import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-transform: lowercase;

  & a {
    color: #a8a8b2;
  }

  & a:hover {
    color: #666;
  }
`;

export const Logo = styled.img``;

export const InfoUserContainer = styled.div`
  margin-top: 50px;
`;

export const InfoRepoContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const ImageUser = styled.img`
  border-radius: 50%;
  height: 120px;
  margin-right: 30px;
  width: 120px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleRepoUser = styled.strong`
  color: #3d3d4d;
  font-size: 36px;
`;

export const DescriptionRepo = styled.span`
  color: #737380;
  font-size: 18px;
  margin-top: 4px;
`;

export const ListInfo = styled.ul`
  display: flex;
  list-style: none;
`;

export const ItemsListInfo = styled.li`
  display: flex;
  flex-direction: column;
  margin: 40px 50px 0 0;
`;

export const NumberItems = styled.strong`
  color: #3d3d4d;
  font-size: 36px;
`;

export const TitleItems = styled.span`
  color: #6c6c80;
`;

export const IssuesContainer = styled.div``;

export const IssuesDescriptionContainer = styled.a.attrs({
  target: 'blank',
})`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 35px 24px;
  text-decoration: none;
  transition: transform 0.2s;
  width: 100%;

  &:hover {
    transform: translateX(10px);
  }
`;

export const InfoIssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssuesName = styled.strong`
  color: #3d3d4d;
  font-size: 20px;
`;

export const IssuesDescription = styled.span`
  color: #a8a8b3;
  font-size: 18px;
  margin-top: 5px;
`;

export const RepositoryArrowIcon = styled.div`
  color: #cbcbd6;
  font-size: 16px;
`;

export default {
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
};
