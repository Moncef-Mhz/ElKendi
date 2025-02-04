"use client";

import { useEffect, useRef, useState } from "react";
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

  const prevCategory = useRef(selectedCategory);
  const prevPageNum = useRef(pageNum);

  useEffect(() => {
    if (
      prevCategory.current !== selectedCategory ||
      prevPageNum.current !== pageNum
    ) {
      prevCategory.current = selectedCategory;
      prevPageNum.current = pageNum;

      const fetchData = async () => {
        const res = await fetch(
          `/api/blogData?page=${pageNum}&category=${selectedCategory}`
        );
        const result = await res.json();
        setData(result.data);
        setPostsNum(result.totalPosts);
      };

      fetchData();
    }
  }, [selectedCategory, pageNum]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Gutter>
      {/* Hero Section */}
      <div className="w-full my-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl text-center xl:text-right xl:text-4xl font-semibold">
          Nos Activités et Présentations
        </h1>
        <p className="text-base text-hover text-center xl:text-right">
          Suivez le blog du Comité de Participation de la pharmacie SPA El Kendi
          pour des articles, des astuces et des informations sur le bien-être au
          quotidien.
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
