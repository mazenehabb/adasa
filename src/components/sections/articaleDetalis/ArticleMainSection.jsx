import ArticleContentSection from "./ArticleContentSection";
import ArticleListCards from "./ArticleListCards";

export default function ArticleMainSection(props) {
  // console.log(props.post);
  let articleDetalis = props.post;
  console.log("testtttt");

  console.log(articleDetalis);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* here above  */}
        <ArticleContentSection artical={articleDetalis} />
        <ArticleListCards />
      </div>
    </>
  );
}
