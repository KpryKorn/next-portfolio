import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `${post._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Post] });
