import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Logoblack from "./img/shoptmlogo.png";
// import LogoWhite from "./img/shoptmwhite.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div
      className={` ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`py-6  ${
          darkMode ? "bg-indigo-900	 text-white" : "bg-blue-500 text-gray-900"
        }`}
      >
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
          <div className="flex items-center">
            <img src={Logoblack} alt="Daily News" className="h-8 w-8 mr-2" />
            <a href="/" className="text-white font-bold text-xl mx-2">
              Daily News&#8482;
            </a> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* <img
            src={darkMode ? Logoblack : LogoWhite}
            alt="Daily News"
            className="h-14 w-14 mr-2"
          /> */}
          <a href="/" className="text-white font-bold text-2xl mx-2">
            ShopTM&#8482;
          </a>
          <div className="flex items-center">
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Home
            </a>
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Products
            </a>
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Men
            </a>
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Women
            </a>
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Jewellery
            </a>
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Electronics
            </a>
            <a href="/" className="text-white mr-4 font-bold text-base mx-2">
              Cart ({cart.length})
            </a>
            <button
              className="bg-white text-blue-500 font-bold py-2 px-4 rounded"
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div
        className={`py-8 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto">
          <div>
            <img
              src="https://b3h2.scene7.com/is/image/BedBathandBeyond/FY22-FW46-BBB-US-WEB-CircAssets-C01-19-DSK-2?$content$&wid=1280"
              alt="Discount Offer"
              className="w-full h-48 object-cover cursor-pointer"
            />
            <h2 className="text-lg font-bold text-center">
              Get 20% off on all products
            </h2>
            <p className="text-center mt-2">Use code DISCOUNT20 at checkout</p>
            <button
              className={`text-white font-bold py-2 px-4 rounded mt-4 mx-auto block ${
                darkMode
                  ? "bg-indigo-900	 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        // className={` py-8 ${
        //   darkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900"
        // }`}
        className={`rounded-lg shadow-lg p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto">
          <Slider {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className={`rounded-lg shadow-lg p-4 ${
                  darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
              >
                <div className="card rounded-t-lg text-center py-1 font-bold text-rose-50 bg-red-500 hover:bg-red-600">
                  CATEGORY: {product.category.toUpperCase()}
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <h2 className="text-lg font-bold">{product.title}</h2>
                {/* {truncateString(movie?.overview, 150)} */}
                <p>{truncateString(product.description, 200)}</p>
                <p className="mt-2">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className={`text-white font-bold py-2 px-4 rounded mt-4 inline-block ${
                    darkMode
                      ? "bg-indigo-900	 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg shadow-lg p-4 ${
                darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              }`}
            >
              <div className="card rounded-t-lg text-center py-1 font-bold text-rose-50 bg-red-500 hover:bg-red-600">
                CATEGORY: {product.category.toUpperCase()}
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p>{truncateString(product.description, 250)}</p>
              <p className="mt-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className={`text-white font-bold py-2 px-4 rounded mt-4 inline-block ${
                  darkMode
                    ? "bg-indigo-900	 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`h-3em w-100 flex justify-center align-center font-bold text ${
          darkMode ? "bg-indigo-900	 text-white" : "bg-blue-500 text-gray-900"
        }`}
      >
        <p>
          &#169; {new Date().getFullYear()} Copyright{" "}
          <a
            className="underline"
            href="https://www.mddevelopers.tk"
            target="_blank"
            rel="noreferrer"
          >
            MDDevelopers
          </a>
          &#8482;
        </p>
      </div>
    </div>
  );
}

export default App;
