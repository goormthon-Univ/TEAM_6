import { BottomNavbarIcon } from "../../types/BottomNavbarIcon";

export const CollectionIcon = ({ isSelected }: BottomNavbarIcon) => {
  return (
    <svg
      width="27"
      height="33"
      viewBox="0 0 27 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4176 0H3.73626C1.68132 0 0.0186817 1.7 0.0186817 3.77778L0.00188437 30.9516C0.000994352 32.3914 1.47599 33.3604 2.7971 32.7879L12.2817 28.6779C12.7891 28.4581 13.3648 28.4581 13.8721 28.6779L23.3586 32.7887C24.6793 33.361 26.1538 32.3929 26.1538 30.9536V3.77778C26.1538 1.7 24.4725 0 22.4176 0Z"
        fill={isSelected ? "#FFB8AE" : "#D9D9D9"}
      />
    </svg>
  );
};
