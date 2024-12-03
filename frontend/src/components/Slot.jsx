import React from 'react';
import './styles.css';

function Slot({ slotType, label, selectedItems }) {
  return (
    <div className="slot">
      {selectedItems.length > 0 ? (
        selectedItems.map((item) => (
          <img key={item.id} className="slot-image" src={item.image} alt={item.name} />
        ))
      ) : (
        <div className="placeholder">{label}</div>
      )}
    </div>
  );
}

export default Slot;
