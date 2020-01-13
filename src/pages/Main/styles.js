import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-image: linear-gradient(25deg, #272238, #583c52, #8b586d, #c17689);
`;
export const Button = styled.button`
  background: #335577;
  height: 46px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  border: 0;
  padding: 0 12px;
  color: #fff;

  &:hover {
    background: #335570;
  }
`;
export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  justify-content: center;

  margin-top: 46px;
`;
export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
`;
export const Loading = styled.h1`
  flex: 1;
  font-size: 48px;
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lobster', recursive;
`;
