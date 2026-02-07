"use client";

import React from "react";

const RangeBar = ({
  // status prop removed as it was unused
  ranges = ["Normal", "Borderline", "Risk"],
  colors = ["bg-[#4DA599]", "bg-[#F59E0B]", "bg-[#EF4444]"],
  markerPosition = 50, // 0 to 100
}: {
  status?: string;
  ranges?: string[];
  colors?: string[];
  markerPosition?: number;
}) => {
  return (
    <div className="w-full mt-4 mb-2">
      <div className="relative h-2.5 w-full mb-1">
        <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-full flex overflow-hidden">
          {colors.map((color, index) => (
            <div key={index} className={`h-full flex-1 ${color}`}></div>
          ))}
        </div>
        {/* Marker - Location Pin */}
        <div
          className="absolute top-1/2 z-10"
          style={{
            left: `${markerPosition}%`,
            transform: "translate(-50%, -90%)",
          }}
        >
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm filter"
          >
            <path
              d="M7.36897 11.778C9.73766 11.778 11.6579 9.85778 11.6579 7.48909C11.6579 5.1204 9.73766 3.2002 7.36897 3.2002C5.00028 3.2002 3.08008 5.1204 3.08008 7.48909C3.08008 9.85778 5.00028 11.778 7.36897 11.778Z"
              fill="#3A8177"
            />
            <path
              d="M6.81334 19.7502C6.8758 19.8282 6.95498 19.8911 7.04503 19.9343C7.13507 19.9776 7.23368 20 7.33356 20C7.43345 20 7.53205 19.9776 7.6221 19.9343C7.71214 19.8911 7.79132 19.8282 7.85379 19.7502C7.87068 19.7294 9.55957 17.6169 11.224 15.08C13.5085 11.5987 14.6667 8.99112 14.6667 7.33334C14.6667 3.28889 11.3778 0 7.33334 0C3.28889 0 0 3.28889 0 7.33334C0 8.99245 1.15822 11.6 3.44267 15.08C5.10667 17.6169 6.79556 19.7294 6.81334 19.7502ZM7.33245 3.55556C8.07963 3.55556 8.81002 3.77712 9.43128 4.19223C10.0525 4.60734 10.5367 5.19735 10.8227 5.88765C11.1086 6.57795 11.1834 7.33753 11.0376 8.07035C10.8919 8.80317 10.5321 9.4763 10.0037 10.0046C9.47542 10.533 8.80228 10.8928 8.06946 11.0385C7.33664 11.1843 6.57706 11.1095 5.88676 10.8236C5.19646 10.5376 4.60645 10.0534 4.19134 9.43216C3.77623 8.81091 3.55467 8.08052 3.55467 7.33334C3.55585 6.33177 3.95424 5.37156 4.66246 4.66334C5.37067 3.95513 6.33088 3.55674 7.33245 3.55556Z"
              fill="#3A8177"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between mt-1.5 text-[10px] text-gray-400 font-medium">
        {ranges.map((range, index) => (
          <span
            key={index}
            className="flex-1 text-center first:text-left last:text-right"
          >
            {range}
          </span>
        ))}
      </div>
    </div>
  );
};

