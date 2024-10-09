import { SVGProps } from 'react';

const InviteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.698 2.532a3.761 3.761 0 1 0 0 7.523 3.761 3.761 0 0 0 0-7.523Zm-1.622 2.14a2.293 2.293 0 1 1 3.243 3.243 2.293 2.293 0 0 1-3.243-3.243Zm3.279 7.777a4.223 4.223 0 0 0-5.877 3.882.734.734 0 0 1-1.468-.001 5.69 5.69 0 0 1 7.92-5.23.734.734 0 0 1-.575 1.35Zm1.865.249a5.137 5.137 0 1 1 7.265 7.265 5.137 5.137 0 0 1-7.265-7.265Zm3.633-.037a3.669 3.669 0 1 0 0 7.338 3.669 3.669 0 0 0 0-7.338Zm0 .734c.405 0 .734.328.734.734v1.467h1.468a.734.734 0 0 1 0 1.468h-1.468v1.468a.734.734 0 0 1-1.468 0v-1.468h-1.468a.734.734 0 0 1 0-1.468h1.468V14.13c0-.406.329-.734.734-.734Z"
      fill="#fff"
    />
  </svg>
);

export default InviteIcon;