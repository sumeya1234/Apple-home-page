import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const IPhone = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/iphones")
        .then((res)=> res.json())
        .then((data)=> {
            setProducts(data.products)
        })
        .catch(()=> console.log("Error: unable to fetch"))
    },[])
    let flip = true;
    return (
        <>
            <section className="internal-page-wrapper">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 mt-5 pt-5">
                            <h1 className="font-weight-bold">IPhones</h1>
                            <div className="brief-description mb-5">The best for the brightest</div>
                        </div>
                    </div>
                    {
                        products?.map((product, index) => {  
                            let productDiv = (
                                <div key={product.product_url} className="row justify-content-center text-center product-holder h-100">
                                    <div className={`col-sm-12 col-md-6 my-auto order-${
                                        index % 2 === 0 ? "1" : "2"
                                    }`}>
                                        <div className="product-title">{product.product_name}</div>
                                        <div className="product-brief">{product.product_brief_description}</div>
                                        <div className="starting-price">{`Starting at ${product.starting_price}`}</div>
                                        <div className="monthly-price">${product.price_range}</div>
                                        <div className="links-wrapper">
                                            <ul>
                                                <li>
                                                    <Link to={`/iphone/${product.product_url}`}>Learn more</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`col-sm-12 col-md-6 order-${
                                        index % 2 === 0 ? "2" : "1"
                                    }`}>
                                        <div className="product-image">
                                            <img src={product.product_img} alt="Product" />
                                        </div>
                                    </div>
                                </div>
                            );
                            return productDiv;
                        })}
                </div>
            </section>
        </>
    )
}

export default IPhone
