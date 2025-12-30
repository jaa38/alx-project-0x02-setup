import { type PostProps } from '@/interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className='border rounded-lg p-4 shadow-sm'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='text-gray-700 mb-3'>{content}</p>
      <span className='text-sm text-gray-500'>User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
