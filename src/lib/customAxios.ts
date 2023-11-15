import axios, { AxiosInstance } from "axios";

const host =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_API_URL
    : "api";

// import cookies from "js-cookie";
export const customAxios: AxiosInstance = axios.create({
  baseURL: host, // 기본 서버 주소 입력
  // headers: {},
  //   headers: {
  //     access_token: cookies.get("access_token"),
  //   },
});
