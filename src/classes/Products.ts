import { AppProduct } from "../interfaces/model";

export class Products implements AppProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    availability: boolean;
    imageSource: string;
    reference: string;
    category: string;
    distributors: string[];
    seller: string;

    constructor(source: AppProduct) {
        this.id = source.id;
        this.name = source.name;
        this.description = source.description;
        this.price = source.price;
        this.availability = source.availability;
        this.imageSource = source.imageSource;
        this.reference = source.reference;
        this.category = source.category;
        this.distributors = source.distributors;
        this.seller = source.seller;
    }
}
