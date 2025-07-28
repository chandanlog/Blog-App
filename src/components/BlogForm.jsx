import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    category: 'Entertainment',
    title: '',
    blogger_name: '',
    image: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.category) newErrors.category = 'Category is required';
    if (formData.title.trim().length < 3) newErrors.title = 'Title must be at least 3 characters';
    if (formData.blogger_name.trim().length < 3) newErrors.blogger_name = 'Blogger name must be at least 3 characters';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (formData.description.trim().length < 3) newErrors.description = 'Description must be at least 3 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://localhost:5000/blogs', formData);
      alert('Blog post added successfully!');
      setFormData({
        category: 'Entertainment',
        title: '',
        blogger_name: '',
        image: '',
        description: ''
      });
      setErrors({});
      onBlogAdded();
    } catch (error) {
      console.error('Error adding blog post:', error);
      alert('Failed to add blog post. Check console for details.');
    }
  };

  return (
    <div className="blog-form-container"> 
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Category:</label> 
          <select name="category" value={formData.category} onChange={handleChange} className="form-select"> 
            <option value="Entertainment">Entertainment</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
            <option value="Science">Science</option>
          </select>
          {errors.category && <p className="form-error">{errors.category}</p>} 
        </div>
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-input" />
          {errors.title && <p className="form-error">{errors.title}</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Blogger Name:</label>
          <input type="text" name="blogger_name" value={formData.blogger_name} onChange={handleChange} className="form-input" />
          {errors.blogger_name && <p className="form-error">{errors.blogger_name}</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} className="form-input" />
          {errors.image && <p className="form-error">{errors.image}</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="5" className="form-textarea"></textarea>
          {errors.description && <p className="form-error">{errors.description}</p>}
        </div>
        <button type="submit" className="form-button">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;