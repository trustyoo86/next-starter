import { Layout } from 'antd';

// components
import Headers from './Header';
import Content from './Contents';

interface IProps {
  children?: React.ReactNode;
}

function PageLayout({ children }: IProps) {
  return (
    <Layout>
      <Headers />
      <Content style={{ padding: '50px 50px' }}>
        {children}
      </Content>
    </Layout>
  );
}

PageLayout.content = Content;
PageLayout.Headers = Headers;

export default PageLayout;
