// utils/parseArticleContent.js
export function parseArticleContent(content = "") {
  if (!content) return { excerpt: "", sections: [] };

  const parts = content.split(/\n##\s+/).map((p) => p.trim());

  const excerpt = parts[0].replace(/^##\s+/, "").trim();

  const sections = parts.slice(1).map((part, index) => {
    const [firstLine, ...rest] = part.split("\n");
    return {
      id: `section-${index}`,
      title: firstLine.trim(),
      body: rest.join("\n").trim(),
    };
  });

  return { excerpt, sections };
}
