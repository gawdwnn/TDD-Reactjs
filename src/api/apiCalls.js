import axios from "axios";

// axios.interceptors.request.use((request) => {
//   request.headers["Accept-Language"] = i18n.language;
//   const { header } = store.getState();
//   if (header) {
//     request.headers["Authorization"] = header;
//   }
//   return request;
// });

export const signUp = (body) => {
  return axios.post("/api/1.0/users", body);
};
