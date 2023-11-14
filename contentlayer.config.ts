import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `${post._raw.sourceFileName.replace(/\.md$/, "")}`,
    },
  },
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Post] });
