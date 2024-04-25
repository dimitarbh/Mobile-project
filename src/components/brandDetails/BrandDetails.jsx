import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BrandsDetails = () => {
    const { brandId } = useParams();
    const [brandDetails, setBrandDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrandDetails = async () => {
            try {
                const response = await axios.get(`https://smartphonearena-be-production.up.railway.app/brands/${brandId}`);
                setBrandDetails(response.data.brand);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBrandDetails();
    }, [brandId]);

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
