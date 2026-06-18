import { useState, useEffect } from "react";

//custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null); //null pois ainda nao temos nenhum valor carregado

  //erros
  const [error, setError] = useState(null);

  // loading
  const [loading, setLoading] = useState(false);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          //header sao uinformaçoes extras, estou dizendo ao servidor que os dados enviados estao no formato JSON
          "Content-Type": "application/json", //Sem isso alguns servidores não conseguem interpretar corretamente os dados.
        },
        body: JSON.stringify(data), //estou transformando um dado js em string JSON
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {
        // tratando erros
      try {
        //Loading
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();

        setLoading(false);

        setData(json);
      } catch (error) { console.log(error.message); setError("Houve algum erro ao carregar os dados!")}
    };

    fetchData();
  }, [url, callFetch]);

  //refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        setLoading(true);

        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);

        json = await res.json();

        setLoading(false);
      }
      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error};
};
