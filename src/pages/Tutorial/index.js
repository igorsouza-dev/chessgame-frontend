import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  PageContainer,
  BottomContainer,
  Page,
  Button,
  PlayButton,
  TitleContainer,
  LogoContainer,
  TextContainer,
} from './styles';

import StepsIndicator from '../../components/StepsIndicator';

const fistPage = 1;
const lastPage = 4;

function Tutorial({ readTutorial }) {
  const [page, setPage] = useState(1);
  function previous() {
    if (page > fistPage) {
      setPage(page - 1);
    }
  }
  function next() {
    if (page < lastPage) {
      setPage(page + 1);
    }
  }

  function play() {
    localStorage.setItem('readTutorial', 1);
    readTutorial(true);
  }
  return (
    <Wrapper>
      <TitleContainer>
        <LogoContainer>
          <img src="/chessboard-white.svg" alt="" />
          <h1>Chess Mate</h1>
        </LogoContainer>
      </TitleContainer>
      <PageContainer>
        <Page isVisible={page === 1} align="flex-start">
          <h1>Welcome!</h1>
          <TextContainer>
            <p>
              Hello, fellow player. This is
              <strong> Chess Mate</strong>
              ,&nbsp;a game that lets you play chess with your mates on the same
              device. And guess what? No registration required!
            </p>
          </TextContainer>
        </Page>
        <Page isVisible={page === 2}>
          <h1>Features</h1>
          <TextContainer>
            <p>The game can:</p>
            <ul>
              <li>count the captured pieces</li>
              <li>show you all moves the selected piece can make</li>
              <li>Show the moves history</li>
            </ul>
            <p>The game doesn&apos;t know:</p>
            <ul>
              <li>what check or checkmate is</li>
              <li>special moves like Castling, Promotion and En Passant</li>
              <li>which player won, if the game is over or if it is a draw</li>
            </ul>
          </TextContainer>
        </Page>
        <Page isVisible={page === 3}>
          <h1>Need a break?</h1>
          <TextContainer>
            <p>
              <strong>Chess Mate</strong>
              &apos;s got your back!
            </p>
            <p>
              The game saves your progress after each move, just make sure to
              use the same device and browser, hmmkay?
            </p>
          </TextContainer>
        </Page>
        <Page isVisible={page === 4}>
          <h1>All righty, then..</h1>

          <PlayButton onClick={play}>Let&apos;s Play!</PlayButton>
        </Page>
      </PageContainer>
      <BottomContainer>
        <Button isVisible={page > fistPage} onClick={previous}>
          Previous
        </Button>
        <StepsIndicator total={lastPage} current={page} setPage={setPage} />
        <Button isVisible={page < lastPage} onClick={next}>
          Next
        </Button>
      </BottomContainer>
    </Wrapper>
  );
}
Tutorial.propTypes = {
  readTutorial: PropTypes.func.isRequired,
};

export default Tutorial;
