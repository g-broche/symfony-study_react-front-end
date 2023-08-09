export class Products {
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

    constructor(id: number, name: string, desc: string, price: number, avail: boolean, img: string, ref: string, cat: string, dist: string[], seller: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.price = price;
        this.availability = avail;
        this.imageSource = img;
        this.reference = ref;
        this.category = cat;
        this.distributors = dist;
        this.seller = seller;
    }
}
