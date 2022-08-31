import {  useQuery } from "react-query";

const useFetch = (name,fun ) => {
  return useQuery(name, fun);
};
export default useFetch;
