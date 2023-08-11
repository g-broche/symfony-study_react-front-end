import '../css/product-list.css';
import { Products } from '../classes/Products'
import { mediaSrc } from '../lib/App-config'
import { useAppDispatch } from '../store/store';
import { addProduct } from '../store/features/cartSlice';
// import ProductList from './components/ProductList';
// import { useEffect } from 'react';

interface Props {
    product: Products
}


function ProductCard({ product }: Props) {
    const dispatch = useAppDispatch()
    return (
        <>
            <li className="article-wrapper">
                <article >
                    <main onClick={() => location.href = `/products/${product.id}`}>
                        <figure><img src={`${mediaSrc}${product.imageSource}`} alt={`picture-${product.name}`} /></figure>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <select name="distributors" id="distributor-selector">
                            {product.distributors.map(distributor =>
                                <option value={distributor}>{distributor}</option>
                            )}
                        </select>
                    </main>
                    <footer>
                        <span>Price : {product.price} €</span>
                        <button className="add" onClick={() => { dispatch(addProduct(product)) }}>Add to Cart
                        </button>
                    </footer>
                </article>
            </li >
        </>
    )
}

export default ProductCard;