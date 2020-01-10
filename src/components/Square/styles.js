import styled from 'styled-components';

export const Container = styled.button`
  height: 49px;
  width: 49px;
  background: ${(props) => (props.isBlack ? '#b58863;' : '#f0d9b5')};
  border: solid 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  ${(props) =>
    props.clickable &&
    `
    &:hover {
    background: #453583;
    cursor: pointer;
    }
    &:focus {
      background: #88962d;
      border: solid 2px #000;
    }
    `}
`;
