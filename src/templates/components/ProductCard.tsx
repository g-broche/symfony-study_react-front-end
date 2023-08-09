import '../../css/product.css';
import { Products } from '../../classes/Products'
// import ProductList from './components/ProductList';
// import { useEffect } from 'react';

const mediaRoot = "/src/media/";

interface Props {
    product: Products
}


function ProductCard({ product }: Props) {
    return (
        <>
            <li>
                <a className="cardLink">
                    <article>
                        <figure><img src={mediaRoot + product.imageSource} alt={`picture-${product.name}`} /></figure>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                    </article>
                </a>
            </li >
        </>
    )
}

export default ProductCard;