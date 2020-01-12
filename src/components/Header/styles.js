import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 56px;
  width: 100%;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  background: #272238;
  -webkit-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  img {
    width: 46px;
    height: 46px;
  }
  span {
    margin-left: 10px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Lobster', cursive;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;
