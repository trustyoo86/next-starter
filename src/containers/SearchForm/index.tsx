import TextForm from '@/components/TextForm';

const styles = {
  container: {
    width: '100vw',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function SearchForm() {
  return (
    <div style={styles.container}>
      <TextForm />
    </div>
  );
}

export default SearchForm;
