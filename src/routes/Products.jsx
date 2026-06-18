import React from 'react'
import { useFetch } from '../../hooks/UseFetch'
import { useParams, Link } from 'react-router-dom'

export const Products = () => {

  const{id} = useParams();
  const url = "http://localhost:3000/products/" + id;

  const {data: product} = useFetch(url);

    if(!product) return <p>Carregando ...</p>;

  return (
    <div>
    <p>Id do produto:{product.id}</p>  
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      {/* nested rout */}
      <Link to={`/products/${product.id}/info`}>Mains informaçoes</Link>
    </div>
      
    </div>
  )
}
