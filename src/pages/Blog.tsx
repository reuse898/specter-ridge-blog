import { Post } from '../types/Post';
import BlogPost from '../components/BlogPost';
import './Blog.css';

interface BlogProps {
  posts: Post[];
}

function Blog({ posts }: BlogProps) {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Specter Ridge</h1>
        <p className="blog-subtitle">Development Blog</p>
        <p className="blog-description">
          Follow me as I build a cozy mystery RPG set in an abandoned mountain town.
        </p>
      </header>
      
      <main className="blog-posts">
        {posts.length === 0 ? (
          <div className="no-posts">
            <p>No posts yet. Check back soon for updates!</p>
          </div>
        ) : (
          posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))
        )}
      </main>
    </div>
  );
}

export default Blog;
