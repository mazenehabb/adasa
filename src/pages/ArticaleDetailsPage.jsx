import { posts } from "../data/posts.json";
import ArticaleDetalisHero from "../components/sections/articaleDetalis/articaleDetalisHero/ArticaleDetalisHero";
import ArticleMainSection from "../components/sections/articaleDetalis/ArticleMainSection";
import { useParams } from "react-router-dom";
export default function ArticaleDetailsPage() {
  const { slug } = useParams();
  console.log("slug:", slug);
  const post = posts.find((post) => post.slug === slug);
  console.log("post:", post);
  console.log("slug from URL:", slug);

  console.log(
    "available slugs:",
    posts.map((post) => post.slug),
  );

  return (
    <>
      <ArticaleDetalisHero post={post} />
      <ArticleMainSection post={post} />
    </>
  );
}
