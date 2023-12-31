import React from "react";
import { BottomNavbarIcon } from "../../types/BottomNavbarIcon";

export const UserIcon = ({ isSelected }: BottomNavbarIcon) => {
  return (
    <svg
      width="36"
      height="34"
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5484 17C22.3961 17 26.3226 13.1962 26.3226 8.5C26.3226 3.80375 22.3961 0 17.5484 0C12.7006 0 8.77419 3.80375 8.77419 8.5C8.77419 13.1962 12.7006 17 17.5484 17ZM17.5484 21.25C11.6916 21.25 0 24.0975 0 29.75V31C0 32.6569 1.34315 34 3 34H32.0968C33.7536 34 35.0968 32.6569 35.0968 31V29.75C35.0968 24.0975 23.4052 21.25 17.5484 21.25Z"
        fill={isSelected ? "#FFB8AE" : "#D9D9D9"}
      />
    </svg>
  );
};
