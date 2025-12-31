import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostPageProps) => {
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

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  const posts = data.slice(0, 10).map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userID,
  }));

  return {
    props: {
      posts
    }
  }
};

export default PostsPage;
