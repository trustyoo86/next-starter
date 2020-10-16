import { API } from '../app-config';
import { GetServerSideProps } from 'next';

import SectionHeader from '@/components/SectionHeader';
import SearchForm from '@/containers/SearchForm';

const { URL, AUTH_KEY } = API;

function Search(props) {
  console.log('props', props);

  return (
    <div className='site-layout-content'>
      <SectionHeader
        title='Github repo search'
        subTitle='Github repo를 검색합니다.' />
      <SearchForm />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { repo } = query;

  if (repo) {
    const res = await fetch(`${URL}/search/repositories?q=${repo}&page=1`, {
      headers: new Headers({
        'Authorization': AUTH_KEY,
      }),
    });
    const data = await res.json();
    return {
      props: { data },
    };
  }
    

  return {
    props: {},
  };
};

export default Search;
