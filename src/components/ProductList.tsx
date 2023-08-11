import '../css/product-list.css';
import ProductCard from './ProductCard';
import { FetchResponseHandler, ApiProduct, AppProduct } from '../interfaces/model'
import { Products } from '../classes/Products'
import { ENDPOINTS } from '../lib/Api-config';
import axios from "axios";
import { useEffect, useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../app/hooks';
// import { storeProducts, clearProductStore } from '../features/products/productsSlice';


async function fetchProducts(): Promise<FetchResponseHandler> {

    return await axios
        .get(ENDPOINTS.products.index)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return { success: false, data: null, message: "could not reach API service" }
        })
}

function convertToAppProductFormat(fetchedProduct: ApiProduct): AppProduct {
    return {
        id: fetchedProduct.id,
        name: fetchedProduct.name_product,
        description: fetchedProduct.description_product,
        price: fetchedProduct.price_product,
        availability: fetchedProduct.availability_product,
        imageSource: fetchedProduct.image_product,
        reference: fetchedProduct.reference,
        category: fetchedProduct.category,
        distributors: fetchedProduct.distributors,
        seller: fetchedProduct.seller_name,
    }
}

function productsParser(fetchedProducts: ApiProduct[]): Products[] | null {
    if (fetchedProducts) {
        const parsedData = [] as Products[]
        fetchedProducts.forEach(fetchedProduct => {
            const currentProduct = convertToAppProductFormat(fetchedProduct)
            parsedData.push(currentProduct)
        });
        return parsedData
    } else {
        return null
    }
}

export default function ProductList() {
    const [productsData, setProductsData] = useState<Products[] | null>(null);
    const [Message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts().then((fetchResult) => {
            if (fetchResult.success) {
                const fetchedProducts = productsParser(fetchResult.data as ApiProduct[])
                setMessage(null)
                setProductsData(fetchedProducts)
            } else {
                setProductsData(null)
                setMessage(fetchResult.message)
            }
        });
    }, [])
    if (productsData) {
        return (
            <section id="product-list-display">
                <ul>
                    {productsData.map(product =>
                        <ProductCard key={`pro-${product.id}-${product.name}`} product={product} />
                    )}
                </ul>
            </section>
        )
    } else if (Message) {
        return (
            <section id="product-list-error">
                <p>no data was fetch, error : {Message}</p>
            </section>
        )
    }
}





