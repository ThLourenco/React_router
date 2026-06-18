import React from "react";

import { useFetch } from "../../hooks/UseFetch";

//rota dinamica
import { Link } from "react-router-dom";

const url = "http://localhost:3000/products";

export const Home = () => {
  const { data: items } = useFetch(url);
  //json-server retorna todos os produtos

  return (
    <div>
      <h1>Home</h1>
      {/* Carregando Dados */}
      <ul className="products">
        {items && //O map() percorre cada elemento do array.
          items.map((item) => ( //O map() percorre esse array e cria um novo array de elementos JSX para o React exibir.
            /* "Se items existir, execute o map()."
                É uma proteção para evitar erro enquanto os dados ainda estão carregando.
                É parecido com: */
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
              {/* Rota dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
