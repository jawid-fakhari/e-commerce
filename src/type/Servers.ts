// settare il Type dei prodotti del file json - che è stato fatto in un json to typescript converter

export interface Products {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductsRating
}

export interface ProductsRating {
  rate: number
  count: number
}
