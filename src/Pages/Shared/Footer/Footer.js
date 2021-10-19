import React from 'react';
import useProduct from '../../../hooks/useProducts';

const Footer = () => {
    const [services] = useProduct();
    return (
        <div>
            <h2>{services.length}</h2>
            <h2>This is footer</h2>


        </div>
    );
};

export default Footer;