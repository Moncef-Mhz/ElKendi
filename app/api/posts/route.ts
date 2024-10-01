import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/app/lib/sanity";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.query;

  const categoryFilter = category
    ? `&& "${category}" in categories[]->title`
    : "";
  const query = `*[_type == 'blog' ${categoryFilter}] | order(_createdAt desc) {
    title,
    description,
    createdAt,
    "slug":slug.current,
    "imageUrl": image.asset->url
  }`;

  const posts = await client.fetch(query);
  res.status(200).json(posts);
}
