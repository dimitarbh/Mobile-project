import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../redux/slices/brandSlice';
import { Link } from 'react-router-dom';
import './Brands.css';

const Brands = () => {
    const dispatch = useDispatch();
    const { brands, isLoading, error } = useSelector(state => state.brands);
    const [selectedBrandId, setSelectedBrandId] = useState(null);
    console.log("Brands:", brands);
    useEffect(() => {
        dispatch(fetchBrands()); 
    }, [dispatch]); 

    const handleBrandClick = (brandId) => {
        console.log("Clicked Brand ID:", brandId);
        setSelectedBrandId(brandId);
        navigate(`/brands/allBrandModels/${brandId}`);
    };

    return (
        <Container className="brands-container">
            <h1 className="display-7 text-center">Brands</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <section className="brands-grid">
                    {brands.length > 0 ? brands.map((brand, index) => (
                        <div className="brand-item" key={index}>
                            <Link 
                                to={`/brands/allBrandModels/${brand._id}`} 
                                className="brand-link"
                                onClick={() => handleBrandClick(brand._id)}
                            >
                                <div className="logo">
                                    <img src={brand.image} alt={brand.brand} />
                                </div>
                                <p>{brand.brand}</p>
                            </Link>
                        </div>
                    )) : (
                        <div>No brands data available</div>
                    )}
                </section>
            )}
            {selectedBrandId && (
                <div>
                    Selected Brand ID: {selectedBrandId}
                </div>
            )}
        </Container>
    ); 
}

export default Brands;
