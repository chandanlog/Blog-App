import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';

function App() {
  const [refreshList, setRefreshList] = useState(0);

  const handleBlogAdded = () => {
    setRefreshList(prev => prev + 1);
  };

  return (
    <Router>
      <nav className="navbar-top">
        <Link to="/" className="navbar-top-brand">News Geek</Link>
      </nav>
      <nav className="navbarButtons"> 
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/category/Entertainment" className="nav-link">Entertainment</Link>
          <Link to="/category/Technology" className="nav-link">Technology</Link>
          <Link to="/category/Sports" className="nav-link">Sports</Link>
          <Link to="/category/Business" className="nav-link">Business</Link>
          <Link to="/category/Health" className="nav-link">Health</Link>
          <Link to="/category/Science" className="nav-link">Science</Link>
          <Link to="/category/World" className="nav-link">World</Link> 
        </div>
      </nav>
      <div className="blog-app-container">
        <h1 className="page-title">My Awesome Blog</h1>
        <Routes>
          <Route path="/" element={
            <>
              <BlogForm onBlogAdded={handleBlogAdded} />
              <BlogList refreshTrigger={refreshList} />
            </>
          } />
          <Route path="/category/:categoryName" element={
            <>
              <BlogForm onBlogAdded={handleBlogAdded} />
              <BlogList refreshTrigger={refreshList} />
            </>
          } />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;