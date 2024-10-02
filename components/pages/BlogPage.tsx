"use client";

import { useEffect, useState } from "react";
import ArticleCard from "@/components/global/Card";
import { Gutter } from "@/components/global/Gutter";
import { BlogArticle, CategorySchema } from "@/app/lib/interface";
import PaginationSection from "@/components/global/Pagination";
import { HR } from "@/components/ui/hr";
import CategoryFilter from "@/components/global/CategoryFilter";

interface BlogPageProps {
  initialData: BlogArticle[];
  totalPosts: number;
  categories: CategorySchema[];
  initialCategory: string;
  skipNum: number;
  pageNum: number;
}

const BlogPage = ({
  initialData,
  totalPosts,
  categories,
  initialCategory,
  skipNum,
  pageNum,
}: BlogPageProps) => {
  const [data, setData] = useState<BlogArticle[]>(initialData);
  const [postsNum, setPostsNum] = useState<number>(totalPosts);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("filter", selectedCategory);
    window.history.pushState({}, "", url.toString()); // Update URL without reload

    // Add fetching logic if category or page changes
    const fetchData = async () => {
      const res = await fetch(
        `/api/blogData?page=${pageNum}&category=${selectedCategory}`
      );
      const result = await res.json();
      setData(result.data);
      setPostsNum(result.totalPosts);
    };

    fetchData();
  }, [selectedCategory, pageNum]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  console.log(data);
  return (
    <Gutter>
      {/* Hero Section */}
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

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {data.map((item) => (
          <ArticleCard
            key={item.slug}
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

export default BlogPage;
