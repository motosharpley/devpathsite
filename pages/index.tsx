import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components/index';
const posts = [
  {
    title: 'article 1',
    excerpt: 'Provide a concise learning path',
  },
  {
    title: 'article 2',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>DevPath.tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;