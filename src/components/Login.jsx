// LoginPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout1 from "../Layout/Layout1";
import Aos from "aos";
import "aos/dist/aos.css";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    // Check if token exists in local storage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // If token exists, set the login status to true
      setIsLoggedIn(true);
    }
  }, []); // Ensure this effect runs only once on mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        loginData
      );
      const token = response.data.token;

      // Store token securely, for example, in local storage
      localStorage.setItem("token", token);

      // Set login status to true
      setIsLoggedIn(true);

      // Redirect to the dashboard page on successful login
      navigate("/addCard");
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login error, show error message to the user
    }
  };

  return (
    <Layout1>
      <section className=" bg-[#E1D9D1] dark:bg-[#36454F] dark:text-white">
        {isLoggedIn ? (
          // If logged in, display this message
          <h1 className="text-center text-[3rem]">Is logged in</h1>
        ) : (
          // If not logged in, display the login form
          <div className="min-h-screen flex items-center justify-center ">
            <div
              className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
              data-aos="zoom-in"
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-black">
                Login Page
              </h2>
              <form onSubmit={handleLogin}>
                <label className="block mb-2 dark:text-black">Email:</label>
                <input
                  className="w-full border border-gray-300 p-2 rounded mb-4"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                  required
                />

                <label className="block mb-2 dark:text-black">Password:</label>
                <input
                  className="w-full border border-gray-300 p-2 rounded mb-4"
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                />

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </Layout1>
  );
};

export default LoginPage;
