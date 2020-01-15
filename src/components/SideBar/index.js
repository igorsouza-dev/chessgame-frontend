import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  LogoContainer,
  ActionsContainer,
  GithubContainer,
} from './styles';

function SideBar({ children }) {
  return (
    <Container>
      <LogoContainer>
        <img src="/chessboard-white.svg" alt="" />
        <span>Chess Mate</span>
        <small>by Igor Souza</small>
      </LogoContainer>
      <GithubContainer>
        <a href="https://github.com/igorsouza-dev/chessgame-frontend.git">
          <img src="github.png" alt="github" />
        </a>
      </GithubContainer>

      <ActionsContainer>{children}</ActionsContainer>
    </Container>
  );
}
SideBar.propTypes = {
  children: PropTypes.element,
};
SideBar.defaultProps = {
  children: () => {},
};

export default SideBar;
