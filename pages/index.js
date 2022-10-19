import React from "react";

import { HeroBanner, FooterBanner, Product } from "../components";
import { client } from '../lib/client';

const index = ({ bannerData, productData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speaker There are many variations passeges</p>
      </div>
      <div className="products-container">
        {productData?.map((product) => (
          <Product
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <FooterBanner
        footerBanner={bannerData[0]}
      />
    </>
  );
}

export const getServerSideProps = async () => {

  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productData, bannerData }
  }
}
export default index;