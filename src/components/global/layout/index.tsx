import Head from 'next/head';

import { Header } from '@/components/global/layout/header';
import { Drawer } from '@/components/global/layout/drawer';

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Kei Ikeda portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div>{children}</div>
      <Drawer />
    </>
  );
};

export { Layout };
