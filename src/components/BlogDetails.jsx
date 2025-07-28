import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blogs/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError("Blog post not found.");
        setLoading(false);
        console.error("Error fetching blog details:", err);
      }
    };
    fetchBlogDetails();
  }, [id]);
  if (loading) {
    return <div className="loading-message">Loading blog details...</div>;
  } else if (error) {
    return <div className="error-message">{error}</div>;
  } else if (!blog) {
    return (
      <div className="loading-message">No blog post found for this ID.</div>
    );
  } else {
    return (
      <div className="blog-details-container">
        <Link to="/" className="back-link">
          ← Back to All Blogs
        </Link>
        <h1 className="blog-details-title">{blog.title}</h1>
        <p className="blog-details-meta">
          <b>Category:</b> {blog.category}
        </p>
        <p className="blog-details-meta">
          <b>Blogger:</b> {blog.blogger_name}
        </p>
        <img src={blog.image} alt={blog.title} className="blog-details-image" />
        <p className="blog-details-description">{blog.description}</p>
      </div>
    );
  }
};

export default BlogDetails;
