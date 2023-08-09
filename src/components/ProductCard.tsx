import '../css/product-list.css';
import { Products } from '../classes/Products'
import { mediaSrc } from '../lib/App-config'
// import ProductList from './components/ProductList';
// import { useEffect } from 'react';

interface Props {
    product: Products
}


function ProductCard({ product }: Props) {
    console.log(product.imageSource)
    return (
        <>
            <a className="card-link" href={`products/${product.id}`}>
                <li>
                    <article>
                        <figure><img src={`${mediaSrc}${product.imageSource}`} alt={`picture-${product.name}`} /></figure>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <footer><span>Price : {product.price} €</span><button className="add">Add to Cart</button></footer>
                    </article>
                </li >
            </a>
        </>
    )
}

export default ProductCard;