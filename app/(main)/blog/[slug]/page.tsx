import { fullBlog } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { Gutter } from "@/components/global/Gutter";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";

// Fetch blog data by slug
async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  "slug":slug.current,
    title,
    content[] {
      ...,
      _type == "image" => {
        ...,
        asset->{
          url,
          metadata
        }
      }
    },
    description,
    "imageUrl": image.asset->url
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

// Custom PortableText serializers to render image blocks
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) {
        return null; // If no image URL, skip rendering
      }
      return (
        <div className="my-4">
          <Image
            src={value.asset.url}
            alt={value.alt || "Blog image"}
            width={800}
            height={450} // Adjust height and width as needed
            className="rounded-lg border"
            objectFit="cover"
          />
        </div>
      );
    },
  },
};

async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  return (
    <Gutter className="mt-16 flex flex-col items-center justify-center gap-6">
      <div className="w-[70%] flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center leading-normal">
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
        className="w-[80%] object-cover h-[500px] rounded-md border border-[#cccccc30]"
      />
      <div className="mt-4 text-left prose-img:object-cover prose-img:max-h-[500px]  w-full prose prose-p:m-0 prose-headings:mb-4 prose-text prose-lg dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} components={components} />
      </div>
    </Gutter>
  );
}

export default BlogArticle;
