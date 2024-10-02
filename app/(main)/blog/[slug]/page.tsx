import { fullBlog } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import ClientBlogArticle from "@/components/pages/ClientBlogArticle";

async function getData(slug: string): Promise<fullBlog> {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
    "slug": slug.current,
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
// Server Component (App Router)
export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug); // Fetch directly in server component

  return <ClientBlogArticle data={data} />;
}
