import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from "../../lib/client";
import { Product } from "../../components"

const ProductDetails = ({ productData, simillarProductData }) => {

    const [index, setIndex] = useState(0);
    const { image, name, details, price } = productData;

    return (
        <div className="products-heading center">
            <div className="product-detail-container">
                <div className="">
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item)}
                                alt="simillar"
                                onMouseEnter={() => setIndex(i)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <div className="product-detail">
                        <h4>Details: </h4>
                        <p>{details}</p>
                        <p className="price">${price}</p>
                    </div>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={""}><AiOutlineMinus /></span>
                            <span className="num">{"0"}</span>
                            <span className="plus" onClick={""}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" >Add to Cart</button>
                        <button type="button" className="buy-now" >Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>You May Also Like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {simillarProductData.map((item, index) => (
                            <Product
                                key={item._id}
                                product={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


// 

export const getStaticPaths = async () => {

    const productsQuery = `*[_type == "product"]{
                slug{
                current
            }
    }`;

    const products = await client.fetch(productsQuery);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current,
        }
    }))
    return ({
        paths,
        fallback: 'blocking'
    });
}

export const getStaticProps = async ({ params: { slug } }) => {

    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const SimillarProductQuery = '*[_type == "product"]'

    const productData = await client.fetch(productQuery);
    const simillarProductData = await client.fetch(SimillarProductQuery);
    return {
        props: { productData, simillarProductData }
    }
}



export default ProductDetails;