import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${colors.sideBar};
  -webkit-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
`;
export const GithubContainer = styled.div`
  margin-top: 15px;
  a {
    img {
      height: 30px;
      width: 30px;
    }
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 60px;
    height: 60px;
  }
  span {
    margin-left: 10px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Lobster', cursive;
  }
  small {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Lobster', sans-serif;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  align-self: stretch;
`;
