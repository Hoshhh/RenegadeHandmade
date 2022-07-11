import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import { commerce } from './lib/commerce';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { useDispatch } from 'react-redux'
import { updateBadge } from './redux/cartSlice'
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
    //return dispatch(updateBadge(data.length))
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
    //console.log(cart)

    return dispatch(updateBadge(cart.total_items))
  }

  const handleAddToCart = async (productId: string, quantity: number) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)

    fetchCart()
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  //console.log(cart)
  //console.log(products)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<ProductsPage products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/products/:id" element={<SingleProductPage products={products} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
