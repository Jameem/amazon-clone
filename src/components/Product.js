import React from "react"
import Star from "@material-ui/icons/Star"
import "./Product.css"
import { useStateValue } from "../StateProvider"

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }
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
        <button className="product__button" onClick={addToBasket}>
          Add to Basket
        </button>
      </center>
    </div>
  )
}

export default Product
