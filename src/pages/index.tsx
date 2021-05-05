import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

// Components
import Layout from 'components/Layout';
import HomeContent from 'components/Home/index';

// Services
import { getLatestProducts } from 'services/Products';

// Interfaces
import Product from 'models/Product';
interface Props {
  latestProducts: Product[];
}

const IndexPage: NextPage<Props> = ({ latestProducts }) => {
  return (
    <>
      <Head>
        <title>Black Closet</title>
        <meta
          name="description"
          content="Seja bem vindo a Balck Closet, a melhor loja de produtos de moda feminina para sua beleza e bem estar. Ouse e use aquilo que te faz bem!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Black Closet" />
        <meta
          property="og:url"
          content="https://blackcloset-front.vercel.app/"
        />
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
        <HomeContent latestProducts={latestProducts} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const latestProducts = await getLatestProducts();

  return {
    props: {
      latestProducts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};

export default IndexPage;
