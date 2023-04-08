import React from "react";
import "./Home.css"
import "./Product.css"
import Product from "./Product.js"
function Home(){
    return (
        <div>
            <div className="home">
                <div className="home__Container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__Image" />

                    <div className="home__row">
                        <Product
                            id="1"
                            title="Bag"
                            price={11.96}
                            rating={5}
                            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61iR9NMcKpL._UL1280_.jpg"
                        />
                        <Product
                            id="2"
                            title="shoes"
                            price={25.2}
                            rating={4}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KCGeISnII51ftFEdNIpevKXJbtOvgjF3zA&usqp=CAU"
                        />
                    </div>
                    <div className="home__row">
                    <Product
                            id="3"
                            title="Shirt"
                            price={10}
                            rating={3}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5G-hUdYN570GPhoLBPdd3Gj7FX5k1-onQg&usqp=CAU"
                        />
                        <Product
                            id="4"
                            title="googles"
                            price={25}
                            rating={5}
                            image="https://royalson.in/wp-content/uploads/2019/07/1-26.jpg"
                        />
                        <Product
                            id="5"
                            title="coat"
                            price={30}
                            rating={4}
                            image="https://5.imimg.com/data5/SELLER/Default/2020/11/SW/NW/QI/44342278/78d097d8-3125-49af-8d1a-38d1ce43a2a0-500x500.jpg"
                        />
                    </div>
                    <div className="home__row">
                    <Product
                            id="6"
                            title="Saree"
                            price={35.20}
                            rating={5}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSXEj9hBzpmxCzzar3arusLjtmqDyauUUNw&usqp=CAU"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;