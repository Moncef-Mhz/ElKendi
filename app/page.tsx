import { Gutter } from "@/components/global/Gutter";
import Hero from "@/components/global/Hero";
import LatestArticle from "@/components/global/LatestArticle";
import Badge from "@/components/global/Badge";
import Contact from "@/components/global/Contact";
import About from "@/components/global/About";
import { HR } from "@/components/ui/hr";

export default function Home() {
  return (
    <div>
      <Gutter>
        <Hero />
        <HR />
        <About />
        <HR />
        <LatestArticle />
        <HR />
        <div className="w-full flex items-center justify-center">
          <Badge />
        </div>
        <HR />
        <Contact />
      </Gutter>
    </div>
  );
}
{
  /* {
   data.map((post, idx) => (
     <ArticleCard
       title={post.title}
       description={post.description}
       slug={post.slug}
       image={post.imageUrl}
       key={idx}
     />
   ));
 } */
}
