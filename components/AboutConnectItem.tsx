import Link from "next/link";

interface AboutConnectProps {
  icon: any;
  title: string;
  href: string;
}

export default function AboutConnectItem({
  icon,
  title,
  href,
}: AboutConnectProps) {
  return (
    <Link href={href} target="blank">
      <div className="col-span-1 flex justify-between items-center border border-gray-300 dark:border-gray-light rounded-lg p-4 group-hover:opacity-60 hover:!opacity-100 transition-all">
        <div className="flex gap-4 items-center">
          {icon}
          {title}
        </div>
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
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </div>
    </Link>
  );
}
