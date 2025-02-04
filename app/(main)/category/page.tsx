import { BlogArticle, CategorySchema } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { Gutter } from "@/components/global/Gutter";
import category from "@/sanity/schemaTypes/category";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  searchParams: { query?: string };
}

const fetchData = async (filterQuery: string) => {
  const query = `*[_type == 'blog' && references(*[_type == 'category' && lower(title) == '${filterQuery}']._id)]{
  title,
  description,
  _createdAt,
  "slug":slug.current,
  "imageUrl": image.asset->url,
  "categoryTitle":category[]->title}`;

  const data = await client.fetch(query);
  return data;
};

const fetchCategories = async () => {
  const query = `*[_type=='category']{
    title,
    "imageUrl": image.asset->url,
    }`;
  const data = await client.fetch(query);
  return data;
};

const Page = async ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  //Fetch
  const Articles: BlogArticle[] = await fetchData(query ?? "");
  const Categories: CategorySchema[] = await fetchCategories();

  return (
    <Gutter>
      <div className="flex gap-10 py-10 flex-col w-full">
        <div className="flex items-center w-full justify-center gap-4 ">
          {Categories.map((item, index) => (
            <Link
              href={`/category?query=${item.title.toLowerCase()}`}
              key={index}
              className={`rounded-full border px-4 py-2 capitalize ${query === item.title.toLowerCase() && "bg-foreground text-background border border-foreground"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {Articles.map((item, index) => (
          <Link
            href={`/blog/${item.slug}`}
            key={index}
            className="w-full p-4 group gap-6 border-b flex justify-start"
          >
            <div className="h-[150px] rounded-md overflow-hidden w-[250px]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex gap-2 flex-col justify-between items-start">
              <div className="flex flex-col gap-2">
                <h1 className="font-medium group-hover:underline text-lg">
                  {item.title}
                </h1>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <button className="hover:text-muted-foreground">
                Lire la suite {"->"}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </Gutter>
  );
};

export default Page;
