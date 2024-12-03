import React from 'react';
import './styles.css';
import Slot from './Slot';
import { useDrop } from 'react-dnd';

function AvatarCanvas({ selectedItems, handleDrop }) {
  const slots = {
    accessories: 'Drop Accessories',
    top: 'Drop Tops',
    bottom: 'Drop Bottoms',
    shoes: 'Drop Shoes',
  };

  const [, drop] = useDrop(
    () => ({
      accept: 'CLOTHING',
      drop: (item) => {
        const isDuplicate = selectedItems.some(
          (selectedItem) => selectedItem.id === item.id && selectedItem.type === item.type
        );

        if (!isDuplicate && slots[item.type]) {
          handleDrop(item);
        }
      },
    }),
    [selectedItems]
  );

  return (
    <div className="canvas" ref={drop}>
      {Object.entries(slots).map(([slotType, label]) => (
        <Slot
          key={slotType}
          slotType={slotType}
          label={label}
          selectedItems={selectedItems.filter((item) => item.type === slotType)}
        />
      ))}
    </div>
  );
}

export default AvatarCanvas;