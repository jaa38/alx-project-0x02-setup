import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { useState } from 'react';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPost) => [...prevPost, { title, content }]);
  };

  return (
    <>
      <Header />

      <div className='p-8'>
        <button
          onClick={() => setShowModal(true)}
          className='mb-6 bg-blue-600 text-white px-4 py-2 rounded'
        >
          Add New Post
        </button>

        <div className='grid gap-6'>
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>

      {showModal && (
        <PostModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
        />
      )}
    </>
  );
};

export default HomePage;
