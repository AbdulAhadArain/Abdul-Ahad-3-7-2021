export default function setupAxios(axios) {
  const onResponseSuccess = (response) => response;
  const onResponseError = (err) => {
    const status = err.status || (err.response ? err.response.status : 0);
    console.log("API call response : ", status);

    return Promise.reject(err);
  };
  const TIMEOUT = 1 * 60 * 1000;
  axios.defaults.timeout = TIMEOUT;
  axios.defaults.baseURL = process.env.HOST;
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
}
