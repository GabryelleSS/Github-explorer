import styled from 'styled-components';
import { shade } from 'polished';

export const Logo = styled.img``;

export const DashboardTitle = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin: 40px 0 80px 0;
  max-width: 700px;
`;

export const InputSearchRepository = styled.input.attrs({
  placeholder: 'Digite o nome do repositório',
  type: 'text',
})`
  background-color: #fff;
  border: none;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  flex: 1;
  height: 70px;
  padding: 0 20px;
  width: 50%;

  &::placeholder {
    color: 'a8a8b3';
  }
`;

export const ButtonSearchRepository = styled.button.attrs({
  type: 'submit',
})`
  background-color: #04d361;
  border: none;
  border-radius: 0 5px 5px 0;
  color: #fff;
  font-weight: bold;
  height: 70px;
  transition: background-color 0.2s;
  width: 210px;

  &:hover {
    background-color: ${shade(0.2, '#04d361')};
  }
`;

export const RepositoriesContainer = styled.div`
  max-width: 700px;
`;

export const Repository = styled.a.attrs({
  href: '#',
})`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  padding: 24px;
  transition: transform 0.2s;
  text-decoration: none;
  width: 100%;

  & + a {
    margin-top: 20px;
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export const RepositoryDescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px;
`;

export const RepositoryName = styled.strong`
  color: #3d3d4d;
  font-size: 20px;
`;

export const RepositoryDescription = styled.span`
  color: #a8a8b3;
  font-size: 18px;
  margin-top: 5px;
`;

export const RepositoryArrowIcon = styled.span`
  color: #cbcbd6;
  font-size: 16px;
`;

export default {
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
};
