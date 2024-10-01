import React from "react";
import { client } from "@/app/lib/sanity";
import ArticleCard from "@/components/global/Card";
import { Gutter } from "@/components/global/Gutter";
import { BlogArticle, CategorySchema } from "@/app/lib/interface";
import PaginationSection from "@/components/global/Pagination";
import { HR } from "@/components/ui/hr";
// import { Category } from "@/components/global/Category";

let skipNum = 9;

//fetch data
async function fecthData(lastPageNum: number = 0) {
  const query = `*[_type == 'blog'] | order(_createdAt desc) [${lastPageNum}...${
    lastPageNum + skipNum
  }] {
  title,
  description,
  createdAt,
  "slug":slug.current,
  "imageUrl": image.asset->url
}`;

  const data = await client.fetch(query, { lastId: lastPageNum });
  return data;
}

const fetchCategory = async () => {
  const query = `*[_type == 'category'] | order(title asc){
  title
}
`;
  const data = await client.fetch(query);
  return data;
};

export const revalidate = 60;

//Count total posts
const getTotalPosts = async () => {
  const query = `count(*[_type=='blog'])`;
  return client.fetch(query);
};

const Blog = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const pageNum = Number(searchParams?.page ?? 0);
  const data: BlogArticle[] = await fecthData(pageNum);
  const postsNum = await getTotalPosts();
  const Categories: CategorySchema[] = await fetchCategory();
  return (
    <Gutter>
      {/* Hero */}
      <div className="w-full my-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl text-center xl:text-right xl:text-4xl font-semibold">
          Découvrez nos conseils santé
        </h1>
        <p className="text-base text-hover text-center xl:text-right">
          Suivez le blog d'Elkendi Pharmacy pour des articles, astuces, et
          informations sur votre bien-être au quotidien.
        </p>
      </div>
      <HR />
      {/* Map throught Category */}
      {/* <div className="my-10 flex flex-row flex-wrap gap-4">
        {Categories.map((item) => (
          <Category title={item.title} key={item.title} />
        ))}
      </div> */}
      {/* Map throught data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
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

      {/* Pagination */}
      <div>
        <PaginationSection maxPage={postsNum} skipNum={skipNum} />
      </div>
    </Gutter>
  );
};

export default Blog;
