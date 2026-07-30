import * as React from "react";

export function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17-.11.653-.31.998-.616 1.244-.307.246-.737.407-1.55.494-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092-.813-.087-1.243-.248-1.55-.494-.306-.246-.506-.591-.616-1.243a5.233 5.233 0 0 1-.022-.151c-.04-.291-.06-.437.066-.78.127-.344.181-.397.291-.505.326-.32.772-.556 1.285-.667.29-.062.67-.068 1.753-.068Z"
      />
      <path
        fill="currentColor"
        d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115.81.11 1.238.31 1.544.618.305.308.504.74.613 1.557.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505A1.273 1.273 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552.109-.816.308-1.249.613-1.557Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z"
      />
    </svg>
  );
}

export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" {...props} viewBox="0 0 24 24">
      <g
        id="SVGRepo_iconCarrier"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        {" "}
        <g id="Navigation / House_01">
          {" "}
          <path
            id="Vector"
            d="M20 17v-5.548c0-.534 0-.801-.065-1.05a2 2 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104-.37-.11-.764-.11-1.135 0-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452V17c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C5.602 20 6.068 20 7 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C10 18.398 10 17.932 10 17v-1a2 2 0 1 1 4 0v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C15.602 20 16.068 20 17 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C20 18.398 20 17.932 20 17"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export function OpenBookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" {...props} viewBox="0 0 24 24">
      {" "}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 10.4V20m0-9.6c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C8.96 4 7.84 4 5.6 4h-1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 4.76 3 5.04 3 5.6v10.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 18 4.04 18 4.6 18h2.947c.54 0 .81 0 1.071.047q.349.061.674.204c.243.106.468.255.917.555L12 20m0-9.6c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C15.04 4 16.16 4 18.4 4h1c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 4.76 21 5.04 21 5.6v10.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 18 19.96 18 19.4 18h-2.947c-.54 0-.81 0-1.071.047q-.349.061-.674.204c-.243.106-.468.255-.917.555L12 20"
      />{" "}
    </svg>
  );
}

export function LoanIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" {...props} viewBox="0 0 24 24">
      <g
        id="SVGRepo_iconCarrier"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        {" "}
        <path d="M6 22h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2" />{" "}
        <path d="M13 2.5V9h6" /> <path d="M8 17h7" /> <path d="M8 13h7" />{" "}
        <path d="M8 9h1" />{" "}
      </g>
    </svg>
  );
}

export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" {...props} viewBox="0 0 24 24">
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g fill="currentColor" clipPath="url(#clip0_1251_98416)">
          {" "}
          <path
            fillRule="evenodd"
            d="M9 0a5.5 5.5 0 1 0 0 11A5.5 5.5 0 0 0 9 0M5.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
            clipRule="evenodd"
          />{" "}
          <path d="M15.5 0a1 1 0 1 0 0 2 3.5 3.5 0 1 1 0 7 1 1 0 1 0 0 2 5.5 5.5 0 1 0 0-11" />{" "}
          <path d="M19.084 14.016A1 1 0 0 1 20.4 13.5 6 6 0 0 1 24 19v2a1 1 0 1 1-2 0v-2a4 4 0 0 0-2.4-3.668 1 1 0 0 1-.516-1.316" />{" "}
          <path d="M6 13a6 6 0 0 0-6 6v2a1 1 0 1 0 2 0v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2a1 1 0 1 0 2 0v-2a6 6 0 0 0-6-6z" />{" "}
        </g>{" "}
        <defs>
          <clipPath id="clip0_1251_98416">
            {" "}
            <path fill="#fff" d="M0 0h24v24H0z" />{" "}
          </clipPath>
        </defs>{" "}
      </g>
    </svg>
  );
}

export function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" {...props} viewBox="0 0 24 24">
      <g id="SVGRepo_bgCarrier" fill="currentColor" strokeWidth="0">
        {" "}
        <path
          fillRule="evenodd"
          d="M12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M8.5 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
          clipRule="evenodd"
        />{" "}
        <path d="M8 14a6 6 0 0 0-6 6v2a1 1 0 1 0 2 0v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2a1 1 0 1 0 2 0v-2a6 6 0 0 0-6-6z" />{" "}
      </g>
    </svg>
  );
}

export function LoupeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg id="svg8" fill="currentColor" {...props} viewBox="0 0 8.467 8.467">
      <g id="SVGRepo_iconCarrier">
        <path
          id="layer1"
          d="M11.996 1.004c-6.063 0-11 4.935-11 10.998s4.937 11 11 11a10.94 10.94 0 0 0 7.035-2.555l10.26 10.262c.945.945 2.363-.473 1.418-1.418L20.447 19.029a10.95 10.95 0 0 0 2.547-7.027c0-6.063-4.935-10.998-10.998-10.998m0 2a8.98 8.98 0 0 1 8.998 8.998c0 4.982-4.016 9-8.998 9s-9-4.018-9-9a8.983 8.983 0 0 1 9-8.998"
          transform="scale(.26458)"
        />
      </g>
    </svg>
  );
}

export function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        id="SVGRepo_iconCarrier"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        {" "}
        <path d="M12 5c1.433 0 2.807.506 3.82 1.406S17.4 8.527 17.4 9.8c0 1.97.446 3.444 1.023 4.528.738 1.385 1.106 2.078 1.086 2.236-.024.185-.055.236-.206.343-.13.093-.778.093-2.072.093H6.771c-1.295 0-1.942 0-2.072-.093-.152-.107-.182-.158-.206-.343-.02-.158.348-.85 1.086-2.236C6.156 13.244 6.6 11.769 6.6 9.8c0-1.273.569-2.494 1.582-3.394S10.569 5 12 5m0 0V3M9.356 20a4 4 0 0 0 2.65 1.002A4 4 0 0 0 14.655 20" />{" "}
      </g>
    </svg>
  );
}
