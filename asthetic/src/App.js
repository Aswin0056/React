import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage";
import Contact from "./component/Contact";
import FaqPage from "./component/faqpage";
import ProductPage from "./component/productpage";
import Thank from "./component/thankpage";
import ViewProduct from "./component/viewproduct";


function App() {
  return (
    <div>
       
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FaqPage />}/>
      <Route path="/product" element={<ProductPage />} />
      <Route path="/thankpage" element={<Thank />} />
      <Route path="/viewproduct" element={<ViewProduct />} />
    </Routes>
    </BrowserRouter>
       
    </div>
  );
}

export default App;

