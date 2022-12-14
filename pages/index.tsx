import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components/index';
import { getPosts } from '../services/index';

const Home = (props: {
  posts: [
    {
      node: {
        author: {
          bio: string;
          id: string;
          name: string;
          photo: { url: string };
        };
        categories: [{ name: string; slug: string }];
        createdAt: string;
        excerpt: string;
        featuredImage: { url: string };
        slug: string;
        title: string;
      };
    }
  ];
}) => {
  // console.log('posts: ', props.posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>DevPath.tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video autoPlay muted loop id="bgVideo">
        <source src="./purple-fly-through.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {props.posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={[]} slug="" />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
