import React from "react";

import { useFetch } from "../../hooks/UseFetch";

import { Link, useSearchParams } from "react-router-dom";

export const Search = () => {
  const [searcParams] = useSearchParams();
  const search = searcParams.get("q") || "";

  const { data: items } = useFetch("http://localhost:3000/products");

  const filteredItems = items?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  {
    /*
  const url = "http://localhost:3000/products?" + searcParams;
  const { data: items } = useFetch(url);*/
  }

  return (
    <div>
      <h1>Resultado da pesquisa</h1>
      {/* Carregando Dados */}
      <ul className="products">
        {filteredItems &&
          filteredItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
