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
        <div className="w-full  flex-col lg:-space-y-4 flex items-center mb-10 justify-center">
          <Badge />
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            El Kendi Participation Committee
          </h1>
        </div>
        <HR />
        <Hero />
        <HR />
        <About />
        <HR />
        <LatestArticle />
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
