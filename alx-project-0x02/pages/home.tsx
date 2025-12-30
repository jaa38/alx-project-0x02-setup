import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

const HomePage = () => {
  return (
    <>
      <Header />

      <div className='p-8 grid gap-6'>
        <Card
          title='Welcome to the Home Page'
          content='This card explains what the home is about.'
        />
      </div>

      <div className='p-8 grid gap-6'>
        <Card
          title='Reusable Components'
          content='This card is reused with different content using props.'
        />
      </div>
    </>
  );
};

export default HomePage;
