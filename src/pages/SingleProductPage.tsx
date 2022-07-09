import React from 'react'
import { useParams } from 'react-router-dom'

type ProductProps = {
  products: any[],
}

const SingleProductPage = (props: ProductProps) => {
    const { id } = useParams()
    console.log(props.products[id])
  return (
    <div>{props.products[id].name}</div>
  )
}

export default SingleProductPage