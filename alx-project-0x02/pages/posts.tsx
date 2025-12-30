import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      const formattedPosts: PostProps[] = data
        .slice(0, 10)
        .map((post: any) => ({
          title: post.title,
          contents: post.body,
          userId: post.userId,
        }));
      setPosts(formattedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />

      <div className='p-8 grid gap-6'>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
