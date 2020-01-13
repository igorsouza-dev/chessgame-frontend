import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #ca8955;
  border: solid 2px #60332e;
  border-radius: 3px;
  margin: 0 20px;
  height: 470px;
`;
export const MoveList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  align-self: stretch;
`;
export const Move = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  width: 100%;
  padding: 5px;
  border-bottom: solid 1px #60332e;
  img {
    height: 16px;
    width: 16px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
  &:last-child {
    border: 0;
  }
`;
