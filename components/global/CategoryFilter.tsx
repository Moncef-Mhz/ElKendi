// CategoryFilter.tsx
"use client";

interface CategoryProps {
  categories: { title: string }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryProps) => {
  return (
    <div className="my-10 flex flex-row flex-wrap gap-4">
      <button
        onClick={() => onCategoryChange("all")}
        className={`btn ${selectedCategory === "all" ? "btn-active" : ""}`}
      >
        All
      </button>
      {categories?.map((item) => (
        <button
          key={item.title}
          onClick={() => onCategoryChange(item.title)}
          className={`btn ${selectedCategory === item.title ? "btn-active" : ""}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
