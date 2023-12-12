import React, { useEffect, useState } from "react";
import { JewelryApiRequestId } from "../lib/ApiRequest/Jewelry";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import Layout1 from "../Layout/Layout1";

export default function JelewerId() {
  const [show, setShow] = useState({});
  const { id } = useParams();
  window.scrollTo(0, 0);
  useEffect(() => {
    (async () => {
      const res = await JewelryApiRequestId(id);
      setShow(res); // Assuming you expect only one item
    })();
  }, [id]);
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCarts = (items) => {
    setCart((prevCart) => [...prevCart, items]);

    setCartItemCount((prevCount) => prevCount + 1);

    localStorage.setItem("carts", JSON.stringify(cart));

    localStorage.setItem("cartItemCount", cartItemCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cart));
    localStorage.setItem("cartItemCount", cartItemCount);
  }, [cart, cartItemCount]);

  return (
    <>
      <Layout1>
        <section className="pt-[3rem]">
          <div></div>

          <div className="flex flex-row  ">
            <div>
              {" "}
              <img src={show.image} alt={show.title} />
            </div>
            <div className=" w-auto flex flex-col flex-wrap  pl-[3rem] ">
              <h1 className="pb-[1rem]">{show.title}</h1>
              <p className="pb-[1rem] text-[#a2876d]">{show.description}</p>
              <div className="h-[2rem] flex text-center ">
                <p className="flex justify-center items-center">
                  {" "}
                  <Rating rating={show.rating?.rate} />
                </p>
                <span className="pl-[3rem] flex justify-center items-center text-sm">
                  Rating:{show.rating?.rate}
                </span>
              </div>

              <p>Category:{show.category}</p>

              <h1>${show.price}</h1>
              <button onClick={() => addToCarts(show)}>Add To Carts</button>
            </div>
          </div>
        </section>
      </Layout1>
    </>
  );
}
