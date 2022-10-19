import React from "react";

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="footer-container">
            <p className="">2022 Sound Sonic All right reserved</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    );
}

export default Footer;