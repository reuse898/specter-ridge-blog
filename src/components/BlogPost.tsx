import { Post } from '../types/Post';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './BlogPost.css';

interface BlogPostProps {
  post: Post;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h2 className="blog-post-title">{post.title}</h2>
        <time className="blog-post-date" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>
      <div className="blog-post-content">
        <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
      </div>
      {post.images && post.images.length > 0 && (
        <div className="blog-post-images">
          {post.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${post.title} - Image ${index + 1}`}
              className="blog-post-image"
            />
          ))}
        </div>
      )}
    </article>
  );
}

export default BlogPost;
