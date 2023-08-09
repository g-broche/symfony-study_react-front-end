export interface FetchResponseHandler {
    success: boolean;
    data?: Array<object> | null,
    error?: string,
    message: string | null
}

export interface ApiProduct {
    id: number,
    name_product: string,
    description_product: string,
    price_product: number,
    availability_product: boolean,
    image_product: string,
    reference: string,
    category: string,
    distributors: string[],
    seller_name: string
}

