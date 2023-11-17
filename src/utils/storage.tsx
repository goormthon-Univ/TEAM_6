import React from "react";
import { UserData } from "../types/UserData";

const storage = {
  set: (key: string, value: UserData) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string): UserData => {
    const defaultValue: UserData = {
      userId: -1,
      nickname: "구르미",
    };
    const value = localStorage.getItem(key);
    return (value ? JSON.parse(value) : defaultValue) as UserData;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default storage;
