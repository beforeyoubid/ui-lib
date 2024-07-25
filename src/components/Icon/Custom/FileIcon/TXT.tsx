import { type Icon } from '../types';

export const TXT: Icon = props => {
  const size = props.size ?? 24;
  const sizeAsNum = typeof size === 'number' ? size : Number(size.replace(/\w+/g, ''));
  return (
    <svg
      width={sizeAsNum}
      height={sizeAsNum}
      viewBox="0 0 29 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M6.17705 2.39454C6.17705 1.31642 7.05104 0.44243 8.12916 0.44243H19.6733C19.7904 0.44243 19.9036 0.484441 19.9923 0.560826L27.52 7.04212C27.565 7.0809 27.5909 7.13738 27.5909 7.19681V21.6056C27.5909 22.6837 26.7169 23.5577 25.6388 23.5577H8.12916C7.05104 23.5577 6.17705 22.6837 6.17705 21.6056V2.39454Z"
        fill="white"
        stroke="#D0D5DD"
        strokeWidth="0.900974"
      />
      <path
        d="M19.6738 0.292236V4.7943C19.6738 6.12122 20.7495 7.1969 22.0764 7.1969H27.6932"
        stroke="#D0D5DD"
        strokeWidth="0.900974"
      />
      <rect x="1.44531" y="10.8037" width="15.6039" height="10.4026" rx="1.2013" fill="#344054" />
      <path
        d="M5.08755 14.437H3.78414V13.7523H7.14778V14.437H5.84437V18.0049H5.08755V14.437ZM8.70477 15.7825L7.28724 13.7523H8.24227L9.24536 15.326L10.2364 13.7523H11.1554L9.76192 15.7825L11.3056 18.0049H10.3445L9.22133 16.2089L8.10412 18.0049H7.19114L8.70477 15.7825ZM12.6485 14.437H11.345V13.7523H14.7087V14.437H13.4053V18.0049H12.6485V14.437Z"
        fill="white"
      />
    </svg>
  );
};
