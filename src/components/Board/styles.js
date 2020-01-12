import styled from 'styled-components';

export const Outline = styled.div`
  padding: 10px;
  background: #60332e;
  -webkit-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.55);
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 55px);
  grid-template-rows: repeat(8, 55px);
  border: dashed 5px #ca8955;
`;
