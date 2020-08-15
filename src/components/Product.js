import React from "react"
import Star from "@material-ui/icons/Star"
import "./Product.css"

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star className="" />
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <center>
        <button className="product__button">Add to Basket</button>
      </center>
    </div>
  )
}

export default Product
