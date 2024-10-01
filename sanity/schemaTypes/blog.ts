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
      title: "Title of blog article",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of blog article",
      options: {
        source: "title",
      },
    },
    {
      name: "categories",
      title: "Categories",
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
      title: "Image of blog article",
    },
    {
      name: "description",
      type: "text",
      title: "Description of blog article",
    },
    {
      name: "content",
      type: "array",
      title: "Content of blog article",
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
