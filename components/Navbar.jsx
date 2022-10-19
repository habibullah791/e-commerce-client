import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import Link from "next/link";


const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo ">
                <Link href={`/`}>
                    Sound Sonic
                </Link>
            </p>
            <button type="button" className="cart-icon">
                <AiOutlineShopping />
                <span className="cart-item-qty">0</span>
            </button>
        </div>
    );
}

export default Navbar;