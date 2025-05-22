import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
    <section>
      <div className={classes.header__container}>
        {/* Logo and Delivery Info */}
        <div className={classes.logo__container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="">All</option>
          </select>
          <input type="text" placeholder="" />
          <BsSearch size={25} />
        </div>

        {/* Right-side Navigation */}
        <div className={classes.order__container}>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
            />
            <select>
              <option value="">EN</option>
            </select>
          </a>
          <a href="">
            
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          <a href="#">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>
    <LowerHeader />

    </>
  );
};

export default Header;
