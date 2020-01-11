import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  margin-top: 10px;
  > button {
    width: 84px;
    height: 36px;
    font-size: 12px;
  }
`;
