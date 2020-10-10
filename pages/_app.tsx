// components
import Layout from '@/components/Layout';

//css
import 'antd/dist/antd.css';
import '../styles/globals.css';

interface IProps<T> {
  Component: any;
  pageProps: T;
}

function MyApp<T>({ Component, pageProps }: IProps<T>) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
