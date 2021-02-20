import { NextPage } from 'next';
import Head from 'next/head';

// Components
import Layout from 'components/Layout';
import HomeContent from 'components/Home/index';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Black Closet</title>
      <meta
        name="description"
        content="Seja bem vindo a Balck Closet, a melhor loja de produtos de moda feminina para sua beleza e bem estar. Ouse e use aquilo que te faz bem!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Black Closet" />
      <meta property="og:url" content="https://blackcloset-front.vercel.app/" />
      <meta
        property="og:description"
        content="Seja bem vindo a Balck Closet, a melhor loja de moda feminina!"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/6RMzj7V/Black-closet-new-logo.jpg"
      />
    </Head>
    <Layout>
      <HomeContent />
    </Layout>
  </>
);

export default IndexPage;
