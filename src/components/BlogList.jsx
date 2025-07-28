import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; 

const BlogList = ({ refreshTrigger }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const { categoryName } = useParams(); 
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  useEffect(() => {
    fetchBlogs();
    if (categoryName) {
      setSelectedCategory(categoryName);
    } else {
      setSelectedCategory('All'); 
    }
  }, [refreshTrigger, categoryName]); 
  useEffect(() => {
    if (selectedCategory === 'All' || !selectedCategory) { 
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]); 

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="blog-list-container">
      <h2 style={{ marginBottom: '20px' }}>All Blog Posts</h2>

      <div className="category-filter">
        <label>Filter by Category:</label>
        <select onChange={handleCategoryChange} value={selectedCategory} className="form-select">
          <option value="All">All</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
          <option value="Science">Science</option>
        </select>
      </div>

      <div className="blog-grid">
        {filteredBlogs.length === 0 ? (
          <p>No blogs found in this category.</p>
        ) : (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p><span className="blog-category">Category:</span> {blog.category}</p>
              <p><span className="blog-blogger">Blogger:</span> {blog.blogger_name}</p>
              <p className="blog-description">{blog.description}</p>
              <Link to={`/blog/${blog.id}`} className="read-more-link">
                Read More...
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;