import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
// import ProductDetails from './components/ProductDetails';

import './App.css'
import Cart from './components/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="products">
              <Route path="" element={[<ProductList />, <Cart />]} />
              <Route path=":productId" element={[<ProductDetails />, <Cart />]} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
