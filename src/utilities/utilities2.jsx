// import { useEffect, useState } from "react";
// // create a useFetch  hook to fetch product data from the API
// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, [url]);

//   return { data, error, loading };
// };

// export { useFetch };
