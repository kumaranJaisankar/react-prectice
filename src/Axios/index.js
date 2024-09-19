import axios from "axios";
const tokenData = localStorage.getItem("key");
const customerID = JSON.parse(tokenData);

const getAccessToken = () => {
  const storageToken = localStorage.getItem("key");

  var tokenAccess = "";
  if (storageToken === null) {
    tokenAccess = "";
  } else {
    var token = JSON.parse(storageToken);
    tokenAccess = token.access;
  }
  return tokenAccess;
};

export const authenticateUser = (url = "/dj-rest-auth/login/", userdata) => {
  return axios({
    url,
    method: "post",
    baseURL: import.meta.env.VITE_BASE_URL,
    data: userdata,
  });
};

export const googleAuthUser = (url = "/dj-rest-auth/google/", userdata) => {
  return axios({
    url,
    method: "post",
    baseURL: import.meta.env.VITE_BASE_URL,
    data: userdata,
  });
};

export const githubAuthUser = (url = "/dj-rest-auth/google/", userdata) => {
  return axios({
    url,
    method: "post",
    baseURL: import.meta.env.VITE_BASE_URL,
    data: userdata,
  });
};

export const getUserDetails = (url = "/dj-rest-auth/user/") => {
  const tokenAccess = getAccessToken();
  return axios({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenAccess}`,
    },
    method: "get",
    url,
  });
};

// export const adminaxios = axios.create({
//     baseURL: process.env.REACT_APP_API_URL_ADMIN,
//     headers: {"Authorization" : `Bearer ${tokenAccess}`}
//   });
