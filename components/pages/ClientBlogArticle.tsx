"use client";

import { useState, useEffect } from "react";
import { fullBlog } from "@/app/lib/interface";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { Gutter } from "../global/Gutter";

export default function ClientBlogArticle({ data }: { data: fullBlog }) {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?.url) return null;
        return (
          <div className="my-4">
            <Image
              src={value.asset.url}
              alt={value.alt || "Blog image"}
              width={800}
              height={450}
              className="rounded-lg border object-cover"
            />
          </div>
        );
      },
    },
  };

  return (
    <Gutter className="mt-10 xl:w-[80%] lg:w-[90%] flex flex-col items-center justify-center gap-6">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center leading-normal">
          {data.title}
        </h1>
        <p className="text-center text-time text-base">{data.description}</p>
      </div>

      <Image
        src={data.imageUrl}
        alt={data.title}
        width={800}
        height={800}
        priority
        className=" w-full object-cover max-h-[700px] h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]  rounded-md border border-[#cccccc30]"
      />
      <div className="mt-4  text-left prose-img:object-cover prose-img:max-h-[500px] w-full prose prose-p:m-0 prose-headings:mb-4 prose-text  md:prose-lg dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} components={components} />
      </div>
    </Gutter>
  );
}
