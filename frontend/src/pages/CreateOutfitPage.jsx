import React, { useState, useEffect } from 'react';
import AvatarCanvas from '../components/AvatarCanvas';
import ClothesGallery from '../components/ClothesGallery';
import FilterPanel from '../components/FilterPanel';
import './styles.css';


function CreateOutfitPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [filterStyles, setFilterStyles] = useState([]);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/clothing-items/')
      .then((response) => response.json())
      .then((data) => setClothes(data))
      .catch((error) => console.error('Error fetching clothing items:', error));
  }, []);

  const handleDrop = (item) => {
    if (!selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleSaveOutfit = () => {
    const savedFavourites = localStorage.getItem('favourites');
    const favourites = savedFavourites ? JSON.parse(savedFavourites) : [];
    const newFavourites = [...favourites, selectedItems];
  
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    alert('Outfit saved to favourites!');
  };
  

  const handleFilterChange = (selectedTypes, selectedStyles) => {
    setFilterTypes(selectedTypes);
    setFilterStyles(selectedStyles);
  };

  const filteredClothes = clothes.filter(
    (item) =>
      (filterTypes.length === 0 || filterTypes.includes(item.type)) &&
      (filterStyles.length === 0 || filterStyles.includes(item.style))
  );

  const types = [...new Set(clothes.map((item) => item.type))];
  const styles = [...new Set(clothes.map((item) => item.style))];

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '2rem' }}>
          <AvatarCanvas selectedItems={selectedItems} handleDrop={handleDrop} />
          <button className='favourite-button' onClick={handleSaveOutfit}>Save outfit to favourites</button>
        </div>
        <FilterPanel
          types={types}
          styles={styles}
          onFilterChange={handleFilterChange}
          style={{ flex: '1' }}
        />
        <div style={{ flex: 2 }}>
          <ClothesGallery clothes={filteredClothes} selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
}

export default CreateOutfitPage;
