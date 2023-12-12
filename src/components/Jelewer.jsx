import React, { useEffect, useState } from "react";
import JewelryApiRequest from "../lib/ApiRequest/Jewelry";
import Layout1 from "../Layout/Layout1";
import Rating from "./Rating";
import { BiCartAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import Loading from "./Loading";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Jelewer() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showMessage,setShowMessage]=useState(false)
  const pathname = window.location.pathname;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await JewelryApiRequest();
        setShow(res);
        setFilteredItems(res);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = show.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const addToCarts = (items) => {
    setCart((prevCart) => [...prevCart, items]);
    setCartItemCount((prevCount) => prevCount + 1);
    localStorage.setItem("carts", JSON.stringify([...cart, items]));
    localStorage.setItem("cartItemCount", cartItemCount + 1);
 setShowMessage(true)
 setTimeout(() => {
  setShowMessage(false);
  alert("Add successfully");
}, 200);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Layout1>
      
        <section data-aos="zoom-out">
      
          <div className="flex flex-col dark:bg-gray-800 dark:text-white bg-white text-black">
          
            <p1 className="pt-[1rem] pl-6">{pathname}</p1>
            <div className="h-[8rem] text-center pt-[5rem]">
              <input
                className="border-2 dark:text-white text-black"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleSearch();
                }}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-9">
           
              {filteredItems.map((items, index) => (
                <div
                  key={index}
                  className="w-[18rem] border-2 flex flex-col justify-center items-center"
                >
                  <img
                    className="h-[17rem] object-fill"
                    src={items.image}
                    alt={items.title}
                  />
                  <h1 className="dark:text-white text-black">{items.title}</h1>
                  <p className="dark:text-white text-black">${items.price}</p>
                  <p className="flex">
                    <Rating rating={items.rating.rate} />
                  </p>
                  <button
                    className="dark:bg-blue-500 bg-green-500"
                    onClick={() => addToCarts(items)}
                  >
                    Add To Carts
                  </button>
                  <NavLink
                    className="dark:text-blue-300 text-blue-600"
                    to={`/JelewerId/${items.id}`}
                  >
                    See more
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout1>
      <Footer />
    </>
  );
}
