import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DtaProvider/DtaProvider";
import { Type } from "../../Utility/ActionType";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  if (!product || Object.keys(product).length === 0) return null;

  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${Classes.card__container} ${
        flex ? Classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={Classes.img__container} />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        <div className={Classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0} reviews</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && 
          <button className={Classes.button} onClick={addToCart}>
            add to cart
          </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
