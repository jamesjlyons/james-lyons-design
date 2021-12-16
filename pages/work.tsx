import { compareDesc } from "date-fns";
import type { InferGetStaticPropsType } from "next";
import { styled } from "../stitches.config";
import { allPosts } from ".contentlayer/data";
import Head from "next/head";
import Link from "next/link";
import type { FC } from "react";

export const getStaticProps = async ({}) => {
  return {
    props: {
      posts: allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((post) => ({
          slug: post._raw.flattenedPath,
          title: post.title,
          date: post.date,
        })),
    },
  };
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

// export default function Home() {
//   return (
//     <div>
//       <Text as="h1" color="1">
//         Work
//       </Text>
//       <Text as="h2" color="2">
//         work work work
//       </Text>
//     </div>
//   );
// }

const Work: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <>
      <section>
        <Text as="h1" color="1">
          Work
        </Text>
        <Text as="h2" color="2">
          work work work
        </Text>
      </section>
      <section>
        <h2>Posts</h2>
        <ul>
          {posts.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/work/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              {/* <small>
                <FormattedDate dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Work;
