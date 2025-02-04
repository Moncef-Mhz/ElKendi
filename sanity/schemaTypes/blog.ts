// import { title } from "process";

import { ImageIcon, TagIcon } from "lucide-react";
import { title } from "process";
// import { title } from "process";

export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre de l'article",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug de l'article",
      options: {
        source: "title",
      },
    },
    {
      name: "category",
      title: "Category de l'article",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "image",
      type: "image",
      title: "Image de l'article",
    },
    {
      name: "description",
      type: "text",
      title: "Description de l'article",
    },
    {
      name: "content",
      type: "array",
      title: "Content de l'article",
      of: [
        {
          title: "Block",
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
