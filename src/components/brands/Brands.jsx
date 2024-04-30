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

    useEffect(() => {
        dispatch(fetchBrands()); 
    }, [dispatch]); 

    console.log("Brands Data:", brands);
    console.log("Brands Data:", brands.id);
    console.log("Redux State:", useSelector((state) => state));
    console.log("Brands Data:", brands.map(brand => brand.id));


    const handleBrandClick = (brandId) => {
        console.log("Clicked Brand ID:", brandId);
        setSelectedBrandId(brandId);
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
                                    onClick={() => handleBrandClick(brand.id)}
                                    to={`/brands/allBrandModels/${brand.id}`} 
                                    className="brand-link"
                                >
                                    <div className="logo">
                                        <img src={brand.image} alt={brand.brand} />
                                    </div>
                                    <p>{brand.brand}</p>
                                </Link>
                            </div>
                        ))
                    : (
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
