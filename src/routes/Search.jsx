import React from "react";

import { useFetch } from "../../hooks/UseFetch";

import { Link, useSearchParams } from "react-router-dom";

export const Search = () => {
  const [searcParams] = useSearchParams();
  const search = searcParams.get("q") || "";
  /* Pegamos o valor do parametro q
  resultado search = cadeira
  ex -> /search?q=teclado
  fica -> search = "teclado" */

  const { data: items } = useFetch("http://localhost:3000/products"); //busco todos os produtos

  //filto todos os produtos
  //item é uma variavel que sera criada pelo filter, para representar cada elemento do array
  //item? "Só execute o que vem depois se items existir."
  /* 
  filteredItems → variável que vai guardar o resultado.
  items → array de produtos.
  ?. → "só continue se items existir".
  item → cada produto individual dentro do array.
  */
  const filteredItems = items?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  // Filtra os produtos pelo nome pesquisado
  // item representa cada produto do array
  // toLowerCase() converte o texto para minúsculo
  // includes() verifica se o nome do produto contém o texto pesquisado
  // Retorna apenas os produtos que correspondem à busca
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
        {/* "Execute a parte da direita somente se a parte da esquerda for verdadeira." 
        const logado = true;
        logado && console.log("Bem-vindo");*/}
        {filteredItems && filteredItems.map((item) => (
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
