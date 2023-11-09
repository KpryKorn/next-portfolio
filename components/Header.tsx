"use client";

import Link from "next/link";

export default function Header() {
  const routes = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Moto",
      path: "/moto",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between py-4">
        <div>
          <Link href={"/"}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32.5049"
                height="32"
                rx="7"
                className="fill-black-light dark:fill-white-dark"
              />
              <path
                d="M16.5978 23.14C14.9578 23.14 13.6111 22.7533 12.5578 21.98C11.5045 21.1933 10.9378 20.0733 10.8578 18.62H15.0378C15.0778 19.1133 15.2245 19.4733 15.4778 19.7C15.7311 19.9267 16.0578 20.04 16.4578 20.04C16.8178 20.04 17.1111 19.9533 17.3378 19.78C17.5778 19.5933 17.6978 19.34 17.6978 19.02C17.6978 18.6067 17.5045 18.2867 17.1178 18.06C16.7311 17.8333 16.1045 17.58 15.2378 17.3C14.3178 16.9933 13.5711 16.7 12.9978 16.42C12.4378 16.1267 11.9445 15.7067 11.5178 15.16C11.1045 14.6 10.8978 13.8733 10.8978 12.98C10.8978 12.0733 11.1245 11.3 11.5778 10.66C12.0311 10.0067 12.6578 9.51333 13.4578 9.18C14.2578 8.84667 15.1645 8.68 16.1778 8.68C17.8178 8.68 19.1245 9.06667 20.0978 9.84C21.0845 10.6 21.6111 11.6733 21.6778 13.06H17.4178C17.4045 12.6333 17.2711 12.3133 17.0178 12.1C16.7778 11.8867 16.4645 11.78 16.0778 11.78C15.7845 11.78 15.5445 11.8667 15.3578 12.04C15.1711 12.2133 15.0778 12.46 15.0778 12.78C15.0778 13.0467 15.1778 13.28 15.3778 13.48C15.5911 13.6667 15.8511 13.8333 16.1578 13.98C16.4645 14.1133 16.9178 14.2867 17.5178 14.5C18.4111 14.8067 19.1445 15.1133 19.7178 15.42C20.3045 15.7133 20.8045 16.1333 21.2178 16.68C21.6445 17.2133 21.8578 17.8933 21.8578 18.72C21.8578 19.56 21.6445 20.3133 21.2178 20.98C20.8045 21.6467 20.1978 22.1733 19.3978 22.56C18.6111 22.9467 17.6778 23.14 16.5978 23.14Z"
                className="fill-bg-light dark:fill-black-light"
              />
            </svg>
          </Link>
        </div>
        <ul className="flex items-center gap-8 text-gray-light dark:text-gray-dark text-sm">
          {routes.map((route) => {
            return (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className="hover:text-black-light transition-colors"
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-gray-light dark:stroke-gray-dark"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v1" />
            <path d="M12 20v1" />
            <path d="M3 12h1" />
            <path d="M20 12h1" />
            <path d="m18.364 5.636-.707.707" />
            <path d="m6.343 17.657-.707.707" />
            <path d="m5.636 5.636.707.707" />
            <path d="m17.657 17.657.707.707" />
          </svg>
        </span>
      </nav>
    </header>
  );
}
