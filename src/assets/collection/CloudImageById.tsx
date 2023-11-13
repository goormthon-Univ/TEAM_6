import React from "react";

interface CloudImageByIdProps {
  imgId: string;
}
const CloudImageById = ({ imgId = "" }: CloudImageByIdProps) => {
  if (imgId === "") {
    return <div>"No Image !"</div>;
  } else if (imgId === "1") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M49.4585 17.25H45.794C44.7059 13.0841 42.4576 9.30346 39.3046 6.33764C36.1515 3.37181 32.2201 1.33973 27.9572 0.472294C23.6942 -0.395137 19.2706 -0.0631342 15.189 1.43058C11.1073 2.92429 7.53137 5.51981 4.8674 8.92222C2.20343 12.3246 0.558277 16.3975 0.118883 20.678C-0.320512 24.9585 0.463468 29.2751 2.38174 33.1371C4.30001 36.9992 7.27566 40.2519 10.9706 42.5257C14.6654 44.7995 18.9314 46.0032 23.2838 46H49.4585C53.3151 46 57.0138 44.4855 59.7409 41.7897C62.4679 39.0938 64 35.4375 64 31.625C64 27.8125 62.4679 24.1562 59.7409 21.4603C57.0138 18.7645 53.3151 17.25 49.4585 17.25Z"
          fill="#FFDEDA"
        />
      </svg>
    );
  } else if (imgId === "2") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M49.4585 17.25H45.794C44.7059 13.0841 42.4576 9.30346 39.3046 6.33764C36.1515 3.37181 32.2201 1.33973 27.9572 0.472294C23.6942 -0.395137 19.2706 -0.0631342 15.189 1.43058C11.1073 2.92429 7.53137 5.51981 4.8674 8.92222C2.20343 12.3246 0.558277 16.3975 0.118883 20.678C-0.320512 24.9585 0.463468 29.2751 2.38174 33.1371C4.30001 36.9992 7.27566 40.2519 10.9706 42.5257C14.6654 44.7995 18.9314 46.0032 23.2838 46H49.4585C53.3151 46 57.0138 44.4855 59.7409 41.7897C62.4679 39.0938 64 35.4375 64 31.625C64 27.8125 62.4679 24.1562 59.7409 21.4603C57.0138 18.7645 53.3151 17.25 49.4585 17.25Z"
          fill="#FFB8AE"
        />
      </svg>
    );
  } else if (imgId === "3") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M49.4585 17.25H45.794C44.7059 13.0841 42.4576 9.30346 39.3046 6.33764C36.1515 3.37181 32.2201 1.33973 27.9572 0.472294C23.6942 -0.395137 19.2706 -0.0631342 15.189 1.43058C11.1073 2.92429 7.53137 5.51981 4.8674 8.92222C2.20343 12.3246 0.558277 16.3975 0.118883 20.678C-0.320512 24.9585 0.463468 29.2751 2.38174 33.1371C4.30001 36.9992 7.27566 40.2519 10.9706 42.5257C14.6654 44.7995 18.9314 46.0032 23.2838 46H49.4585C53.3151 46 57.0138 44.4855 59.7409 41.7897C62.4679 39.0938 64 35.4375 64 31.625C64 27.8125 62.4679 24.1562 59.7409 21.4603C57.0138 18.7645 53.3151 17.25 49.4585 17.25Z"
          fill="#FFE4AE"
        />
      </svg>
    );
  } else if (imgId === "4") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
      >
        <path
          d="M49.4585 17.25H45.794C44.7059 13.0841 42.4576 9.30346 39.3046 6.33764C36.1515 3.37181 32.2201 1.33973 27.9572 0.472294C23.6942 -0.395137 19.2706 -0.0631342 15.189 1.43058C11.1073 2.92429 7.53137 5.51981 4.8674 8.92222C2.20343 12.3246 0.558277 16.3975 0.118883 20.678C-0.320512 24.9585 0.463468 29.2751 2.38174 33.1371C4.30001 36.9992 7.27566 40.2519 10.9706 42.5257C14.6654 44.7995 18.9314 46.0032 23.2838 46H49.4585C53.3151 46 57.0138 44.4855 59.7409 41.7897C62.4679 39.0938 64 35.4375 64 31.625C64 27.8125 62.4679 24.1562 59.7409 21.4603C57.0138 18.7645 53.3151 17.25 49.4585 17.25Z"
          fill="url(#paint0_linear_531_1803)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_531_1803"
            x1="32"
            y1="0"
            x2="32"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB8AE" />
            <stop offset="1" stop-color="#FFE4AE" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else if (imgId === "5") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="41"
        viewBox="0 0 90 41"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.3468 8.38464C51.8785 3.31698 46.0453 0 39.4283 0C31.9968 0 25.5425 4.2025 22.3283 10.3525C14.5883 11.1725 8.57111 17.7069 8.57111 25.625C8.57111 26.0246 8.58646 26.4208 8.61662 26.8128C8.58768 26.9147 8.56015 27.0172 8.53405 27.1201H6.81633C5.00853 27.1201 3.27477 27.8513 1.99646 29.1528C0.718147 30.4543 0 32.2196 0 34.0602C0 35.9009 0.718147 37.6661 1.99646 38.9676C3.27477 40.2691 5.00853 41.0003 6.81633 41.0003H19.0857C19.8384 41.0009 20.5855 40.9222 21.3157 40.7675C22.1875 40.9203 23.0844 41 23.9997 41H57.4283C57.4719 41 57.5154 40.9998 57.5589 40.9994H79.1072C85.12 40.9994 90 36.0964 90 30.0553C90 24.2769 85.534 19.5929 79.8697 19.1989C78.3882 11.6475 71.7872 5.97852 63.8572 5.97852C60.7399 5.97852 57.8255 6.85848 55.3468 8.38464Z"
          fill="#FFDEDA"
        />
      </svg>
    );
  } else if (imgId === "6") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="41"
        viewBox="0 0 90 41"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.3468 8.38464C51.8785 3.31698 46.0453 0 39.4283 0C31.9968 0 25.5425 4.2025 22.3283 10.3525C14.5883 11.1725 8.57111 17.7069 8.57111 25.625C8.57111 26.0246 8.58646 26.4208 8.61662 26.8128C8.58768 26.9147 8.56015 27.0172 8.53405 27.1201H6.81633C5.00853 27.1201 3.27477 27.8513 1.99646 29.1528C0.718147 30.4543 0 32.2196 0 34.0602C0 35.9009 0.718147 37.6661 1.99646 38.9676C3.27477 40.2691 5.00853 41.0003 6.81633 41.0003H19.0857C19.8384 41.0009 20.5855 40.9222 21.3157 40.7675C22.1875 40.9203 23.0844 41 23.9997 41H57.4283C57.4719 41 57.5154 40.9998 57.5589 40.9994H79.1072C85.12 40.9994 90 36.0964 90 30.0553C90 24.2769 85.534 19.5929 79.8697 19.1989C78.3882 11.6475 71.7872 5.97852 63.8572 5.97852C60.7399 5.97852 57.8255 6.85848 55.3468 8.38464Z"
          fill="#FFB8AE"
        />
      </svg>
    );
  } else if (imgId === "7") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="41"
        viewBox="0 0 90 41"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.3468 8.38464C51.8785 3.31698 46.0453 0 39.4283 0C31.9968 0 25.5425 4.2025 22.3283 10.3525C14.5883 11.1725 8.57111 17.7069 8.57111 25.625C8.57111 26.0246 8.58646 26.4208 8.61662 26.8128C8.58768 26.9147 8.56015 27.0172 8.53405 27.1201H6.81633C5.00853 27.1201 3.27477 27.8513 1.99646 29.1528C0.718147 30.4543 0 32.2196 0 34.0602C0 35.9009 0.718147 37.6661 1.99646 38.9676C3.27477 40.2691 5.00853 41.0003 6.81633 41.0003H19.0857C19.8384 41.0009 20.5855 40.9222 21.3157 40.7675C22.1875 40.9203 23.0844 41 23.9997 41H57.4283C57.4719 41 57.5154 40.9998 57.5589 40.9994H79.1072C85.12 40.9994 90 36.0964 90 30.0553C90 24.2769 85.534 19.5929 79.8697 19.1989C78.3882 11.6475 71.7872 5.97852 63.8572 5.97852C60.7399 5.97852 57.8255 6.85848 55.3468 8.38464Z"
          fill="#FFE4AE"
        />
      </svg>
    );
  } else if (imgId === "8") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="41"
        viewBox="0 0 90 41"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.3468 8.38464C51.8785 3.31698 46.0453 0 39.4283 0C31.9968 0 25.5425 4.2025 22.3283 10.3525C14.5883 11.1725 8.57111 17.7069 8.57111 25.625C8.57111 26.0246 8.58646 26.4208 8.61662 26.8128C8.58768 26.9147 8.56015 27.0172 8.53405 27.1201H6.81633C5.00853 27.1201 3.27477 27.8513 1.99646 29.1528C0.718147 30.4543 0 32.2196 0 34.0602C0 35.9009 0.718147 37.6661 1.99646 38.9676C3.27477 40.2691 5.00853 41.0003 6.81633 41.0003H19.0857C19.8384 41.0009 20.5855 40.9222 21.3157 40.7675C22.1875 40.9203 23.0844 41 23.9997 41H57.4283C57.4719 41 57.5154 40.9998 57.5589 40.9994H79.1072C85.12 40.9994 90 36.0964 90 30.0553C90 24.2769 85.534 19.5929 79.8697 19.1989C78.3882 11.6475 71.7872 5.97852 63.8572 5.97852C60.7399 5.97852 57.8255 6.85848 55.3468 8.38464Z"
          fill="url(#paint0_linear_531_1783)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_531_1783"
            x1="45"
            y1="0"
            x2="45"
            y2="41.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB8AE" />
            <stop offset="1" stop-color="#FFE4AE" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return <>No Image</>;
  }
};

export default CloudImageById;
