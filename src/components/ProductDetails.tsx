// import '../css/product-list.css';
import { Products } from '../classes/Products'
import { mediaSrc } from '../lib/App-config'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ENDPOINTS } from '../lib/Api-config';
import axios from 'axios';
import { FetchResponseHandler, ApiProduct, AppProduct } from '../interfaces/model';

async function fetchProducts(productId: string): Promise<FetchResponseHandler> {

    return await axios
        .get(ENDPOINTS.products.getProduct + productId)
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

function productParser(fetchedProduct: ApiProduct): Products | null {
    if (fetchedProduct) {
        return convertToAppProductFormat(fetchedProduct)
    } else {
        return null
    }
}


export default function ProductDetails() {
    const [productData, setProductsData] = useState<Products | null>(null);
    const [Message, setMessage] = useState<string | null>(null);
    const { productId } = useParams()
    useEffect(() => {
        fetchProducts(productId!).then((fetchResult) => {
            if (fetchResult.success) {
                const fetchedProduct = productParser(fetchResult.data as ApiProduct)
                setMessage(null)
                setProductsData(fetchedProduct)
            } else {
                setProductsData(null)
                setMessage(fetchResult.message)
            }
        });
    }, [])

    if (productData) {
        return (
            <>
                <article className='product-details'>
                    <figure><img src={`${mediaSrc}${productData.imageSource}`} alt={`picture-${productData.name}`} /></figure>
                    <h3>{productData.name}</h3>
                    <p>{productData.description}</p>

                    <footer><span>Price : {productData.price} €</span><button className="add">Add to Cart</button></footer>
                </article>
            </>
        )
    } else if (Message) {
        return (
            <section id="product-detail-error">
                <p>no data was fetch, error : {Message}</p>
            </section>
        )
    }
}