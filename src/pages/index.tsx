import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import styled from 'styled-components';

import { tron } from '../utils/console';

const transitionTime = '0.2s';
const Page = styled.div<{
  focus: string;
  state: number;
}>`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  h1 {
    transition: all ${transitionTime};
    font: ${({ state }) => (state === 0 ? '300 6rem' : '400 3.75rem')} Roboto;
  }

  main {
    display: grid;
    grid-row-gap: 16px;
  }

  label {
    transition: all ${transitionTime};

    &#lblEmail {
      display: ${({ state }) => (state > 0 ? 'grid' : 'none')};
    }

    &#lblPassword {
      display: ${({ state }) => (state > 1 ? 'grid' : 'none')};
    }

    span {
      transition: all ${transitionTime};

      &#emailLabel {
        color: ${({ focus }) =>
          focus === 'email'
            ? `rgba(255, 255, 255, 0.87)`
            : `rgba(255, 255, 255, 0.2)`};

        ${({ focus, state }) =>
          focus === 'email' || state > 1
            ? `
              background: #292929;
              transform: translate(18px, 0.5rem);
              font: 400 0.75rem Roboto;
              padding: 0 6px;
              margin: 0 -6px;
              width: max-content;
            `
            : `
              transform: translate(18px, 37px);
              font: 400 1rem Roboto;
            `}
      }

      &#passwordLabel {
        color: ${({ focus }) =>
          focus === 'password'
            ? `rgba(255, 255, 255, 0.87)`
            : `rgba(255, 255, 255, 0.2)`};

        ${({ focus, state }) =>
          focus === 'password' || state > 2
            ? `
              background: #292929;
              transform: translate(18px, 0.5rem);
              font: 400 0.75rem Roboto;
              padding: 0 6px;
              margin: 0 -6px;
              width: max-content;
            `
            : `
              transform: translate(18px, 37px);
              font: 400 1rem Roboto;
            `}
      }
    }

    input {
      transition: all ${transitionTime};

      outline: none;

      border-radius: 4px;

      background-color: transparent;

      font: 400 1rem Roboto;

      padding: 16px;

      &#email {
        border: solid 2px
          ${({ focus }) =>
            focus === 'email'
              ? `rgba(255, 255, 255, 0.87)`
              : `rgba(255, 255, 255, 0.2)`};
        color: ${({ focus }) =>
          focus === 'email'
            ? `rgba(255, 255, 255, 0.87)`
            : `rgba(255, 255, 255, 0.2)`};
      }

      &#password {
        border: solid 2px
          ${({ focus }) =>
            focus === 'password'
              ? `rgba(255, 255, 255, 0.87)`
              : `rgba(255, 255, 255, 0.2)`};
        color: ${({ focus }) =>
          focus === 'password'
            ? `rgba(255, 255, 255, 0.87)`
            : `rgba(255, 255, 255, 0.2)`};
      }
    }
  }

  button {
    display: ${({ state }) => (state > 2 ? 'block' : 'none')};
    border: solid 2px rgba(255, 255, 255, 0.87);
    color: rgba(255, 255, 255, 0.87);
    background-color: rgba(255, 255, 255, 0.08);
    font: 400 1rem Roboto;
    padding: 8px 16px;
    border-radius: 4px;
    width: max-content;
    justify-self: right;
  }
`;

const Home: React.FC = () => {
  const [state, setState] = useState(0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [focus, setFocus] = useState('');

  useEffect(() => {
    if (password !== '') {
      setState(3);
    } else if (email !== '') {
      setState(2);
    } else {
      setState(1);
    }
  }, [email, password]);

  // todo: apagar log
  useEffect(
    () => tron.log({ email, password, focus }),
    [email, password, focus]
  );

  return (
    <Page state={state} focus={focus}>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <h1>Bem-vindo!</h1>
        <label id="lblEmail" htmlFor="email">
          <span id="emailLabel">E-mail</span>
          <input
            aria-label="forEmail"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
          />
        </label>
        <label id="lblPassword" htmlFor="password">
          <span id="passwordLabel">Senha</span>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onFocus={(event) => setFocus(event.target.name)}
          />
        </label>
        <button type="submit">Logar</button>
      </main>
    </Page>
  );
};

export default Home;
