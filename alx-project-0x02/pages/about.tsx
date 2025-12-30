import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className='p-8 flex gap-6'>
        <Button title='Small Button' size='small' shape='rounded-sm' />

        <Button title='Medium Button' size='medium' shape='rounded-md' />

        <Button title='Large Button' size='large' shape='rounded-full' />
      </div>
    </>
  );
};

export default AboutPage;
