import Image from "next/image";

type MdxImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  loading: "lazy" | "eager";
};

export default function MdxImage({
  src,
  width,
  height,
  alt,
  loading,
  caption,
}: MdxImageProps) {
  return (
    <figure className="my-8 flex flex-col gap-2 items-center justify-center">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        className="rounded-lg object-cover object-center aspect-video"
      />
      <figcaption className="text-gray-light text-sm leading-tight">
        {caption}
      </figcaption>
    </figure>
  );
}
