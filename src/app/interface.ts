export interface carts {
    amount: number
    prod: products
}
export interface products {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}
export interface Rating {
    rate: number
    count: number
}
export interface cartProd {
    id: number,
    userId: number,
    date: string,
    products: [
        // {
        //     "productId": 1,
        //     "quantity": 4
        // },
        // {
        //     "productId": 2,
        //     "quantity": 1
        // },
        // {
        //     "productId": 3,
        //     "quantity": 6
        // }
    ]

}