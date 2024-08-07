import { type Icon } from '../types';

export const DOC: Icon = props => {
  const size = props.size ?? 24;
  const sizeAsNum = typeof size === 'number' ? size : Number(size.replace(/\w+/g, ''));
  return (
    <svg
      width={sizeAsNum}
      height={sizeAsNum}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M5.76006 2.39454C5.76006 1.31642 6.63405 0.44243 7.71217 0.44243H19.2564C19.3734 0.44243 19.4866 0.484441 19.5753 0.560826L27.103 7.04212C27.148 7.0809 27.1739 7.13738 27.1739 7.19681V21.6056C27.1739 22.6837 26.2999 23.5577 25.2218 23.5577H7.71216C6.63404 23.5577 5.76006 22.6837 5.76006 21.6056V2.39454Z"
        fill="white"
        stroke="#D0D5DD"
        strokeWidth="0.900974"
      />
      <path
        d="M19.2568 0.292236V4.7943C19.2568 6.12122 20.3325 7.1969 21.6594 7.1969H27.2762"
        stroke="#D0D5DD"
        strokeWidth="0.900974"
      />
      <rect x="2.43457" y="10.4011" width="17.6039" height="10.4026" rx="1.2013" fill="#155EEF" />
      <path
        d="M4.87435 13.3497H6.55016C6.83046 13.3497 7.10076 13.3937 7.36104 13.4818C7.62132 13.5659 7.85157 13.6961 8.05178 13.8723C8.252 14.0485 8.41217 14.2707 8.5323 14.539C8.65243 14.8033 8.7125 15.1156 8.7125 15.476C8.7125 15.8404 8.64242 16.1567 8.50227 16.425C8.36612 16.6893 8.18793 16.9095 7.96769 17.0857C7.75146 17.2579 7.5092 17.3881 7.24091 17.4762C6.97662 17.5602 6.71634 17.6023 6.46006 17.6023H4.87435V13.3497ZM6.19578 16.9176C6.43203 16.9176 6.65427 16.8915 6.8625 16.8395C7.07473 16.7834 7.25893 16.6993 7.4151 16.5872C7.57126 16.4711 7.6934 16.3229 7.78149 16.1427C7.87359 15.9585 7.91964 15.7363 7.91964 15.476C7.91964 15.2197 7.8796 14.9995 7.79951 14.8153C7.71942 14.6311 7.6073 14.4829 7.46315 14.3708C7.323 14.2547 7.15481 14.1706 6.9586 14.1185C6.76639 14.0625 6.55416 14.0344 6.32191 14.0344H5.63117V16.9176H6.19578ZM9.20376 15.494C9.20376 15.1536 9.25982 14.8453 9.37195 14.569C9.48407 14.2887 9.63823 14.0505 9.83445 13.8542C10.0347 13.658 10.2709 13.5079 10.5432 13.4038C10.8195 13.2956 11.1218 13.2416 11.4502 13.2416C11.7826 13.2376 12.0869 13.2876 12.3632 13.3917C12.6395 13.4919 12.8777 13.64 13.078 13.8362C13.2782 14.0324 13.4343 14.2687 13.5465 14.545C13.6586 14.8213 13.7146 15.1296 13.7146 15.47C13.7146 15.8023 13.6586 16.1047 13.5465 16.377C13.4343 16.6493 13.2782 16.8835 13.078 17.0797C12.8777 17.2759 12.6395 17.4301 12.3632 17.5422C12.0869 17.6503 11.7826 17.7064 11.4502 17.7104C11.1218 17.7104 10.8195 17.6584 10.5432 17.5542C10.2709 17.4461 10.0347 17.296 9.83445 17.1038C9.63823 16.9075 9.48407 16.6733 9.37195 16.401C9.25982 16.1287 9.20376 15.8264 9.20376 15.494ZM9.99662 15.446C9.99662 15.6742 10.0307 15.8844 10.0987 16.0766C10.1708 16.2689 10.2709 16.435 10.3991 16.5752C10.5272 16.7153 10.6794 16.8255 10.8555 16.9055C11.0357 16.9856 11.236 17.0257 11.4562 17.0257C11.6764 17.0257 11.8767 16.9856 12.0568 16.9055C12.237 16.8255 12.3912 16.7153 12.5193 16.5752C12.6475 16.435 12.7456 16.2689 12.8137 16.0766C12.8857 15.8844 12.9218 15.6742 12.9218 15.446C12.9218 15.2337 12.8857 15.0355 12.8137 14.8513C12.7456 14.6671 12.6475 14.5069 12.5193 14.3708C12.3912 14.2306 12.237 14.1225 12.0568 14.0465C11.8767 13.9664 11.6764 13.9263 11.4562 13.9263C11.236 13.9263 11.0357 13.9664 10.8555 14.0465C10.6794 14.1225 10.5272 14.2306 10.3991 14.3708C10.2709 14.5069 10.1708 14.6671 10.0987 14.8513C10.0307 15.0355 9.99662 15.2337 9.99662 15.446ZM17.3546 14.3468C17.1985 14.1786 17.0463 14.0665 16.8981 14.0104C16.754 13.9544 16.6078 13.9263 16.4597 13.9263C16.2394 13.9263 16.0392 13.9664 15.859 14.0465C15.6828 14.1225 15.5306 14.2306 15.4025 14.3708C15.2744 14.5069 15.1743 14.6671 15.1022 14.8513C15.0341 15.0355 15.0001 15.2337 15.0001 15.446C15.0001 15.6742 15.0341 15.8844 15.1022 16.0766C15.1743 16.2689 15.2744 16.435 15.4025 16.5752C15.5306 16.7153 15.6828 16.8255 15.859 16.9055C16.0392 16.9856 16.2394 17.0257 16.4597 17.0257C16.6318 17.0257 16.798 16.9856 16.9582 16.9055C17.1224 16.8215 17.2745 16.6893 17.4147 16.5091L18.0394 16.9536C17.8472 17.2179 17.6129 17.4101 17.3366 17.5302C17.0603 17.6503 16.766 17.7104 16.4536 17.7104C16.1253 17.7104 15.823 17.6584 15.5467 17.5542C15.2744 17.4461 15.0381 17.296 14.8379 17.1038C14.6417 16.9075 14.4875 16.6733 14.3754 16.401C14.2633 16.1287 14.2072 15.8264 14.2072 15.494C14.2072 15.1536 14.2633 14.8453 14.3754 14.569C14.4875 14.2887 14.6417 14.0505 14.8379 13.8542C15.0381 13.658 15.2744 13.5079 15.5467 13.4038C15.823 13.2956 16.1253 13.2416 16.4536 13.2416C16.742 13.2416 17.0082 13.2936 17.2525 13.3977C17.5008 13.4979 17.731 13.67 17.9433 13.9143L17.3546 14.3468Z"
        fill="white"
      />
    </svg>
  );
};