import Head from 'next/head';

import { Navbar } from 'components/Navbar/index';

import * as S from 'styles/pages/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <header></header>
      <S.HomeContainer>
        <Navbar />
      </S.HomeContainer>
    </>
  );
}
