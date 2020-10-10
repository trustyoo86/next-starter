// dependencies
import { Layout } from 'antd';

// antd components
const { Content } = Layout;

interface IProps<T> {
  children?: React.ReactNode;
  style: T;
}

function PageContent<T>({ children, style }: IProps<T>) {
  return (
    <Content style={style}>
      <div className='site-layout-content'>
        {children}
      </div>
    </Content>
  );
}

export default PageContent;
