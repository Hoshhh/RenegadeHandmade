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


function App() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
    return dispatch(updateBadge(data.length))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage products={products} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
