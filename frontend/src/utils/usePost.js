import { useState } from "react";
import { toast } from "react-toastify";
import apiClient from "./api";

function usePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callFunc = async (URL, METHOD = "DELETE", BODY = {}) => {
    setLoading(true);
    try {
      const response = await apiClient({
        URL,
        METHOD,
        BODY,
      });
      toast[response.status === 200 ? "success" : "error"](response.message);
    } catch (error) {
      setError(error);
      toast["error"](error.message);
    }
    setLoading(false);
  };

  return { loading, error, callFunc };
}

export default usePost;
