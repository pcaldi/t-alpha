import { Routes, Route } from "react-router-dom";


import { Home } from "../pages/Home"
import { Product } from "../pages/Product"
import { NewProduct } from "../pages/NewProduct"
import { UpdateProduct } from "../pages/UpdateProduct"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/new-product" element={<NewProduct />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
    </Routes>
  )
}
