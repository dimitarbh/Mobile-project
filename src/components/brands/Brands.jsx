import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../redux/slices/brandSlice';
import { Link } from 'react-router-dom';
import './Brands.css';

const Brands = () => {
    const dispatch = useDispatch();
    const brandsData = useSelector((state) => state.brands);
    const isLoading = useSelector((state) => state.brands.isLoading);
    const error = useSelector((state) => state.brands.error);

    useEffect(() => {
        dispatch(fetchBrands()); 
    }, [dispatch]); 

    console.log("Brands Data:", brandsData);
    console.log("Redux State:", useSelector((state) => state));

    return (
        <Container className="brands-container">
            <h1 className="display-7 text-center">Brands</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <section className="brands-grid">
                    {brandsData.brands && brandsData.brands.map((brand, index) => (
                        <div className="brand-item" key={index}>
                            <Link to={`/brands/${brand.id}`} className="brand-link"> 
                                <div className="logo">
                                    <img src={brand.image} alt={brand.brand} />
                                </div>
                                <p>{brand.brand}</p>
                            </Link>
                        </div>
                    ))}
                </section>
            )}
        </Container>
    );
}

export default Brands;
