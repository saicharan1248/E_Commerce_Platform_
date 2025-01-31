import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import apiClient from "./api";

function useFetch(URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFunc();
  }, [URL]);

  const fetchFunc = async () => {
    setLoading(true);
    try {
      const response = await apiClient({
        URL,
        METHOD: "GET",
      });
      setData(response.data);
      toast[response.status === 200 ? "success" : "error"](response.message);
    } catch (error) {
      setError(error.response.message);
    }
    setLoading(false);
  };

  return { data, loading, error, fetchFunc };
}

export default useFetch;
