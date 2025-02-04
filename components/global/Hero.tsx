import Image from "next/image";
import { client } from "@/app/lib/sanity";
import { CategorySchema } from "@/app/lib/interface";
import Link from "next/link";

//fetch data
async function fecthData() {
  const query = `*[_type == 'category' && title != 'All']{
  title,
  "imageUrl": image.asset->url
}`;

  const data = await client.fetch(query);
  return data;
}

type Props = {};

export const revalidate = 60;

async function Hero({}: Props) {
  const categories: CategorySchema[] = await fecthData();

  return (
    <div className="my-10 grid  grid-cols-1 md:grid-cols-2 w-full gap-10">
      {categories.map((item, index) => (
        <Link
          href={`/category?query=${item.title.toLowerCase()}`}
          key={index}
          className="w-full relative group rounded-md cursor-pointer overflow-hidden flex items-center h-[200px] xl:h-[300px] justify-center"
        >
          {item.imageUrl && (
            <Image
              src={item?.imageUrl}
              alt={item.title}
              width={200}
              height={200}
              className="object-cover w-full  h-full"
            />
          )}
          <div className="bg-black/50 absolute w-full inset-0 h-full group-hover:opacity-100 opacity-0 duration-150" />
          <h1 className="absolute text-white text-xl font-bold group-hover:underline opacity-0 group-hover:opacity-100 duration-150 capitalize  m-4">
            {item.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Hero;
