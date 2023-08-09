import '../App.css';
import ProductList from './components/ProductList';
import { FetchResponseHandler, ApiProduct } from '../interfaces/model'
import { Products } from '../classes/Products'
import { ENDPOINTS } from '../lib/Api';
import axios from "axios";
import { useEffect, useState } from 'react';



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

function productParser(fetchedProducts: ApiProduct[]): Products[] | null {
    if (fetchedProducts) {
        const parsedData = [] as Products[]
        fetchedProducts.forEach(fetchedProduct => {
            const currentProduct = new Products(
                fetchedProduct.id,
                fetchedProduct.name_product,
                fetchedProduct.description_product,
                fetchedProduct.price_product,
                fetchedProduct.availability_product,
                fetchedProduct.image_product,
                fetchedProduct.reference,
                fetchedProduct.category,
                fetchedProduct.distributors,
                fetchedProduct.seller_name,
            )
            parsedData.push(currentProduct)
        });
        return parsedData
    } else {
        return null
    }
}

function ProductIndex() {
    const [productsData, setProductsData] = useState<Products[] | null>(null);
    const [Message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts().then((fetchResult) => {
            if (fetchResult.success) {
                setProductsData(productParser(fetchResult.data as ApiProduct[]))
                setMessage(null)
            } else {
                setProductsData(null)
                setMessage(fetchResult.message)
            }
        });
    }, [])

    if (productsData) {
        return (
            <main>
                <ProductList productList={productsData} />
            </main>
        )
    } else if (Message) {
        return (
            <main>
                <p>no data was fetch, error : {Message}</p>
            </main>
        )

    }

}


export default ProductIndex;