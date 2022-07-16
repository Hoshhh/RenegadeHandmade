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
import CheckoutPage from './pages/Checkout/CheckoutPage';


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({
    line_items:[],
    subtotal:{}
  })
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)

    return dispatch(updateBadge(cart.total_items))
  }

  const handleAddToCart = async (productId: string, quantity: number) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)

    fetchCart()
  }

  const handleRemoveFromCart = async (productId: string) => {
    const item = await commerce.cart.remove(productId)
    setCart(item.cart)

    fetchCart()
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty()
    setCart(item.cart)

    fetchCart()
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

      setOrder(incomingOrder)

      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  const handleUpdateCartQty = async (productId: string, quantity: number) => {
    const item = await commerce.cart.update(productId, {quantity})
    setCart(item.cart)

    fetchCart()
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log(order)
  //console.log(products)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<ProductsPage products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/products/:id" element={<SingleProductPage products={products} onAddToCart={handleAddToCart}/>} />
        <Route path="/cart" element={<CartPage cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} handleUpdateCartQty={handleUpdateCartQty} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
