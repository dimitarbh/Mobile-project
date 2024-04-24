import React, { useEffect } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { brands } from '../redux/slices/brandSlice.js'
import './Brands.css';

const Brands = () => {
    const dispatch = useDispatch();
    const brandsData = useSelector((state) => state.brands.brands);
    const isLoading = useSelector((state) => state.brands.isLoading);
    const error = useSelector((state) => state.brands.error);

    useEffect(() => {
        dispatch(brands()); 
    }, [dispatch]);

    console.log("Brands Data:", brandsData);

    return (
        <Container className="brands-container">
            <h1 className="display-7 text-center">Brands</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <section className="brands-grid">
                    {Array.isArray(brandsData) && brandsData.map((brand, index) => (
                        <div className="brand-item" key={index}>
                            <Nav.Link href="#" className="brand-item">
                                <div className="logo">
                                    <img src={brand.imageUrl} alt={brand.name} />
                                </div>
                                <p>{brand.name}</p>
                            </Nav.Link>
                        </div>
                    ))}
                </section>
            )}
        </Container>
    );
    
}

export default Brands;
