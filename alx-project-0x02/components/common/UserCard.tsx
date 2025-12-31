import { type UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className='border rounded-lg p-4 shadow-sm'>
      <h2 className='text-xl font-semibold mb-2'>{name}</h2>
      <p className='text-gray-700 mb-1'>{email}</p>
      <p className='text-sm text-gray-500'>
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
