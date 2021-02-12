import { IProduct } from '../interfaces/product-hw19.interface';
import { ICategory } from '../interfaces/category-hw18.interface';

export class Product implements IProduct {
    constructor(
        public id: number,
        public category: ICategory,
        public nameEN: string,
        public nameUA: string,
        public description: string,
        public weight: string,
        public price: number,
        public image: string,
        public count: number = 1,
    ) {}
}