const WaveChartPrimary = () => {
  return (
    <div className="w-full mt-4 flex items-end">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 267 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 37.3432V72.5471H267V32.8564C242.013 28.3696 230.591 1.79413 213.457 0.0684506C196.324 -1.65723 187.043 29.7502 165.626 37.3432C144.209 44.9362 137.783 31.4759 113.511 21.1218C89.238 10.7677 89.741 13.3922 79 19.2998C69 24.7998 55.6845 43.9008 29.984 43.9008C9.42353 43.9008 1.42781 39.529 0 37.3432Z"
          fill="url(#paint0_linear_2428_11164)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2428_11164"
            x1="133.5"
            y1="0"
            x2="133.667"
            y2="72.5484"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D645D" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const WaveChartSecondary = () => {
  return (
    <div className="w-full mt-4 flex items-end">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 267 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 8.00278V15.5471H267V7.04124C242.013 6.07971 230.591 0.384489 213.457 0.0146692C196.324 -0.355151 187.043 6.37558 165.626 8.00278C144.209 9.62999 137.783 6.74539 113.511 4.52647C89.238 2.30755 89.741 2.87 79 4.13602C69 5.31469 55.6845 9.4081 29.984 9.4081C9.42353 9.4081 1.42781 8.47122 0 8.00278Z"
          fill="url(#paint0_linear_2420_3974)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2420_3974"
            x1="133.5"
            y1="0"
            x2="133.508"
            y2="15.5475"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D645D" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const ChartBackground = () => {
  return (
    <div className="w-full mt-4 flex items-end justify-center relative">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 439 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 8.00278V15.5471H439V7.04124C397.917 6.07971 379.136 0.384489 350.965 0.0146692C322.794 -0.355151 307.535 6.37558 272.321 8.00278C237.107 9.62999 226.543 6.74539 186.634 4.52647C146.725 2.30755 147.552 2.87 129.891 4.13602C113.449 5.31469 91.5561 9.4081 49.2995 9.4081C15.4941 9.4081 2.34759 8.47122 0 8.00278Z"
          fill="url(#paint0_linear_2420_4045)"
        />
        <path
          d="M14.389 35L17.1329 28.941H17.9898L20.7423 35H19.8335L17.3839 29.4257H17.7302L15.2806 35H14.389ZM15.5576 33.4852L15.7913 32.7928H19.2016L19.4526 33.4852H15.5576ZM23.9573 35.0519C23.5764 35.0519 23.2273 34.9654 22.9099 34.7923C22.5983 34.6134 22.3473 34.3508 22.1569 34.0046C21.9722 33.6584 21.8799 33.2256 21.8799 32.7062C21.8799 32.1869 21.9693 31.7541 22.1482 31.4079C22.3329 31.0616 22.581 30.802 22.8926 30.6289C23.21 30.4557 23.5649 30.3692 23.9573 30.3692C24.4074 30.3692 24.8055 30.4673 25.1518 30.6635C25.498 30.8597 25.7721 31.1338 25.9741 31.4858C26.176 31.832 26.277 32.2388 26.277 32.7062C26.277 33.1736 26.176 33.5833 25.9741 33.9353C25.7721 34.2873 25.498 34.5614 25.1518 34.7576C24.8055 34.9538 24.4074 35.0519 23.9573 35.0519ZM21.525 36.6792V30.4125H22.3213V31.6502L22.2694 32.7149L22.356 33.7795V36.6792H21.525ZM23.888 34.3249C24.1823 34.3249 24.4449 34.2585 24.6757 34.1258C24.9123 33.993 25.097 33.8055 25.2297 33.5631C25.3682 33.315 25.4374 33.0294 25.4374 32.7062C25.4374 32.3773 25.3682 32.0946 25.2297 31.858C25.097 31.6156 24.9123 31.4281 24.6757 31.2953C24.4449 31.1626 24.1823 31.0963 23.888 31.0963C23.5995 31.0963 23.337 31.1626 23.1004 31.2953C22.8695 31.4281 22.6849 31.6156 22.5464 31.858C22.4137 32.0946 22.3473 32.3773 22.3473 32.7062C22.3473 33.0294 22.4137 33.315 22.5464 33.5631C22.6849 33.8055 22.8695 33.993 23.1004 34.1258C23.337 34.2585 23.5995 34.3249 23.888 34.3249ZM27.4251 35V30.4125H28.2214V31.6589L28.1435 31.3473C28.2705 31.0299 28.484 30.7875 28.7841 30.6202C29.0841 30.4529 29.4534 30.3692 29.892 30.3692V31.1742C29.8574 31.1684 29.8228 31.1655 29.7881 31.1655C29.7593 31.1655 29.7304 31.1655 29.7016 31.1655C29.2573 31.1655 28.9053 31.2982 28.6456 31.5637C28.3859 31.8291 28.2561 32.2129 28.2561 32.7149V35H27.4251ZM30.9162 35V30.4125H31.7471V35H30.9162ZM31.3316 29.5296C31.1701 29.5296 31.0345 29.4776 30.9248 29.3738C30.8209 29.2699 30.769 29.143 30.769 28.9929C30.769 28.8371 30.8209 28.7073 30.9248 28.6034C31.0345 28.4995 31.1701 28.4476 31.3316 28.4476C31.4932 28.4476 31.6259 28.4995 31.7298 28.6034C31.8394 28.7015 31.8943 28.8256 31.8943 28.9756C31.8943 29.1314 31.8423 29.2641 31.7385 29.3738C31.6346 29.4776 31.499 29.5296 31.3316 29.5296ZM33.3337 35V28.5774H34.1646V35H33.3337ZM37.6083 35V34.4114L40.0752 32.0311C40.2945 31.8233 40.4561 31.6416 40.5599 31.4858C40.6696 31.3242 40.7417 31.177 40.7763 31.0443C40.8167 30.9058 40.8369 30.7731 40.8369 30.6462C40.8369 30.3346 40.7273 30.0893 40.508 29.9104C40.2887 29.7315 39.9685 29.6421 39.5472 29.6421C39.2241 29.6421 38.9327 29.6969 38.673 29.8066C38.4133 29.9104 38.1883 30.0749 37.9978 30.2999L37.4092 29.7892C37.6401 29.495 37.9488 29.2699 38.3354 29.1141C38.7278 28.9525 39.1577 28.8717 39.6251 28.8717C40.0464 28.8717 40.4128 28.941 40.7244 29.0795C41.036 29.2122 41.2755 29.4055 41.4428 29.6594C41.6159 29.9133 41.7025 30.2134 41.7025 30.5596C41.7025 30.7558 41.6765 30.9491 41.6246 31.1395C41.5727 31.33 41.4746 31.5319 41.3303 31.7454C41.186 31.959 40.9783 32.1984 40.7071 32.4639L38.5085 34.5845L38.3008 34.247H41.9622V35H37.6083ZM45.1409 35.0692C44.6677 35.0692 44.2436 34.9481 43.8685 34.7057C43.4992 34.4633 43.2049 34.1113 42.9856 33.6497C42.7721 33.1881 42.6654 32.6283 42.6654 31.9705C42.6654 31.3127 42.7721 30.7529 42.9856 30.2913C43.2049 29.8296 43.4992 29.4776 43.8685 29.2353C44.2436 28.9929 44.6677 28.8717 45.1409 28.8717C45.6083 28.8717 46.0296 28.9929 46.4047 29.2353C46.7797 29.4776 47.074 29.8296 47.2875 30.2913C47.501 30.7529 47.6078 31.3127 47.6078 31.9705C47.6078 32.6283 47.501 33.1881 47.2875 33.6497C47.074 34.1113 46.7797 34.4633 46.4047 34.7057C46.0296 34.9481 45.6083 35.0692 45.1409 35.0692ZM45.1409 34.2989C45.4583 34.2989 45.7353 34.2123 45.9719 34.0392C46.2142 33.8661 46.4018 33.6064 46.5345 33.2602C46.673 32.914 46.7422 32.4841 46.7422 31.9705C46.7422 31.4569 46.673 31.027 46.5345 30.6808C46.4018 30.3346 46.2142 30.0749 45.9719 29.9018C45.7353 29.7287 45.4583 29.6421 45.1409 29.6421C44.8235 29.6421 44.5437 29.7287 44.3013 29.9018C44.0589 30.0749 43.8685 30.3346 43.73 30.6808C43.5973 31.027 43.5309 31.4569 43.5309 31.9705C43.5309 32.4841 43.5973 32.914 43.73 33.2602C43.8685 33.6064 44.0589 33.8661 44.3013 34.0392C44.5437 34.2123 44.8235 34.2989 45.1409 34.2989ZM48.3435 35V34.4114L50.8104 32.0311C51.0296 31.8233 51.1912 31.6416 51.2951 31.4858C51.4047 31.3242 51.4768 31.177 51.5115 31.0443C51.5519 30.9058 51.5721 30.7731 51.5721 30.6462C51.5721 30.3346 51.4624 30.0893 51.2431 29.9104C51.0239 29.7315 50.7036 29.6421 50.2824 29.6421C49.9592 29.6421 49.6678 29.6969 49.4081 29.8066C49.1485 29.9104 48.9234 30.0749 48.733 30.2999L48.1444 29.7892C48.3752 29.495 48.6839 29.2699 49.0705 29.1141C49.4629 28.9525 49.8928 28.8717 50.3603 28.8717C50.7815 28.8717 51.1479 28.941 51.4595 29.0795C51.7711 29.2122 52.0106 29.4055 52.178 29.6594C52.3511 29.9133 52.4376 30.2134 52.4376 30.5596C52.4376 30.7558 52.4117 30.9491 52.3597 31.1395C52.3078 31.33 52.2097 31.5319 52.0654 31.7454C51.9212 31.959 51.7134 32.1984 51.4422 32.4639L49.2437 34.5845L49.0359 34.247H52.6973V35H48.3435ZM55.2613 35.0692C54.8343 35.0692 54.4188 35.0029 54.0149 34.8702C53.6167 34.7374 53.2907 34.5586 53.0368 34.3335L53.4349 33.6497C53.6369 33.8401 53.8995 33.9959 54.2226 34.1171C54.5458 34.2383 54.892 34.2989 55.2613 34.2989C55.7114 34.2989 56.0605 34.2037 56.3086 34.0132C56.5625 33.817 56.6895 33.5545 56.6895 33.2256C56.6895 32.9082 56.5683 32.6543 56.326 32.4639C56.0894 32.2677 55.7114 32.1696 55.192 32.1696H54.7073V31.5637L56.5077 29.3478L56.6289 29.694H53.3138V28.941H57.3127V29.5296L55.521 31.7368L55.0709 31.4685H55.3565C56.0894 31.4685 56.6376 31.6329 57.0011 31.9618C57.3704 32.2908 57.5551 32.7091 57.5551 33.2169C57.5551 33.5574 57.4714 33.869 57.304 34.1517C57.1367 34.4345 56.8828 34.6595 56.5423 34.8269C56.2077 34.9885 55.7806 35.0692 55.2613 35.0692Z"
          fill="black"
        />
        <path
          d="M383.741 35V28.941H384.451L387.169 33.5199H386.788L389.471 28.941H390.181L390.189 35H389.358L389.35 30.248H389.549L387.16 34.2643H386.762L384.355 30.248H384.572V35H383.741ZM394.734 35V34.0306L394.691 33.8488V32.1955C394.691 31.8435 394.587 31.5723 394.379 31.3819C394.177 31.1857 393.872 31.0876 393.462 31.0876C393.191 31.0876 392.925 31.1338 392.666 31.2261C392.406 31.3127 392.187 31.431 392.008 31.581L391.662 30.9578C391.898 30.7673 392.181 30.6231 392.51 30.525C392.844 30.4211 393.194 30.3692 393.557 30.3692C394.186 30.3692 394.671 30.5221 395.011 30.8279C395.352 31.1338 395.522 31.6012 395.522 32.2302V35H394.734ZM393.228 35.0519C392.888 35.0519 392.588 34.9942 392.328 34.8788C392.074 34.7634 391.878 34.6047 391.739 34.4028C391.601 34.195 391.532 33.9613 391.532 33.7016C391.532 33.4535 391.589 33.2285 391.705 33.0265C391.826 32.8245 392.019 32.663 392.285 32.5418C392.556 32.4206 392.919 32.36 393.375 32.36H394.83V32.9572H393.41C392.995 32.9572 392.715 33.0265 392.57 33.165C392.426 33.3035 392.354 33.4708 392.354 33.667C392.354 33.8921 392.443 34.0738 392.622 34.2123C392.801 34.345 393.049 34.4114 393.367 34.4114C393.678 34.4114 393.95 34.3422 394.18 34.2037C394.417 34.0652 394.587 33.8632 394.691 33.5978L394.855 34.169C394.746 34.4403 394.553 34.6567 394.276 34.8182C393.999 34.974 393.649 35.0519 393.228 35.0519ZM397.06 35V30.4125H397.856V31.6589L397.778 31.3473C397.905 31.0299 398.119 30.7875 398.419 30.6202C398.719 30.4529 399.088 30.3692 399.527 30.3692V31.1742C399.492 31.1684 399.457 31.1655 399.423 31.1655C399.394 31.1655 399.365 31.1655 399.336 31.1655C398.892 31.1655 398.54 31.2982 398.28 31.5637C398.021 31.8291 397.891 32.2129 397.891 32.7149V35H397.06ZM402.467 35V34.4114L404.934 32.0311C405.153 31.8233 405.315 31.6416 405.419 31.4858C405.528 31.3242 405.6 31.177 405.635 31.0443C405.675 30.9058 405.696 30.7731 405.696 30.6462C405.696 30.3346 405.586 30.0893 405.367 29.9104C405.147 29.7315 404.827 29.6421 404.406 29.6421C404.083 29.6421 403.791 29.6969 403.532 29.8066C403.272 29.9104 403.047 30.0749 402.857 30.2999L402.268 29.7892C402.499 29.495 402.808 29.2699 403.194 29.1141C403.587 28.9525 404.016 28.8717 404.484 28.8717C404.905 28.8717 405.272 28.941 405.583 29.0795C405.895 29.2122 406.134 29.4055 406.302 29.6594C406.475 29.9133 406.561 30.2134 406.561 30.5596C406.561 30.7558 406.535 30.9491 406.483 31.1395C406.431 31.33 406.333 31.5319 406.189 31.7454C406.045 31.959 405.837 32.1984 405.566 32.4639L403.367 34.5845L403.16 34.247H406.821V35H402.467ZM410 35.0692C409.526 35.0692 409.102 34.9481 408.727 34.7057C408.358 34.4633 408.064 34.1113 407.844 33.6497C407.631 33.1881 407.524 32.6283 407.524 31.9705C407.524 31.3127 407.631 30.7529 407.844 30.2913C408.064 29.8296 408.358 29.4776 408.727 29.2353C409.102 28.9929 409.526 28.8717 410 28.8717C410.467 28.8717 410.888 28.9929 411.263 29.2353C411.638 29.4776 411.933 29.8296 412.146 30.2913C412.36 30.7529 412.467 31.3127 412.467 31.9705C412.467 32.6283 412.36 33.1881 412.146 33.6497C411.933 34.1113 411.638 34.4633 411.263 34.7057C410.888 34.9481 410.467 35.0692 410 35.0692ZM410 34.2989C410.317 34.2989 410.594 34.2123 410.831 34.0392C411.073 33.8661 411.261 33.6064 411.393 33.2602C411.532 32.914 411.601 32.4841 411.601 31.9705C411.601 31.4569 411.532 31.027 411.393 30.6808C411.261 30.3346 411.073 30.0749 410.831 29.9018C410.594 29.7287 410.317 29.6421 410 29.6421C409.682 29.6421 409.402 29.7287 409.16 29.9018C408.918 30.0749 408.727 30.3346 408.589 30.6808C408.456 31.027 408.39 31.4569 408.39 31.9705C408.39 32.4841 408.456 32.914 408.589 33.2602C408.727 33.6064 408.918 33.8661 409.16 34.0392C409.402 34.2123 409.682 34.2989 410 34.2989ZM413.202 35V34.4114L415.669 32.0311C415.888 31.8233 416.05 31.6416 416.154 31.4858C416.263 31.3242 416.336 31.177 416.37 31.0443C416.411 30.9058 416.431 30.7731 416.431 30.6462C416.431 30.3346 416.321 30.0893 416.102 29.9104C415.883 29.7315 415.562 29.6421 415.141 29.6421C414.818 29.6421 414.527 29.6969 414.267 29.8066C414.007 29.9104 413.782 30.0749 413.592 30.2999L413.003 29.7892C413.234 29.495 413.543 29.2699 413.929 29.1141C414.322 28.9525 414.752 28.8717 415.219 28.8717C415.64 28.8717 416.007 28.941 416.318 29.0795C416.63 29.2122 416.869 29.4055 417.037 29.6594C417.21 29.9133 417.296 30.2134 417.296 30.5596C417.296 30.7558 417.27 30.9491 417.218 31.1395C417.167 31.33 417.068 31.5319 416.924 31.7454C416.78 31.959 416.572 32.1984 416.301 32.4639L414.102 34.5845L413.895 34.247H417.556V35H413.202ZM420.224 35.0692C419.797 35.0692 419.381 35.0029 418.977 34.8702C418.579 34.7374 418.253 34.5586 417.999 34.3335L418.398 33.6497C418.6 33.8401 418.862 33.9959 419.185 34.1171C419.508 34.2383 419.852 34.2989 420.215 34.2989C420.677 34.2989 421.032 34.2008 421.28 34.0046C421.528 33.8084 421.652 33.5458 421.652 33.2169C421.652 32.9919 421.597 32.7957 421.488 32.6283C421.378 32.461 421.188 32.334 420.916 32.2475C420.651 32.1551 420.284 32.109 419.817 32.109H418.441L418.761 28.941H422.18V29.694H419.081L419.531 29.2699L419.28 31.7714L418.83 31.3559H419.999C420.605 31.3559 421.092 31.4338 421.462 31.5896C421.831 31.7454 422.099 31.9618 422.267 32.2388C422.434 32.51 422.518 32.8245 422.518 33.1823C422.518 33.5285 422.434 33.8459 422.267 34.1344C422.099 34.4172 421.845 34.6451 421.505 34.8182C421.17 34.9856 420.743 35.0692 420.224 35.0692Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2420_4045"
            x1="219.5"
            y1="0"
            x2="219.505"
            y2="15.5475"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D645D" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const GaugeChart = () => {
  return (
    <div className="relative w-full flex items-end justify-center mb-2 -mt-4">
      <svg viewBox="0 0 200 110" className="w-full overflow-visible">
        {/* Segment 1: 180 to 138 (Green) */}
        <path
          d="M 20 100 A 80 80 0 0 1 40.54 46.48"
          fill="none"
          stroke="#3A8177"
          strokeWidth="20"
          strokeLinecap="butt"
        />
        {/* Segment 2: 134 to 92 (Green) */}
        <path
          d="M 44.43 42.47 A 80 80 0 0 1 97.21 20.06"
          fill="none"
          stroke="#3A8177"
          strokeWidth="20"
          strokeLinecap="butt"
        />
        {/* Segment 3: 88 to 46 (Green) */}
        <path
          d="M 102.79 20.06 A 80 80 0 0 1 155.57 42.47"
          fill="none"
          stroke="#3A8177"
          strokeWidth="20"
          strokeLinecap="butt"
        />
        {/* Segment 4: 42 to 0 (Gray) */}
        <path
          d="M 159.46 46.48 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="20"
          strokeLinecap="butt"
        />

        {/* Marker - Location Pin at ~22 deg */}
        <g transform="translate(172, 68) rotate(70)">
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            x="-7.5"
            y="-20"
          >
            <path
              d="M7.36897 11.778C9.73766 11.778 11.6579 9.85778 11.6579 7.48909C11.6579 5.1204 9.73766 3.2002 7.36897 3.2002C5.00028 3.2002 3.08008 5.1204 3.08008 7.48909C3.08008 9.85778 5.00028 11.778 7.36897 11.778Z"
              fill="#3A8177"
            />
            <path
              d="M6.81334 19.7502C6.8758 19.8282 6.95498 19.8911 7.04503 19.9343C7.13507 19.9776 7.23368 20 7.33356 20C7.43345 20 7.53205 19.9776 7.6221 19.9343C7.71214 19.8911 7.79132 19.8282 7.85379 19.7502C7.87068 19.7294 9.55957 17.6169 11.224 15.08C13.5085 11.5987 14.6667 8.99112 14.6667 7.33334C14.6667 3.28889 11.3778 0 7.33334 0C3.28889 0 0 3.28889 0 7.33334C0 8.99245 1.15822 11.6 3.44267 15.08C5.10667 17.6169 6.79556 19.7294 6.81334 19.7502ZM7.33245 3.55556C8.07963 3.55556 8.81002 3.77712 9.43128 4.19223C10.0525 4.60734 10.5367 5.19735 10.8227 5.88765C11.1086 6.57795 11.1834 7.33753 11.0376 8.07035C10.8919 8.80317 10.5321 9.4763 10.0037 10.0046C9.47542 10.533 8.80228 10.8928 8.06946 11.0385C7.33664 11.1843 6.57706 11.1095 5.88676 10.8236C5.19646 10.5376 4.60645 10.0534 4.19134 9.43216C3.77623 8.81091 3.55467 8.08052 3.55467 7.33334C3.55585 6.33177 3.95424 5.37156 4.66246 4.66334C5.37067 3.95513 6.33088 3.55674 7.33245 3.55556Z"
              fill="#3A8177"
            />
          </svg>
        </g>
      </svg>

      <div className="absolute bottom-4 text-center">
        <div className="text-xl font-bold text-[#3A8177]">
          90 <span className="text-[10px] text-gray-500">mg/dl</span>
        </div>
        <div className="text-[10px] text-gray-900 font-medium">
          Healthy range
        </div>
      </div>
    </div>
  );
};

const HealthVitalsBento = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="flex items-center gap-4 w-full justify-center opacity-80 mb-6">
          <div className="h-[3px] w-24 bg-[linear-gradient(90deg,rgba(65,116,111,0.89)_0%,rgba(117,227,214,0.89)_100%)] opacity-50 rounded-full" />
          <div className="shrink-0 px-6 py-1.5 rounded-full border border-[#3A8177]/30 text-[#3A8177] text-sm font-medium bg-[#ECF6F5]">
            Track your health
          </div>
          <div className="h-[3px] w-24 bg-[linear-gradient(90deg,rgba(132,255,239,0.89)_0%,rgba(45,100,93,0.89)_100%)] opacity-50 rounded-full" />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent mb-4">
          Track Key Health Vitals and watch Trends
        </h2>
        <p className="text-gray-600 text-lg">
          Get Information and manage health with personal insights
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 relative">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900">
              Key Health Markers Overview
            </h3>
            <p className="text-gray-500 mt-1">
              Track your core health indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* 1. LDL Cholestrol */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow lg:col-span-2">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-lg">
                  LDL Cholestrol
                </h4>
                <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Borderline
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                135{" "}
                <span className="text-sm font-normal text-gray-500">mg/dl</span>
              </div>
              <div className="text-xs text-gray-400">
                Healthy range 50-100 mg/dl
              </div>

              <RangeBar markerPosition={55} />

              <div className="mt-6">
                <WaveChartPrimary />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 2. HbA1c */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow relative lg:col-span-2">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-lg">HbA1c</h4>
                <span className="bg-[#EA580C] text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Needs attention
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5.9 %</div>
              <div className="text-xs text-gray-400">Healthy range 40-50%</div>

              <RangeBar
                status="risk"
                markerPosition={85}
                colors={["bg-[#4DA599]", "bg-[#F59E0B]", "bg-[#EA580C]"]}
              />

              <div className="mt-6">
                <WaveChartPrimary />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 3. Fasting Glucose */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow lg:col-span-2">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900 text-lg">
                  Fasting Glucose
                </h4>
                <span className="bg-[#35615E] text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Normal
                </span>
              </div>

              <div className="text-4xl font-bold text-gray-900 mb-1 mt-2">
                90{" "}
                <span className="text-xl font-normal text-gray-500">mg/dl</span>
              </div>
              <div className="text-xs text-gray-400 mb-4">
                Healthy range 70-100 mg/dl
              </div>

              <GaugeChart />

              <div className="mt-2">
                <WaveChartSecondary />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 4. Creatinine + eGFR */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-gray-900 text-lg">
                  Creatinine + eGFR
                </h4>
                <span className="bg-[#35615E] text-white text-[10px] px-2 py-1 rounded-full font-medium">
                  Normal
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Creatinine
                    </span>
                    <span className="text-xs text-gray-400">
                      &lt; 1.3 mg/dl
                    </span>
                  </div>
                  <RangeBar markerPosition={30} />
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      eGFR
                    </span>
                    <span className="text-xs text-gray-400">
                      &gt; 92 ml/min
                    </span>
                  </div>
                  <RangeBar markerPosition={75} />
                </div>
              </div>

              <div className="mt-4">
                <ChartBackground />
                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>April 2023</span>
                  <span>Mar 2025</span>
                </div>
              </div>
            </div>

            {/* 5. Info Card */}
            <div
              className="rounded-3xl p-8 shadow-xl text-white flex flex-col justify-center relative lg:col-span-3"
              style={{
                background: "linear-gradient(180deg, #2D645D 0%, #388B7F 100%)",
              }}
            >
              {/* Triangle Pointing Up */}
              <div className="absolute -top-3 left-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#2D645D] hidden lg:block"></div>

              <p className="text- leading-relaxed opacity-90">
                <span className="font-bold text-white">
                  HbA1c is a blood test
                </span>{" "}
                that shows your average blood sugar over the last 2&ndash;3
                months. A value below{" "}
                <span className="font-bold text-white">5.7%</span> is normal,{" "}
                <span className="font-bold text-white">5.7&ndash;6.4%</span>{" "}
                means higher risk (prediabetes), and{" "}
                <span className="font-bold text-white">6.5%</span> or above
                usually means diabetes. Higher HbA1c means blood sugar has been
                high for a long time, which can damage the heart, kidneys, eyes,
                and nerves. Keeping it in range helps prevent future health
                problems&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthVitalsBento;
