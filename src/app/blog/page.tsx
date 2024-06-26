import styles from './blog.module.css';
import posts from '../../../public/json/posts.json';
import Header from '@/components/Header/Header';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'JSON Diff | Blogs',
  description: 'List of blogs that cover all about JSON',
  authors: [{ name: "0xrisec", url: "https://www.linkedin.com/in/0xrisec/" }],
  applicationName: 'jsondiff',
  generator: 'jsondiff',
  keywords: "json diff, json blogs, semantic json compare tool, json comparison tool, Format JSON, Compare JSON documents, Securely Compare JSON, JSON comparison",
  robots: "json diff, json comparison",
  openGraph: {
    type: "website",
    url: "https://jsondiff.in/",
    title: "JSON Diff - Validate, Format, and Compare JSON",
    description: "Validate, format, and compare JSON data with JSON Diff.",
    siteName: "jsondiff",
    images: [{
      url: "https://jsondiff.in/assets/images/jsondiff.png",
    }],
  }
};

type Post = {
    id: number;
    title: string;
    date: string;
    url: string;
    excerpt: string;
    tags?: {
        title: string,
        link: string
    }[];
};

const Blog = ({params}: {params: { slug: string }}) => {
    return (
        <>
        <Header />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pt-5">
            <div className="border-b border-rose-500 space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Blog Posts</h1>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">List of blogs that cover all about JSON</p>
            </div>
            <BlogList posts={posts as Post[]} />
        </div>
        </>
    );
};

const BlogList = ({ posts }: { posts: Post[] }) => {
    return (
        <ul className={styles.blogList}>
            {posts?.map((post) => (
                <li key={post.id} className="py-12 border-b border-rose-500">
                    <article>
                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                            <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                                </dd>
                            </dl>
                            <div className="space-y-5 xl:col-span-3">
                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                    <a className="text-gray-900 dark:text-gray-100" href={post.url}>{post.title}</a>
                                </h2>
                                {post.tags && (
                                    <div className="flex flex-wrap">
                                        {post.tags.map((tag:any) => (
                                            <a key={tag.title} className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href={tag.link}>{tag.title}</a>
                                        ))}
                                    </div>
                                )}
                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                    {post.excerpt}
                                </div>
                                <div className="text-base font-medium leading-6">
                                    <a className="text-primary-500 text-rose-600" aria-label={`Read more: "${post.title}"`} href={post.url}>Read more →</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    );
};

export default Blog;