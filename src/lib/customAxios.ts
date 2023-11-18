import axios, { AxiosInstance } from "axios";
import storage from "../utils/storage";

const host =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_API_URL
    : "api";

export const customAxios: AxiosInstance = axios.create({
  baseURL: host, // 기본 서버 주소 입력
});

customAxios.interceptors.request.use(
  (config) => {
    // storage에서 userData 가져오기
    const userData = storage.get("userData");

    // userId가 있으면 헤더에 추가
    if (userData && userData.userId) {
      config.headers.userId = userData.userId;
    }

    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);
