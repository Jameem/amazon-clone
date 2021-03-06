import React from "react"
import Star from "@material-ui/icons/Star"
import "./CheckoutProduct.css"
import { useStateValue } from "../StateProvider"

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star className="" />
            ))}
        </div>

        <button className="product__button" onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
