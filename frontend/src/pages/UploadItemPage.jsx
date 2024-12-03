import React, { useEffect, useState } from 'react';
import AddClothingItem from '../components/AddClothingItem';


function UploadItemPage() {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/clothing-items/')
            .then((response) => response.json())
            .then((data) => setClothes(data))
            .catch((error) => console.error('Error fetching clothing items:', error));
    }, []);

    const handleAddClothingItem = (newItem) => {
        fetch('http://127.0.0.1:8000/api/clothing-items/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((errorData) => {
                        console.error('Error details:', errorData);
                        throw new Error(`Error: ${JSON.stringify(errorData)}`);
                    });
                }
                return response.json();
            })
            .then((data) => {
                console.log('Item added successfully:', data);
                setClothes((prevClothes) => [...prevClothes, data]);
            })
            .catch((error) => console.error('Error adding clothing item:', error));
    };

    return (
        <AddClothingItem handleAddClothingItem={handleAddClothingItem} />
    )

}

export default UploadItemPage;