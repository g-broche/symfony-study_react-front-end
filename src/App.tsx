import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="products">
              <Route path="" element={<ProductList />} />
              {/* <Route path=":productId" element={<ProductDetails />} /> */}
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
