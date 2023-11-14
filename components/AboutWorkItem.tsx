import Image, { StaticImageData } from "next/image";

interface AboutWorkItemProps {
  imgSrc: string | StaticImageData;
  jobTitle: string;
  companyName: string;
  duration: string;
}

export default function AboutWorkItem({
  imgSrc,
  jobTitle,
  companyName,
  duration,
}: AboutWorkItemProps) {
  return (
    <li>
      <figure className="flex gap-4 w-full py-2">
        <Image
          src={imgSrc}
          width={100}
          height={100}
          alt={jobTitle}
          className="rounded-full object-cover object-center w-[50px] h-[50px]"
        />
        <figcaption className="flex flex-grow items-start justify-between">
          <div className="flex flex-col">
            <h3>{jobTitle}</h3>
            <p className="text-gray-light">{companyName}</p>
          </div>
          <p className="text-gray-light">{duration}</p>
        </figcaption>
      </figure>
    </li>
  );
}
