import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  background: #335577;
  height: 46px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
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
`;
