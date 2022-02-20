import Head from "next/head";
import type { FC } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

// import { FormattedDate } from "../../components/date";
// import { Layout } from "../../components/layout";
import { allPosts } from ".contentlayer/generated";
import type { Post } from ".contentlayer/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((_) => "/work/" + _._raw.flattenedPath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((_) => _._raw.flattenedPath === params.id);
  return {
    props: {
      post,
    },
  };
}

const Page: FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>{/* <FormattedDate dateString={post.date} /> */}</div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </div>
  );
};

export default Page;
