import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { lazy } from "react";
import AddCard from "./components/AddCard";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ManFashion from "./components/ManFashion";
import SliderJelewer from "./components/SliderJelewer";
import SliderMan from "./components/SliderMan";
import SliderWoman from "./components/SliderWoman";
import WomanFashion from "./components/WomanFashion";
import Fashion from "./components/Fashion";
import React from "react";
import Loading from "./components/Loading";
const LazyJelewer = lazy(() => import("./components/Jelewer"));
const LazyJelewerId = lazy(() => import("./components/JelewerId"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<SliderMan />} />
            <Route path="SliderMan" element={<SliderMan />} />
            <Route path="SliderWoman" element={<SliderWoman />} />
            <Route path="SliderJelewer" element={<SliderJelewer />} />
          </Route>
          <Route path={"/addCard"} element={<AddCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/Jelewer"
            element={
              <React.Suspense fallback=<Loading />>
                <LazyJelewer />
              </React.Suspense>
            }
          />
          <Route
            path="/JelewerId/:id"
            element={
              <React.Suspense fallback=<Loading />>
                <LazyJelewerId />
              </React.Suspense>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/manFashion" element={<ManFashion />} />
          <Route path="/Fashion" element={<Fashion />} />

          <Route path="/womanFashion" element={<WomanFashion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
