import React from 'react';
import useProduct from '../../hooks/useProducts';

const Reviews = () => {
    const [services] = useProduct();

    return (
        <div>
            <h4>{services.length}</h4>
            <h2>This is Reviews</h2>
        </div>
    );
};

export default Reviews;