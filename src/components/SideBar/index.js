import React from 'react';

import {
  Container,
  LogoContainer,
  ActionsContainer,
  GithubContainer,
} from './styles';

export default function SideBar({ children }) {
  return (
    <Container>
      <LogoContainer>
        <img src="/chessboard-white.svg" alt="" />
        <span>Chess Game</span>
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
