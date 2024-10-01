import React from "react";
import ArticleCard from "./Card";
import { ChevronRight, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { client } from "@/app/lib/sanity";
import { BlogArticle } from "@/app/lib/interface";

//fetch data
async function fecthData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc)[0...3]{
  title,
  description,
  _createdAt,
  "slug":slug.current,
  "imageUrl": image.asset->url
}`;

  const data = await client.fetch(query);
  return data;
}

type Props = {};

export const revalidate = 60;

async function LatestArticle({}: Props) {
  //getting data
  const data: BlogArticle[] = await fecthData();

  return (
    <section className="my-10 mb-2 flex flex-col gap-8">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl xl:text-4xl font-semibold">Dernier article</h1>
        <Link
          href={"/blog"}
          className="text-sm xl:text-base flex items-center  hover:text-hover duration-100"
        >
          Voir tout
          <ChevronRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
        {data.map((item) => (
          <ArticleCard
            key={item.title}
            title={item.title}
            description={item.description}
            slug={item.slug}
            image={item.imageUrl}
            createdAt={item._createdAt}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestArticle;
