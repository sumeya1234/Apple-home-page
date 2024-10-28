import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const {productID} = useParams();
    useEffect(()=>{
        fetch("http://localhost:5000/iphones")
        .then((res)=> res.json())
        .then((data)=>{
            const productList = data.products;
            const singleProduct = productList.filter(
                (product) => product.product_url === productID
            );
            setProduct(singleProduct);
        })
        .catch(()=> console.log("Error: unable to fetch"))
    },[productID]);
    if(product.length){
        return (
            <>
                <section className="internal-page-wrapper">
                    <div className="container">
                        {
                            product?.map((product)=>{
                                return(
                                    <div key={product.product_id}>
                                        <div className="row justify-content-center text-center">
                                            <div className="col-12 mt-5 pt-5">
                                                <div className="title-wrapper font-weight-bold">{product.product_name}</div>
                                                <div className="brief-description">{product.product_brief_description}</div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center text-center product-holder h-100 m-5">
                                            <div className="col-sm-12 col-md-6 my-auto">
                                                <div style={{fontSize:30 , fontWeight : "bold" , marginBottom: "5px"}} className="starting-price">{product.starting_price}</div>
                                                <div style={{fontSize:20 , fontWeight : 500, marginBottom: "5px"}}className="monthly-price">{product.price_range}</div>
                                                <div className="product-details">{product.product_description}</div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="product-image">
                                                    <img src={product.product_img} alt="Product" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </>
        )
    }
    else{
        return <NotFound/>
    }
}
export default SingleProduct
