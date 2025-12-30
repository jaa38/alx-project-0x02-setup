import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full p-4 bg-gray-100'>
      <nav className='flex gap-6'>
        <Link href='/home' className='text-blue font-medium'>
          Home
        </Link>

        <Link href='/about' className='text-blue-600 font-medium'>
          About
        </Link>

        <Link href='posts' className='font-medium text-blue-600'>
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
