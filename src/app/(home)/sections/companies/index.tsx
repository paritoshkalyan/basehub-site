import Image from "next/image";
import {cx} from "class-variance-authority";

import {Section} from "@/common/layout";

import s from "./companies.module.scss";

const companies = [
  {
    url: "",
    image: {
      url: "",
      alt: "",
      width: 100,
      height: 60,
    },
  },
  {
    url: "",
    image: {
      url: "",
      alt: "",
      width: 100,
      height: 60,
    },
  },
  {
    url: "",
    image: {
      url: "",
      alt: "",
      width: 100,
      height: 60,
    },
  },
  {
    url: "",
    image: {
      url: "",
      alt: "",
      width: 100,
      height: 60,
    },
  },
  {
    url: "",
    image: {
      url: "",
      alt: "",
      width: 100,
      height: 60,
    },
  },
  {
    url: "",
    image: {
      url: "",
      alt: "",
      width: 100,
      height: 60,
    },
  },
];

export function Companies() {
  return (
    <Section>
      <h2 className="text-center text-dark-text-tertiary opacity-50 ">
        Join 4,000 companies already growing
      </h2>
      <div className="relative max-w-full ">
        <div className="bg-transparent absolute left-0 top-0 h-full w-[30vw] bg-gradient-to-r from-surface-primary dark:from-dark-surface-primary lg:hidden" />
        <div className="bg-transparent absolute right-0 top-0 h-full w-[30vw] bg-gradient-to-l from-surface-primary dark:from-dark-surface-primary lg:hidden" />
        <div className={cx("flex items-center justify-between gap-6 overflow-x-auto", s.scrollbar)}>
          {companies.map((company) => (
            <figure key={company.url} className="p-4">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 129 24"
                width="129"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.7926 21.145C39.952 21.145 38.3251 20.7835 36.9118 20.0604C35.4984 19.3209 34.4056 18.2773 33.6332 16.9298C32.8608 15.5822 32.4746 13.9963 32.4746 12.1722C32.4746 10.348 32.8608 8.76213 33.6332 7.41455C34.4056 6.05054 35.4984 5.00699 36.9118 4.2839C38.3251 3.54438 39.952 3.17462 41.7926 3.17462C43.0416 3.17462 44.1426 3.30609 45.0958 3.56903C46.0654 3.81554 46.9528 4.20995 47.7581 4.75227V8.32663C47.035 7.73502 46.2051 7.30773 45.2684 7.04479C44.3481 6.76542 43.2963 6.62573 42.1131 6.62573C41.012 6.62573 40.0177 6.8558 39.1303 7.31595C38.2593 7.75967 37.5691 8.40059 37.0597 9.23871C36.5502 10.0768 36.2955 11.0547 36.2955 12.1722C36.2955 13.3061 36.5256 14.3003 36.9857 15.1549C37.4623 15.993 38.1279 16.6422 38.9824 17.1023C39.837 17.5625 40.823 17.7925 41.9405 17.7925C42.9594 17.7925 43.8468 17.6118 44.6028 17.2502V13.9224H41.8173V11.1615H48.2265V19.4688C46.5995 20.5863 44.4549 21.145 41.7926 21.145Z"
                  fill="#787882"
                />
                <path
                  d="M49.0917 8.9429H52.6908V10.6438C53.1673 10.0686 53.8329 9.63313 54.6875 9.33732C55.542 9.02507 56.5116 8.86895 57.5963 8.86895V11.7038C56.4623 11.7038 55.4599 11.8763 54.5889 12.2215C53.7343 12.5666 53.1427 13.0925 52.814 13.7991V20.7753H49.0917V8.9429Z"
                  fill="#787882"
                />
                <path
                  d="M64.7494 21.145C62.4815 21.145 60.6985 20.6027 59.4002 19.5181C58.1019 18.417 57.4528 16.8805 57.4528 14.9084C57.4528 12.9528 58.028 11.408 59.1783 10.274C60.3451 9.14011 62.005 8.57314 64.1578 8.57314C65.5711 8.57314 66.7708 8.83608 67.7568 9.36197C68.7428 9.88785 69.4906 10.6192 70 11.5559C70.5095 12.4762 70.7642 13.5197 70.7642 14.6865V16.1902H61.0025C61.2654 17.7022 62.6788 18.4581 65.2424 18.4581C65.9984 18.4581 66.779 18.3924 67.5843 18.2609C68.3895 18.1294 69.088 17.9487 69.6796 17.7186V20.3316C69.1044 20.5781 68.3649 20.7753 67.461 20.9232C66.5571 21.0711 65.6533 21.145 64.7494 21.145ZM67.2391 13.7745C67.1898 12.9856 66.894 12.3776 66.3517 11.9503C65.8094 11.5066 65.0617 11.2847 64.1085 11.2847C63.1718 11.2847 62.4322 11.5066 61.8899 11.9503C61.3476 12.394 61.0518 13.0021 61.0025 13.7745H67.2391Z"
                  fill="#787882"
                />
                <path
                  d="M78.394 21.145C76.1261 21.145 74.3431 20.6027 73.0448 19.5181C71.7465 18.417 71.0974 16.8805 71.0974 14.9084C71.0974 12.9528 71.6726 11.408 72.8229 10.274C73.9897 9.14011 75.6496 8.57314 77.8024 8.57314C79.2157 8.57314 80.4154 8.83608 81.4014 9.36197C82.3874 9.88785 83.1352 10.6192 83.6446 11.5559C84.1541 12.4762 84.4088 13.5197 84.4088 14.6865V16.1902H74.6471C74.91 17.7022 76.3234 18.4581 78.887 18.4581C79.643 18.4581 80.4236 18.3924 81.2289 18.2609C82.0341 18.1294 82.7326 17.9487 83.3242 17.7186V20.3316C82.749 20.5781 82.0095 20.7753 81.1056 20.9232C80.2017 21.0711 79.2979 21.145 78.394 21.145ZM80.8837 13.7745C80.8344 12.9856 80.5386 12.3776 79.9963 11.9503C79.454 11.5066 78.7063 11.2847 77.7531 11.2847C76.8164 11.2847 76.0768 11.5066 75.5345 11.9503C74.9922 12.394 74.6964 13.0021 74.6471 13.7745H80.8837Z"
                  fill="#787882"
                />
                <path
                  d="M85.235 8.9429H88.834V10.3973C89.3763 9.78925 90.0172 9.33732 90.7568 9.04151C91.5127 8.72926 92.3015 8.57314 93.1232 8.57314C94.7338 8.57314 95.9334 9.00864 96.7223 9.87963C97.5275 10.7342 97.9301 11.8928 97.9301 13.3554V20.7753H94.2079V13.7745C94.2079 12.2461 93.5012 11.4819 92.0879 11.4819C91.4634 11.4819 90.88 11.6381 90.3377 11.9503C89.7954 12.2461 89.3352 12.6898 88.9573 13.2814V20.7753H85.235V8.9429Z"
                  fill="#787882"
                />
                <path
                  d="M101.214 7.11875C100.639 7.11875 100.154 6.92976 99.7601 6.55178C99.3657 6.1738 99.1685 5.69722 99.1685 5.12203C99.1685 4.56328 99.3657 4.09492 99.7601 3.71694C100.154 3.32252 100.639 3.12532 101.214 3.12532C101.79 3.12532 102.274 3.32252 102.669 3.71694C103.063 4.09492 103.26 4.56328 103.26 5.12203C103.26 5.69722 103.063 6.1738 102.669 6.55178C102.274 6.92976 101.79 7.11875 101.214 7.11875ZM99.341 8.9429H103.088V20.7753H99.341V8.9429Z"
                  fill="#787882"
                />
                <path
                  d="M109.436 21.145C108.549 21.145 107.596 21.0464 106.577 20.8492C105.574 20.6685 104.786 20.4055 104.21 20.0604V17.1516C104.868 17.546 105.656 17.8665 106.577 18.113C107.497 18.3595 108.352 18.4828 109.14 18.4828C109.814 18.4828 110.307 18.4252 110.62 18.3102C110.932 18.1952 111.088 17.9815 111.088 17.6693C111.088 17.4228 110.997 17.2256 110.817 17.0777C110.636 16.9133 110.357 16.7736 109.979 16.6586C109.617 16.5271 109.009 16.3381 108.154 16.0916C107.152 15.7958 106.363 15.5 105.788 15.2042C105.229 14.892 104.802 14.5058 104.506 14.0456C104.227 13.5855 104.087 12.9938 104.087 12.2708C104.087 11.0382 104.572 10.1179 105.541 9.50987C106.527 8.88538 107.859 8.57314 109.535 8.57314C110.357 8.57314 111.203 8.66353 112.074 8.8443C112.961 9.00864 113.643 9.2305 114.12 9.50987V12.3447C113.643 12.0325 113.019 11.7777 112.246 11.5805C111.491 11.3833 110.751 11.2847 110.028 11.2847C109.354 11.2847 108.828 11.3505 108.45 11.4819C108.089 11.6134 107.908 11.8599 107.908 12.2215C107.908 12.5337 108.08 12.772 108.426 12.9363C108.787 13.1007 109.453 13.3061 110.422 13.5526L110.915 13.6759C111.951 13.9552 112.756 14.2675 113.331 14.6126C113.906 14.9413 114.309 15.3439 114.539 15.8205C114.786 16.2806 114.909 16.864 114.909 17.5707C114.909 18.6553 114.44 19.5263 113.504 20.1837C112.567 20.8246 111.211 21.145 109.436 21.145Z"
                  fill="#787882"
                />
                <path
                  d="M115.769 2.55835H119.491V10.2987C120.05 9.72351 120.683 9.29623 121.39 9.01686C122.096 8.72105 122.852 8.57314 123.657 8.57314C125.268 8.57314 126.468 9.00864 127.256 9.87963C128.062 10.7342 128.464 11.8928 128.464 13.3554V20.7753H124.742V13.7745C124.742 12.2461 124.035 11.4819 122.622 11.4819C121.998 11.4819 121.414 11.6381 120.872 11.9503C120.33 12.2461 119.869 12.6898 119.491 13.2814V20.7753H115.769V2.55835Z"
                  fill="#787882"
                />
                <path
                  clipRule="evenodd"
                  d="M19.769 6.04614C19.769 9.17742 17.2306 11.7158 14.0994 11.7158C10.9681 11.7158 8.42969 9.17742 8.42969 6.04614C8.42969 2.91487 10.9681 0.376465 14.0994 0.376465C17.2306 0.376465 19.769 2.91487 19.769 6.04614ZM0.91035 11.3038C7.08732 10.8874 12.4708 15.5121 12.9722 21.7021C13.0242 22.3436 13.0217 22.9769 12.9686 23.5975C6.79163 24.0138 1.40819 19.3891 0.906764 13.1991C0.854803 12.5577 0.857288 11.9244 0.91035 11.3038ZM16.9643 23.3808C23.1543 22.8794 27.779 17.496 27.3627 11.319C26.7421 11.266 26.1088 11.2635 25.4674 11.3155C19.2773 11.8169 14.6527 17.2003 15.069 23.3773C15.6896 23.4303 16.3229 23.4328 16.9643 23.3808Z"
                  fill="#787882"
                  fillRule="evenodd"
                />
              </svg>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
