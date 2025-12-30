import { useState } from 'react';

interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal = ({ onClose, onSubmit }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Add New Post</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border p-2 rounded'
            required
          />

          <textarea
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border p-2 rounded'
            required
          />

          <div className='flex gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-300 px-4 p-2 rounded'
            >
              Add
            </button>

            <button
              type='button'
              onClick={onClose}
              className='bg-gray-300 px-4 py-2 rounded'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
