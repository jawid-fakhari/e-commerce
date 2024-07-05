// settare il Type dei prodotti del file json - che è stato fatto in un json to typescript converter

export interface IProduct {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

export interface ProductRating {
  rate: number
  count: number
}
