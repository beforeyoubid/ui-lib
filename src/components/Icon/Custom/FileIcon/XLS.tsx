import { type Icon } from '../types';

export const XLS: Icon = props => {
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
        d="M5.59404 2.39454C5.59404 1.31642 6.46803 0.44243 7.54615 0.44243H19.0903C19.2074 0.44243 19.3206 0.484441 19.4093 0.560826L26.937 7.04212C26.982 7.0809 27.0079 7.13738 27.0079 7.19681V21.6056C27.0079 22.6837 26.1339 23.5577 25.0558 23.5577H7.54615C6.46803 23.5577 5.59404 22.6837 5.59404 21.6056V2.39454Z"
        fill="white"
        stroke="#D0D5DD"
        strokeWidth="0.900974"
      />
      <path
        d="M19.0908 0.292236V4.7943C19.0908 6.12122 20.1665 7.1969 21.4934 7.1969H27.1102"
        stroke="#D0D5DD"
        strokeWidth="0.900974"
      />
      <rect x="2.72266" y="10.4011" width="14.6039" height="10.4026" rx="1.2013" fill="#099250" />
      <path
        d="M6.20025 15.3801L4.78272 13.3499H5.73775L6.74083 14.9236L7.7319 13.3499H8.6509L7.25739 15.3801L8.80106 17.6025H7.84002L6.71681 15.8066L5.5996 17.6025H4.68661L6.20025 15.3801ZM9.27299 13.3499H10.0298V16.9178H11.8378V17.6025H9.27299V13.3499ZM14.4719 14.2629C14.3919 14.1468 14.2837 14.0627 14.1476 14.0107C14.0154 13.9546 13.8753 13.9266 13.7271 13.9266C13.639 13.9266 13.5529 13.9366 13.4689 13.9566C13.3888 13.9766 13.3147 14.0087 13.2466 14.0527C13.1825 14.0967 13.1305 14.1548 13.0904 14.2269C13.0504 14.295 13.0304 14.3771 13.0304 14.4732C13.0304 14.6173 13.0804 14.7274 13.1805 14.8035C13.2807 14.8796 13.4048 14.9457 13.5529 15.0017C13.7011 15.0578 13.8633 15.1118 14.0395 15.1639C14.2157 15.216 14.3778 15.288 14.526 15.3801C14.6742 15.4722 14.7983 15.5944 14.8984 15.7465C14.9985 15.8987 15.0486 16.1009 15.0486 16.3532C15.0486 16.5814 15.0065 16.7817 14.9224 16.9538C14.8383 17.122 14.7242 17.2622 14.5801 17.3743C14.4399 17.4864 14.2757 17.5705 14.0875 17.6266C13.8993 17.6826 13.7011 17.7107 13.4929 17.7107C13.2286 17.7107 12.9743 17.6666 12.7301 17.5785C12.4858 17.4904 12.2756 17.3423 12.0994 17.134L12.67 16.5814C12.7621 16.7216 12.8822 16.8317 13.0304 16.9118C13.1825 16.9879 13.3427 17.0259 13.5109 17.0259C13.599 17.0259 13.6871 17.0139 13.7752 16.9899C13.8633 16.9659 13.9434 16.9298 14.0154 16.8818C14.0875 16.8337 14.1456 16.7736 14.1896 16.7016C14.2337 16.6255 14.2557 16.5394 14.2557 16.4433C14.2557 16.2871 14.2057 16.167 14.1055 16.0829C14.0054 15.9988 13.8813 15.9287 13.7331 15.8727C13.585 15.8126 13.4228 15.7565 13.2466 15.7045C13.0704 15.6524 12.9083 15.5824 12.7601 15.4943C12.6119 15.4022 12.4878 15.282 12.3877 15.1339C12.2876 14.9817 12.2375 14.7795 12.2375 14.5272C12.2375 14.307 12.2816 14.1168 12.3697 13.9566C12.4618 13.7964 12.5799 13.6643 12.7241 13.5602C12.8722 13.4521 13.0404 13.372 13.2286 13.3199C13.4168 13.2679 13.609 13.2418 13.8052 13.2418C14.0295 13.2418 14.2457 13.2759 14.4539 13.3439C14.6662 13.412 14.8564 13.5241 15.0245 13.6803L14.4719 14.2629Z"
        fill="white"
      />
    </svg>
  );
};
