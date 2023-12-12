import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

import Layout1 from "../Layout/Layout1";

export default function AddCard() {
  const [uniqueItems, setUniqueItems] = useState([]);
  const [overallTotal, setOverallTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("carts");
    const parsedData = JSON.parse(data);
    const itemsWithCount = parsedData.map((item) => ({
      ...item,
      count: 1,
      total: (item.price ?? item.Price) * 1,
    }));
    setUniqueItems(itemsWithCount);
  }, []);

  useEffect(() => {
    const total = uniqueItems.reduce((acc, item) => acc + (item.total ?? 0), 0);
    setOverallTotal(total);

    // Calculate total items
    const itemsCount = uniqueItems.reduce((acc, item) => acc + item.count, 0);
    setTotalItems(itemsCount);
  }, [uniqueItems]);

  const handleChangeQuantityPlus = (index) => {
    setUniqueItems((prevItems) => {
      const updatedItems = [...prevItems];
      const currentItem = updatedItems[index];

      if ("price" in currentItem && "count" in currentItem) {
        currentItem.count += 1;
        currentItem.total = currentItem.count * currentItem.price;
      } else if ("Price" in currentItem && "count" in currentItem) {
        currentItem.count += 1;
        currentItem.total = currentItem.count * currentItem.Price;
      }

      return updatedItems;
    });
  };

  const handleChangeQuantityMinus = (index) => {
    setUniqueItems((prevItems) => {
      const updatedItems = [...prevItems];
      const currentItem = updatedItems[index];

      if ("price" in currentItem && "count" in currentItem) {
        currentItem.count = Math.max(currentItem.count - 1, 0);
        currentItem.total = currentItem.count * currentItem.price;
      } else if ("Price" in currentItem && "count" in currentItem) {
        currentItem.count = Math.max(currentItem.count - 1, 0);
        currentItem.total = currentItem.count * currentItem.Price;
      }

      return updatedItems;
    });
  };

  const handleDeleteItem = (index) => {
    setUniqueItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1); // Remove the item at the specified index
      return updatedItems;
    });
  };

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Redirect to the home page (or any other desired destination)
    window.location.replace("/");
  };

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Set a timer to delete the token after one hour (3600000 milliseconds)
      const timeoutId = setTimeout(() => {
        localStorage.removeItem("token");
        // Redirect to the login page after removing the token
        window.location.replace("/addCart");
      }, 3600000);

      // Clear the timer when the component unmounts
      return () => clearTimeout(timeoutId);
    } else {
      // If no token is found, redirect to the login page
      window.location.replace("/login");
    }
  }, []);
  window.scrollTo(0, 0);
  return (
    <>
      <Layout1>
        <section className="h-screen bg-[#E1D9D1] dark:bg-[#36454F] dark:text-white">
          <div className="flex justify-center border-2 bg-amber-600">
            <button className="text-[1.5rem]" onClick={handleLogout}>
              Logout
            </button>
          </div>
          {uniqueItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center items-center gap-5"
            >
              <img
                src={item.image}
                className="w-[3rem] h-[3rem]"
                alt={item.title}
              />
              <h1>{item.title}</h1>
              <p>{item.price ?? item.Price}</p>
              <div>
                <button
                  className="border-2 px-[1rem]"
                  onClick={() => handleChangeQuantityPlus(index)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                {item.count}
                <button
                  className="border-2 px-[1rem]"
                  onClick={() => handleChangeQuantityMinus(index)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <button
                  className="border-2 px-[1rem]"
                  onClick={() => handleDeleteItem(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <p>Total: {item.total ?? 0} Taka</p>
            </div>
          ))}
          <div className="text-center mt-5">
            <h2>Total Items: {totalItems.toFixed(2)}</h2>
            <h2>Overall Total: {overallTotal.toFixed(2)} Taka</h2>
          </div>
        </section>
      </Layout1>
    </>
  );
}
