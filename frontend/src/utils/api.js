import axios from "axios";

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "/";
};

const apiClient = async ({ URL, BODY, METHOD = "GET", HEADERS }) => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      Authorization: `Bearer ${token}` || "",
      ...HEADERS,
    },
  });

  function handleSuccess({ data }) {
    return data;
  }
  function handleFailure(error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        setTimeout(() => {
          logout();
        }, 3000);
      }
      throw error.response?.data;
    }
  }

  if (METHOD === "GET") {
    return await instance
      .get(URL, { params: BODY })
      .then(handleSuccess)
      .catch(handleFailure);
  }

  if (METHOD === "DELETE") {
    return await instance
      .delete(URL, { params: BODY })
      .then(handleSuccess)
      .catch(handleFailure);
  }

  return await instance
    .post(URL, BODY)
    .then(handleSuccess)
    .catch(handleFailure);
};

export default apiClient;
