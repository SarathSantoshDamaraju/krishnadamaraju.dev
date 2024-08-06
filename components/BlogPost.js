import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-8">
        <header className="flex flex-col justify-between gap-2 md:items-baseline">
          <time className="flex-shrink-0 text-gray-600 dark:text-gray-400 text-xs">
            <FormattedDate date={post.date} />
          </time>
          <h2 className="text-2xl font-ralewayMedium mb-2 cursor-pointer text-black dark:text-gray-100">
            {post.title}
          </h2>
        </header>
        <main>
          <p className="leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  );
};

export default BlogPost;
