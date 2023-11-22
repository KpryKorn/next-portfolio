import { getMDXComponent } from "next-contentlayer/hooks";

import MdxImage from "./MdxImage";

const components = {
  Image: MdxImage,
};

export default function MdxWrapper({ code }: { code: string }) {
  const MDXContent = getMDXComponent(code, { components });

  return <MDXContent components={components} />;
}
