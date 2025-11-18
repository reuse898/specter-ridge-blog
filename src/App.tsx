import './App.css';
import Blog from './pages/Blog';
import { blogPosts } from './data/posts';

function App() {
  return (
    <div className="App">
      <Blog posts={blogPosts} />
    </div>
  );
}

export default App;
