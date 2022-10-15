import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { UiProviders } from '@/uiProviders';
import { StoreProviders } from '@/storeProviders';
import { Monitors } from '@/components/global/monitors';
import { Layout } from '@/components/global/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProviders>
      <UiProviders>
        <Monitors />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UiProviders>
    </StoreProviders>
  );
}

export default MyApp;
