import React from "react"

import Product from "./Product"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="banner.jpg" />
      <div className="home__row">
        <Product
          id="10001"
          key="10001"
          title='ASUS ZenBook Pro Duo UX581 Intel Core i7 9th Gen 15.6" 4K UHD OLED Touchscreen Laptop'
          price={2999.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91VR2ZXL9LL._SY355_.jpg"
        />
        <Product
          id="10002"
          key="10002"
          title="Apple iPhone 11 Pro Max (256GB) - Space Grey"
          price={1759.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10003"
          key="10003"
          title="BUXAZ Activity Tracker"
          price={24.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61mCMm4EZ6L._SX679_.jpg"
        />
        <Product
          id="10004"
          key="10004"
          title="Mammon Women's Handbag With Sling Bag & Clutch (Set of 3) (3LR-bib-Green-Tie_Green)"
          price={18.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71QDWj8ThIL._UX575_.jpg"
        />
        <Product
          id="10005"
          key="10005"
          title="Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt"
          price={18.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61-TuCrKZ7L._AC._SR360,460.jpg"
        />
      </div>
    </div>
  )
}

export default Home
