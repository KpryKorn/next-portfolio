import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  text: string;
}

export default function ExternalLink({ href, text }: ExternalLinkProps) {
  return (
    <span className="flex items-center gap-2 text-gray-light hover:opacity-100 hover:text-black-light transition-colors">
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
      <Link href={href}>{text}</Link>
    </span>
  );
}
