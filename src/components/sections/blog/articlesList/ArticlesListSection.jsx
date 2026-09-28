import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import postsData from "../../../../data/posts.json";
import ArticalePageCard from "../../../cards/articaleForPage/ArticalePageCard";

const PAGE_SIZE = 6;
const CATEGORIES = [
  "جميع المقالات",
  ...postsData.categories.map((c) => c.name),
];

export default function ArticlesListSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "جميع المقالات";
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return postsData.posts.filter((post) => {
      const matchesCategory =
        activeCategory === "جميع المقالات" || post.category === activeCategory;
      const matchesSearch = post.title.includes(search.trim());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategoryChange(cat) {
    setSearchParams(cat === "جميع المقالات" ? {} : { category: cat });
    setPage(1);
  }

  return (
    <>
      <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <input
                placeholder="ابحث في المقالات..."
                className="w-full px-5 py-3 pr-12 bg-[#161616] border border-[#262626] rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض <span className="font-bold text-white">{filtered.length}</span>{" "}
            مقالات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((post) => (
            <ArticalePageCard key={post.slug} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                page === 1
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <svg
                className="w-5 h-5 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                      page === num
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}
            </div>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                page === totalPages
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        <p className="text-center text-neutral-500 mt-4 text-sm">
          صفحة {page} من {totalPages}
        </p>
      </div>
    </>
  );
}
