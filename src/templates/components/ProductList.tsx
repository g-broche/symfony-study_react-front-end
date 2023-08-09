import '../../App.css';
import ProductCard from './ProductCard';
import { Products } from '../../classes/Products'
// import Product from './Product';

interface Props {
    productList: Products[]
}

function ProductList({ productList }: Props) {


    return (
        <>
            <ul>
                {productList.map(product =>
                    <ProductCard key={`pro-${product.id}-${product.name}`} product={product} />
                )}
            </ul>
        </>
    )
}

export default ProductList

