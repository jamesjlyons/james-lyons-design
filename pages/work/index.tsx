import { styled } from "../../stitches.config";
import Link from "next/link";
import { getAllPosts } from "../../utils/mdx";
// import type { Post } from "../../types/post";
import { WorkLink } from "../../components/worklink";

export type Frontmatter = {
  slug: string;
  title: string;
  description: string;
};

type Post = {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
};

const Text = styled("p", {
  fontFamily: "$sans",
  color: "$text1",

  variants: {
    color: {
      1: {
        color: "$text1",
      },
      2: {
        color: "$text2",
      },
      3: {
        color: "$text3",
      },
    },
  },
});

// export default function WorkPage({ posts }: { posts: PostMeta[] }) {
//   return (
//     <div>
//       <Text as="h1" color="1">
//         Work
//       </Text>
//       <Text as="h2" color="2">
//         work work work
//       </Text>
//       <Link href="/work/test">
//         <a>To test</a>
//       </Link>
//       <div>
//         {posts.map((post) => (
//           <WorkLink
//             key={post.slug}
//             title={post.title}
//             text={post.description}
//             href={`/work/${post.slug}`}
//             // meta={[post.publishedAtFormatted]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

const WorkPage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <h1>✍️ All latest Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`posts/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default WorkPage;
