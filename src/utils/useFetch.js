import { useEffect, useState } from "react";

const useFetch = (url, category) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        setResponse(response);
        return response.json();
      })
      .then((infoJson) => {
        if (category) {
          setData(infoJson.filter((item) => item.category === category));
          setLoading(false);
        } else {
          setData(infoJson);
          setLoading(false);
        }
      })
      .catch((_error) => {
        setError(_error);
      });
  }, [url, category]);

  return [data, loading, response, error];
};

export default useFetch;
