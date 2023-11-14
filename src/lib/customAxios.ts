import axios, { AxiosInstance } from "axios";
// import cookies from "js-cookie";
export const customAxios: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`, // 기본 서버 주소 입력
  headers: {},
  //   headers: {
  //     access_token: cookies.get("access_token"),
  //   },
});
