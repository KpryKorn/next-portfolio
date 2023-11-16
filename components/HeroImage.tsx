import Image from "next/image";
import profilePic from "@/assets/pdp-linkedin-carree-1.jpeg";

export default function HeroImage() {
  return (
    <div
      className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <figure>
        <Image
          src={profilePic}
          alt="Photo de profil de Sacha Roffini"
          width={85}
          height={85}
          loading="eager"
          className="rounded-full brightness-125"
        />
      </figure>
      <div className="flex flex-col gap-2 text-gray-light">
        <div className="flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                className="fill-gray-light"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <p>Tours, France</p>
        </div>
        <div className="flex items-center gap-2">
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
            >
              <path
                d="M22 10v6M2 10l10-5 10 5-10 5z"
                className="fill-gray-light"
              />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </span>
          <p>Comp. Sci. student</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              className="fill-current"
            >
              <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
            </svg>
          </span>
          <p>TypeScript Enjoyer</p>
        </div>
      </div>
    </div>
  );
}
