import styled from 'styled-components';
import { colors, device } from '../../styles/variables';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.darkTile};
`;
export const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TitleContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: 'Lobster', cursive;
  h1 {
    font-size: 48px;
  }
  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const BottomContainer = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  padding: 30px;
`;

export const Page = styled.div`
  width: ${(props) => (props.isVisible ? '400px' : '0')};
  height: ${(props) => (props.isVisible ? '400px' : '0')};
  color: #fff;
  border-radius: 4px;
  border: ${(props) => {
    if (props.isVisible) {
      return `dashed 5px ${colors.darkTile}`;
    }
    return '0';
  }};
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: ${(props) => (props.align ? props.align : 'center')};
  align-items: center;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: border 0s, height 0s, opacity 0.8s ease-out;
  background: ${colors.lightTile};

  h1 {
    font-family: 'Lobster', cursive;
    margin-top: 10px;
  }

  @media ${device.mobileS} {
    max-width: 300px;
  }
  @media ${device.mobileM} {
    max-width: 350px;
  }
  @media only screen and (${device.tablet}) {
    max-width: 500px;
  }
`;

export const TextContainer = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 18px;
  p {
    margin-top: 10px;
    text-align: justify;
    line-height: 26px;
    strong {
      font-family: 'Lobster', cursive;
      font-size: 20px;
    }
  }
  li {
    margin-left: 15px;
    line-height: 26px;
    font-size: 16px;
    list-style: circle;
  }
`;

export const Button = styled.button`
  background: transparent;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  border: 0;
  color: ${colors.lightTile};
  width: 100px;
  font-weight: bold;
  padding: 10px;
  font-family: 'Lobster', cursive;
  font-size: 26px;
`;

export const PlayButton = styled.button`
  height: 74px;
  border: 0;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  font-size: 24px;
  align-self: stretch;
  background: ${colors.highlighted};
  color: #fff;
  font-family: 'Lobster', cursive;
`;
