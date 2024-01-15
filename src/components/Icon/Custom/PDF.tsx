import { Icon } from './types';

export const PDF: Icon = props => {
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
        d="M4.6502 2.4C4.6502 1.32304 5.52324 0.45 6.6002 0.45H16.2002C16.2729 0.45 16.3427 0.478896 16.3941 0.53033L22.8699 7.00607C22.9213 7.0575 22.9502 7.12726 22.9502 7.2V21.6C22.9502 22.677 22.0772 23.55 21.0002 23.55H6.60019C5.52324 23.55 4.6502 22.677 4.6502 21.6V2.4Z"
        fill="white"
        stroke="#D0D5DD"
        strokeWidth="0.9"
      />
      <path
        d="M16.2002 0.300049V4.80005C16.2002 6.12553 17.2747 7.20005 18.6002 7.20005H23.1002"
        stroke="#D0D5DD"
        strokeWidth="0.9"
      />
      <rect x="0.599609" y="10.8999" width="15.6" height="9.4" rx="1.2" fill="#D92D20" />
      <path
        d="M2.89879 18.0999V13.7362H4.62038C4.95135 13.7362 5.23331 13.7994 5.46626 13.9258C5.69922 14.0508 5.87678 14.2249 5.99893 14.4479C6.12251 14.6695 6.1843 14.9251 6.1843 15.2149C6.1843 15.5047 6.1218 15.7604 5.9968 15.982C5.8718 16.2035 5.6907 16.3761 5.45348 16.4997C5.21768 16.6233 4.93217 16.6851 4.59695 16.6851H3.49964V15.9457H4.4478C4.62536 15.9457 4.77166 15.9152 4.88672 15.8541C5.0032 15.7916 5.08984 15.7057 5.14666 15.5963C5.2049 15.4855 5.23402 15.3584 5.23402 15.2149C5.23402 15.07 5.2049 14.9436 5.14666 14.8356C5.08984 14.7263 5.0032 14.6418 4.88672 14.5821C4.77024 14.521 4.62251 14.4905 4.44354 14.4905H3.82138V18.0999H2.89879ZM8.33043 18.0999H6.78356V13.7362H8.34322C8.78214 13.7362 9.15998 13.8236 9.47674 13.9983C9.7935 14.1716 10.0371 14.4209 10.2076 14.7462C10.3794 15.0714 10.4654 15.4606 10.4654 15.9138C10.4654 16.3683 10.3794 16.7589 10.2076 17.0856C10.0371 17.4124 9.79208 17.6631 9.47248 17.8378C9.1543 18.0125 8.77362 18.0999 8.33043 18.0999ZM7.70614 17.3094H8.29208C8.56481 17.3094 8.79421 17.2611 8.98029 17.1645C9.16779 17.0665 9.30842 16.9152 9.40217 16.7106C9.49734 16.5047 9.54492 16.2391 9.54492 15.9138C9.54492 15.5913 9.49734 15.3278 9.40217 15.1233C9.30842 14.9187 9.1685 14.7682 8.98242 14.6716C8.79634 14.575 8.56694 14.5267 8.29421 14.5267H7.70614V17.3094ZM11.1488 18.0999V13.7362H14.038V14.4969H12.0714V15.5366H13.8462V16.2973H12.0714V18.0999H11.1488Z"
        fill="white"
      />
    </svg>
  );
};
