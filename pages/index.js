import React from "react";

import { Footer, HeroBanner, FooterBanner, Product } from "../components";
import { client } from '../lib/client';

const index = ({ bannerData, productData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className="products-heading">
        <h2>Best Selling Product</h2>
      </div>
      <FooterBanner />
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