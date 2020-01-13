import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #ca8955;
  border: solid 2px #60332e;
  border-radius: 3px;
  -webkit-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  margin: 0 20px;
  padding: 10px;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  height: 100%;
  h1 {
    font-family: 'Lobster', cursive;
    color: ${(props) => (props.player === 'W' ? '#fff' : '#000')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::after {
      content: '';
      border-bottom: solid 1px #000;
      display: block;
      width: 120px;
    }
  }
  > span {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: 5px;
  }
`;
export const ScoreContainer = styled.div`
  border: dashed 2px #ccc;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  padding: 10px;
`;

export const PieceScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 49px;
    width: 49px;
  }
  span {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
`;
