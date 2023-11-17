import axios, { AxiosInstance } from "axios";
import storage from "../utils/storage";

const host =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_API_URL
    : "api";

export const customAxios: AxiosInstance = axios.create({
  baseURL: host, // 기본 서버 주소 입력
  headers: {
    userId: storage.get("userData").userId,
  },
});
