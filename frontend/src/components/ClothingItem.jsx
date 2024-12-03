import React from 'react';
import { useDrag } from 'react-dnd';

const ClothingItem = ({ item, isAllowedToDrop }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'CLOTHING',
        item,
        canDrag: () => isAllowedToDrop(item.id), 
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={dragRef}
            className="gallery-item"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: isAllowedToDrop(item.id) ? 'grab' : 'not-allowed',
            }}
        >
            <img src={item.image} alt={item.name} className="gallery-image" />
            <p>{item.name}</p>
        </div>
    );
};

export default ClothingItem;
