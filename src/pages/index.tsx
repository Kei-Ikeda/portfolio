import type { NextPage } from 'next';

import Layout from '@/components/layout';
import About from '@/components/about';

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default Home;
