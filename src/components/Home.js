import React from "react"

import Product from "./Product"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="banner.jpg" />

      <Product
        id="1212"
        title="Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt"
        price={18.99}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/I/61-TuCrKZ7L._AC._SR360,460.jpg"
      />
    </div>
  )
}

export default Home
