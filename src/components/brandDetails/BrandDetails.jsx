import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'


const BrandsDetails = () => {
    const { brandId } = useParams();
    const [brandDetails, setBrandDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const modelsData = useSelector((state) => {state.brands})


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {brandDetails && (
                <div>
                    <h2>{brandDetails.brand}</h2>
                    <img src={brandDetails.image} alt={brandDetails.brand} />
                </div>
            )}
        </div>
    );
};

export default BrandsDetails;
