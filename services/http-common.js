import axios from "axios";
export const domain = "http://localhost:8080";


const http = axios.create ({
  baseURL: `${domain}`,
  headers: {'Content-Type': 'application/json'},
});

// http.interceptors.request.use (
//   function (config) {
//     const token =AuthService.getToken();
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject (error);
//   }
// );

export default http;