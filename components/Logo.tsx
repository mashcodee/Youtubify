import React from "react";

interface Props {}

const Logo = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      fill="none"
      viewBox="0 0 512 512"
    >
      <rect width="512" height="512" fill="#FF5C5C" rx="150"></rect>
      <g fill="#fff" filter="url(#filter0_d)">
        <rect
          width="60.997"
          height="304.983"
          x="224.158"
          y="98.192"
          rx="30.498"
        ></rect>
        <rect
          width="60.997"
          height="213.488"
          x="101.699"
          y="262.85"
          rx="30.498"
          transform="rotate(-45 101.699 262.85)"
        ></rect>
        <rect
          width="60.997"
          height="213.488"
          x="364.483"
          y="219.718"
          rx="30.498"
          transform="rotate(45 364.483 219.718)"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="345.915"
          height="355.617"
          x="85.699"
          y="82.192"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="4" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.425 0 0 0 0 0.155833 0 0 0 0 0.155833 0 0 0 0.5 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
