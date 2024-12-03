import React, { useState } from 'react';
import './styles.css';

function AddClothingItem({ handleAddClothingItem }) {
  const [newItem, setNewItem] = useState({
    name: '',
    type: '',
    style: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddClothingItem(newItem);
    setNewItem({ name: '', type: '', style: '', image: '' });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Clothing Item</h2>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Enter clothing name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="type">Type:</label>
          <input
            className="form-input"
            type="text"
            id="type"
            name="type"
            value={newItem.type}
            onChange={handleChange}
            placeholder="Enter clothing type"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="style">Style:</label>
          <input
            className="form-input"
            type="text"
            id="style"
            name="style"
            value={newItem.style}
            onChange={handleChange}
            placeholder="Enter clothing style"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="image">Image URL:</label>
          <input
            className="form-input"
            type="url"
            id="image"
            name="image"
            value={newItem.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </div>
        <button className="upload-button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}


export default AddClothingItem;
