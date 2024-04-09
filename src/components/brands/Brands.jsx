import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import './Brands.css'

const Brands = () => {

    const brands = [
        { name: 'Apple', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
        { name: 'Samsung', imageUrl: 'https://logowik.com/content/uploads/images/samsung9636.jpg' },
        { name: 'Xiaomi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png' },
        { name: 'Nokia', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/1280px-Nokia_wordmark.svg.png' },
        { name: 'Vivo', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vivo_Logo.svg/1280px-Vivo_Logo.svg.png' },
        { name: 'Huawei', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png' },
        { name: 'Google', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' },
        { name: 'Motorola', imageUrl: 'https://cdn.worldvectorlogo.com/logos/motorola-new-logo.svg' },
        { name: 'Sony', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' },
        { name: 'OnePlus', imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/oneplus-mobile-logo-icon.png' },

    ];

    return (
        <Container className="brands-container">
            <h1 className="display-7 text-center">Brands</h1>
            <section className="brands-grid">
                {brands.map((brand, index) => (
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
        </Container>
    );
}

export default Brands;