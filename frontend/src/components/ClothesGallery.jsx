import React from 'react';
import ClothingItem from './ClothingItem';
import './styles.css';


const ClothesGallery = ({ clothes, selectedItems }) => {
    const isAllowedToDrop = (id) => {
        return !selectedItems.some((item) => item.id === id);
    };     

    return (
        <div className="gallery">
            {clothes.map((item) => (
                <ClothingItem 
                    key={item.id} 
                    item={item} 
                    isAllowedToDrop={isAllowedToDrop}  
                />
            ))}
        </div>
    );
};

export default ClothesGallery;
