import React, { useState } from 'react';
import './styles.css';

const FilterPanel = ({ types, styles, onFilterChange }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);

    const handleCheckboxChange = (category, value) => {
        if (category === 'type') {
            setSelectedTypes((prevSelectedTypes) =>
                prevSelectedTypes.includes(value)
                    ? prevSelectedTypes.filter((type) => type !== value)
                    : [...prevSelectedTypes, value]
            );
        } else if (category === 'style') {
            setSelectedStyles((prevSelectedStyles) =>
                prevSelectedStyles.includes(value)
                    ? prevSelectedStyles.filter((style) => style !== value)
                    : [...prevSelectedStyles, value]
            );
        }
    };

    const handleFilterChange = () => {
        onFilterChange(selectedTypes, selectedStyles);
    };

    return (
        <div className="filter-sidebar">
          <div className="filter-category">
            <h3>Type</h3>
            {types.map((type) => (
              <label key={type} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleCheckboxChange('type', type)}
                />
                {type}
              </label>
            ))}
          </div>
          <div className="filter-category">
            <h3>Style</h3>
            {styles.map((style) => (
              <label key={style} className="filter-label">
                <input
                  type="checkbox"
                  checked={selectedStyles.includes(style)}
                  onChange={() => handleCheckboxChange('style', style)}
                />
                {style}
              </label>
            ))}
          </div>
          <button className="filter-button" onClick={handleFilterChange}>
            Apply Filters
          </button>
        </div>
      );
    };

export default FilterPanel;