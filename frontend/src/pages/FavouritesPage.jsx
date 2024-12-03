import React, { useState } from 'react';
import './styles.css';

function FavouritesPage() {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const removeOutfit = (indexToRemove) => {
    const confirmed = window.confirm('Are you sure you want to delete this combination?');
    if (confirmed) {
    const updatedFavourites = favourites.filter((_, index) => index !== indexToRemove);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    window.alert(`Outfit ${indexToRemove + 1} has been removed.`);
  }
};
  
  const clearAllFavourites = () => {
    const confirmed = window.confirm('Are you sure you want to clear all favourites?');
    if (confirmed) {
    setFavourites([]);
    localStorage.removeItem('favourites');
    window.alert('All combinations have been cleared.');
    }
  };

  return (
    <div className="favourites-page">
      <h1 className="favourites-title">Favourites</h1>

      {favourites.length > 0 ? (
        <div>
          {/* Centralized Clear All Button */}
          <div className="clear-all-container">
            <button className="clear-all-button" onClick={clearAllFavourites}>
              Clear All
            </button>
          </div>

          <div className="favourites-list">
            {favourites.map((outfit, index) => (
              <div key={index} className="outfit-card">
                <h4 className="outfit-title">Outfit {index + 1}</h4>
                <ul className="outfit-items">
                  {outfit.map((item) => (
                    <li key={item.id} className="outfit-item">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="outfit-image"
                      />
                    </li>
                  ))}
                </ul>
                <button
                  className="remove-button"
                  onClick={() => removeOutfit(index)}
                >
                  Remove Outfit
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="no-favourites">No favourites saved yet.</p>
      )}
    </div>
  );
}


export default FavouritesPage;
