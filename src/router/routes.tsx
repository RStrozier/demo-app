import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/homepage/HomePage"
import ShopPage from "../pages/shoppage/ShopPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter;