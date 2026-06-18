import React from 'react'
import { useFetch } from '../../hooks/UseFetch'
import { useParams, Link } from 'react-router-dom'

export const Products = () => {

  //Você pega o parâmetro da URL:
  const{id} = useParams();
  //montando a url da API
  const url = "http://localhost:3000/products/" + id;

  //Isso cria uma variável chamada data.
  const {data: product} = useFetch(url);
  //guarando o valor de data em uma variavel chamada product

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

{/* Pego o id da URL usando useParams(). 
  Com esse id monto a URL da API. O useFetch faz a requisição para essa URL, 
  busca o produto correspondente no JSON Server e retorna os dados. Eu pego a propriedade data,
   renomeio para product e depois acesso suas propriedades como product.id, 
  product.name e product.price. */}

  {/* fluxo completo unindo React Router + useParams + useFetch + json-server:
    
  HOME.JSX
│
├─ useFetch("http://localhost:3000/products")
│
├─ json-server retorna todos os produtos
│
└─ Exibe a lista
      │
      └─ Usuário clica em:
         
         <Link to={`/products/${item.id}`}>
         
         Exemplo:
         item.id = 7
               │
               ▼

URL DO NAVEGADOR
│
└─ /products/7
      │
      ▼

REACT ROUTER
│
├─ Procura uma rota compatível
│
└─ path: "products/:id"
      │
      ▼

React Router identifica:
│
└─ id = "7"
      │
      ▼

PRODUCTS.JSX
│
├─ const { id } = useParams()
│
└─ id = "7"
      │
      ▼

Monta a URL da API
│
└─ const url =
   "http://localhost:3000/products/" + id
      │
      ▼

Resultado:
│
└─ http://localhost:3000/products/7
      │
      ▼

useFetch(url)
│
└─ fetch("http://localhost:3000/products/7")
      │
      ▼

JSON-SERVER
│
├─ Procura na coleção "products"
│
└─ Produto com id = "7"
      │
      ▼

Retorna:
│
└─ {
      "name": "cadeira",
      "price": "200",
      "id": "7"
    }
      │
      ▼

useFetch
│
└─ data recebe o objeto
      │
      ▼

const { data: product } = useFetch(url)
│
└─ product =
   {
     id: "7",
     name: "cadeira",
     price: "200"
   }
      │
      ▼

RENDERIZAÇÃO
│
├─ product.id
├─ product.name
└─ product.price */}