import { useState, useEffect } from "react";
import { API_KEY, CONTEXT_KEY } from "./config";
const useGoogleSearch = (term, startIndex) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log("data :>> ", data);
  // console.log("useGoogle :>> ", term);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetch(` 
      https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`)
        .then(response => response.json())
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(error => {
          console.log("error :>> ", error);
          setLoading(true);
        });
    };
    fetchData();
  }, [term, startIndex]);
  return { data, loading };
};
export default useGoogleSearch;
