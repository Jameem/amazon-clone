import React from "react"
import { useStateValue } from "../StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  const [{ basket }] = useStateValue()

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/X-site/Jupiter/Live/Events/wave2/W3_event-page_banner_PC_live-now.jpg"
        alt=""
      />

      {basket?.length === 0 ? (
        <div className="checkout__cart">
          <h2>Your Cart is Empty!</h2>
          <hr className="checkout__hr" />
          <p>
            The shopping cart is a temporary place to store a list of your items
            and reflects each item's most recent price. Please click on Add to
            Cart on the item.
          </p>
        </div>
      ) : (
        <div className="checkout__cart">
          <h2 className="checkout__title">Your Shopping Cart</h2>
          <hr className="checkout__hr" />
          {basket.map((item) => (
            <div>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
              <hr className="checkout__hr" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Checkout
