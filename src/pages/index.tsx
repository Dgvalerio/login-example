import React from 'react';

import Head from 'next/head';
import styled from 'styled-components';

import { tron } from '../utils/console';

const Page = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  h1 {
    font: 300 6rem Roboto;
  }
`;

const Home: React.FC = () => {
  tron.log('Oláa');

  return (
    <Page>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <h1>Bem-vindo!</h1>
      </main>
    </Page>
  );
};

export default Home;
