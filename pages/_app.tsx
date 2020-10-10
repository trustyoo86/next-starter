import type { AppProps } from 'next/app';

// components
import Layout from '@/components/Layout';

//css
import 'antd/dist/antd.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
