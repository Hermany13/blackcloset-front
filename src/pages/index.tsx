import HomeContent from '../components/Home/index';
import { NextPage } from 'next';
import Head from "next/head";
import Layout from '../components/Layout';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Black Closet</title>
      <meta
        name="description"
        content="Melhores produtos de moda feminina para sua beleza e bem estar!"
      />
    </Head>
    <Layout>
      <HomeContent />
    </Layout>
  </>
)

export default IndexPage
