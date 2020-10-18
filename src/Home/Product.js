import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [message, setMessage] = useState("");
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    //Add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
    setMessage("Added to Cart");
  };
  return (
    <>
      <div className="product" key={id}>
        <img src={image} alt="" />
        <div className="product__info">
          <p className="product__title">{title}</p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(_ => (
                <p>⭐️</p>
              ))}
          </div>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </>
  );
}

export default Product;
