import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex md:hidden items-center justify-center gap-1 text-gray-light dark:text-gray-dark"
          aria-label="Menu de navigation"
        >
          Menu
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[150px] flex flex-col gap-1 bg-bg-light dark:bg-black text-gray-light dark:text-gray-dark text-sm p-1 rounded-md z-[1000] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={10}
          align="end"
        >
          <Link
            href={"/about"}
            className="hover:bg-gray-light/10 transition-colors rounded-sm"
          >
            <DropdownMenu.Item className="leading-none rounded-[3px] flex items-center h-[25px] p-4 relative select-none outline-none">
              About
            </DropdownMenu.Item>
          </Link>
          <Link
            href={"/blog"}
            className="hover:bg-gray-light/10 transition-colors rounded-sm"
          >
            <DropdownMenu.Item className="leading-none rounded-[3px] flex items-center h-[25px] p-4 relative select-none outline-none">
              Blog
            </DropdownMenu.Item>
          </Link>
          <Link
            href={"/projects"}
            className="hover:bg-gray-light/10 transition-colors rounded-sm"
          >
            <DropdownMenu.Item className="leading-none rounded-[3px] flex items-center h-[25px] p-4 relative select-none outline-none">
              Projects
            </DropdownMenu.Item>
          </Link>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
