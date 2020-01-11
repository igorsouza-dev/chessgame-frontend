import styled from 'styled-components';

export const Container = styled.button`
  height: 49px;
  width: 49px;
  background: ${(props) =>
    props.highlighted ? '#445588' : props.isBlack ? '#b58863;' : '#f0d9b5'};
  border: solid 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:hover {
    ${(props) => props.clickable && 'background: #453583;'};
    cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  }
  ${(props) =>
    props.clickable &&
    `
    &:focus {
      background: #88962d;
      border: solid 2px #000;
    }
    `}
  img {
    width: 49px;
    height: 49px;
  }
`;
