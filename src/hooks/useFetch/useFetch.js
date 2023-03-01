import { useEffect, useState } from "react";
import axios from 'axios'

function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

   const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
     setData(responseData);
     setLoading(false);
    } catch(error) {
      setError (error.message);
      setLoading (false);
    }
   };

   useEffect(() => {
    fetchData()
   }, []);

  // useEffect(() => {
  //   fetch(REACT_APP_DENEME)
  //     .then((resp) => resp.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error)) 
  //     .finally(() => setLoading(false));
  // }, []);

   return {loading, data};
}

export default useFetch;