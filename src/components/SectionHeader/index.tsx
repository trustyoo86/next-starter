import { PageHeader } from 'antd';

interface IProps {
  title?: string;
  subTitle?: string;
}

function SectionHeader({ title = '타이틀', subTitle = '서브타이틀' }: IProps) {
  return (
    <div
      data-testid='section-header'>
      <PageHeader
        className='site-page-header'
        onBack={() => {}}
        title={title}
        subTitle={subTitle}
      />
    </div>
  );
}

export default SectionHeader;
