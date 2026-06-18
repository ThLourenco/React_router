import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  //hook do React Router que permite mudar de página usando JavaScript. É parecido com clicar em um <Link>.
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  //medicada em que o usuario digita ele guarda o valor no query
  //o evento dispara e.target.value = "t" > executa o setQuery = setQuerry("t") e salva no query, query="t"

  const handleSubmit = (e) => { //A palavra handle normalmente significa: "Função que trata um evento."
    e.preventDefault();
    if (!query.trim()) return; //verifico se esta vazio, se estiver vazio o trim remove vazio e o return nao busca

    navigate(`/search?q=${query}`);
    //conforme o query é salvo e alterado ele guarda no navigate para alterar de pagina
    //diferene do link que o usuario precisa clicar no navigate mudamos a rota por codigo
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*Conforme digita salva no useState */}
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" /> {/* quando o usuario clica aqui o formulario onSubmit dispara */}
    </form>
  );
};
