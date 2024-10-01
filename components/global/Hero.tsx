import Image from "next/image";
import React from "react";
import { Gutter } from "./Gutter";
import { client } from "@/app/lib/sanity";
import { BlogArticle } from "@/app/lib/interface";
import moment from "moment";
import Link from "next/link";
//fetch data
async function fecthData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc)[2...4]{
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

async function Hero({}: Props) {
  const data: BlogArticle[] = await fecthData();
  return (
    <div className="flex my-10 md:flex-row flex-col  gap-10">
      {data.map((item) => (
        <Link
          href={`/blog/${item.slug}`}
          key={item.title}
          className="w-full flex flex-col gap-6 "
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={800}
            height={800}
            className="xl:h-[600px] h-[400px] object-cover w-full rounded-md"
          />
          <div className="flex flex-col gap-2 pb-2 px-2">
            <p className="text-sm xl:text-base text-time">
              {moment(item._createdAt).format("MMM Do YY")}
            </p>
            <h1 className="text-lg xl:text-3xl font-bold hover:underline hover:underline-offset-2 duration-150">
              {item.title}
            </h1>
            <p className="text-base xl:text-lg font-medium">
              par Mechbich Ahmde
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Hero;
