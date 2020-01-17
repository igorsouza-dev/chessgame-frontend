<p align="center">
  <img src="chess.png" alt="chess" width="200" style="border-radius: 4px;"/>
</p>

## Overview

Chess Mate is a web chess game made with [React.js](https://reactjs.org/) that allows players to play with their friends on the same browser and also saves the game progress in case the user wants to play later and it does not asks for registration.

This is only the frontend, you can access the backend repository in [here](https://github.com/igorsouza-dev/chessgame-backend).

If you wish to play the game you can click [here](http://chess-front.herokuapp.com/).

<div align="center">
  <img src="demo.gif" alt="demo"/>
</div>

## Table of contents

- [Setting up](#setting-up)

  - [Requirements](#requirements)
  - [Dependencies](#dependencies)
  - [Dev dependencies](#dev-dependencies)

- [Installing](#installing)
- [Running](#running)
- [Game Logic](#game-logic)
- [Contributing](#contributing)
- [License](#license)

## Setting up

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/get-npm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable) - This is optional but in this readme I'll be using it on some CLI commands, you can use npm if you want.

### Dependencies

These are some of the libraries that I used in this project

- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- [Prop-Types](https://github.com/facebook/prop-types) - Runtime type checking for React props.
- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Toastify](https://github.com/fkhadra/react-toastify) - Library for toast notifications
- [Styled Components](https://styled-components.com/) - Library that lets you write actual CSS inside JavaScript

### Dev Dependencies

- [Eslint](https://eslint.org) - Ecmascript linter
- [Prettier](https://prettier.io) - Code formatter

## Installing

All you need to do is run `yarn` at the root of the project in order to install the dependencies.
Then, add a `.env` file with a variable called `REACT_APP_API_URL` with the value of your API url. You can download the backend [here](https://github.com/igorsouza-dev/chessgame-backend) and start the server yourself.

**↑ back to:** [Table of contents](#table-of-contents)

## Running

Run the command `yarn start` for a developer environment or `yarn build` to generate the production build.

**↑ back to:** [Table of contents](#table-of-contents)

## Game Logic

The entire game logic is handled on the backend, the only thing the frontend is responsible, besides showing the content, is storing the `browser_id` in the local storage of the browser. That `browser_id` will be sent in every request through its header and will be used to identify the user's game.
Every time a request is successful, the frontend will get the response body containing the board state and overwrite the current state of the board.

**↑ back to:** [Table of contents](#table-of-contents)

## Contributing

This project is still under development and there are a lot of features needed to be done. If you wish to contribute,
please take a moment to read the [Contribution Guidelines](CONTRIBUTING.md).

**↑ back to:** [Table of contents](#table-of-contents)

## License

This is a open-sourced software licensed under the [MIT license](LICENSE.md).

**↑ back to:** [Table of contents](#table-of-contents)
