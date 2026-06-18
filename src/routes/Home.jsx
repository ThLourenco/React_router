import React from "react";

import { useFetch } from "../../hooks/UseFetch";

//rota dinamica
import { Link } from "react-router-dom";

const url = "http://localhost:3000/products";

export const Home = () => {
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Home</h1>
      {/* Carregando Dadoks */}
      <ul className="products">
        {items && items.map((item) => (
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
