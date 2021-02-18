import React from 'react';
import { NextPage } from 'next';

// Components
import Layout from '../components/Layout';
import Content from '../components/404';

const PageNotFound: NextPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default PageNotFound;
