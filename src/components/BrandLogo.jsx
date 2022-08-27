import React from "react";

const logoAttri = {
  sLight: {
    svg: (
      <svg
        width="37"
        height="30"
        viewBox="0 0 37 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.9047 5.9842C27.8172 2.67922 19.7235 5.03546 16.8271 11.247C13.9306 17.4586 17.3281 25.1732 24.4156 28.4782C31.5032 31.7832 20.6849 20.6082 23.5814 14.3966C26.4779 8.18507 41.9923 9.28917 34.9047 5.9842Z"
          fill="#9B4DFF"
        />
        <path
          d="M23.1648 11.6326C23.1648 17.3288 3.7975 35.1771 11.0128 21.4922C4.93058 21.4922 0 17.5848 0 12.7649C0 7.94489 4.93058 4.03754 11.0128 4.03754C17.0949 4.03754 23.1648 5.50277 23.1648 11.6326Z"
          fill="#8AFFCF"
        />
      </svg>
    ),
    style: {
        font: "normal 400 16px/1.0 Rubik",
        color: "#ffffff"
    }
  },
};

export default function BrandLogo() {
  return (<p style={logoAttri.sLight.style}>Joblify Logo</p>);
}
