import React from "react";
import { parseArticleContent } from "../../../utils/parseArticleContent";
// { artical: articleDetalis }
export default function ArticleContentSection({ artical: articleDetalis }) {
  const { excerpt, sections } = parseArticleContent(articleDetalis.content);
  console.log("excerpt");
  console.log(excerpt);
  console.log("sections");
  console.log(sections);

  console.log(articleDetalis.id);

  return (
    <>
      <div className="grid lg:grid-cols-[1fr_300px] gap-12">
        <div className="order-2 lg:order-1">
          <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
            <p className="text-lg text-neutral-200 leading-relaxed italic">
              {excerpt}
            </p>
          </div>
          <div className="prose-custom">
            <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
              {articleDetalis.excerpt}
            </p>
            {sections.map((item) => (
              <React.Fragment key={item.id}>
                <h2
                  id={item.id}
                  className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <i className="fa-solid fa-camera text-orange-500" />
                  </span>
                  {item.title}
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  {item.body}
                </p>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                <i className="fa-solid fa-tags text-orange-500" />
              </div>
              <h3 className="font-bold text-white">الوسوم</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {articleDetalis.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-share-nodes text-orange-500" />
                </div>
                <h3 className="font-bold text-white">شارك المقال</h3>
              </div>
              <div className="flex gap-2">
                <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                  <i className="fa-brands fa-x-twitter" />
                </button>
                <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                  <i className="fa-brands fa-linkedin-in" />
                </button>
                <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                  <i className="fa-brands fa-whatsapp" />
                </button>
                <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                  <i className="fa-solid fa-link" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                alt="سالم أحمد"
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              />
              <div className="text-center sm:text-right flex-1">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                  كاتب المقال
                </span>
                <h3 className="text-xl font-bold text-white mt-1">سالم أحمد</h3>
                <p className="text-neutral-500 text-sm mb-3">مصور محترف</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {articleDetalis.title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <aside className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <i className="fa-solid fa-list text-orange-500" />
                </div>
                <h3 className="font-bold text-white">محتويات المقال</h3>
              </div>
              <nav className="space-y-2">
                <a
                  href="#section-0"
                  className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                    1
                  </span>
                  <span className="text-sm"> {articleDetalis.category} </span>
                </a>
                <a
                  href="#section-1"
                  className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                    2
                  </span>
                  <span className="text-sm">التحضير المسبق</span>
                </a>
                <a
                  href="#section-2"
                  className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                    3
                  </span>
                  <span className="text-sm">إعدادات الكاميرا</span>
                </a>
                <a
                  href="#section-3"
                  className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                    4
                  </span>
                  <span className="text-sm">التكوين الفني</span>
                </a>
                <a
                  href="#section-4"
                  className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                    5
                  </span>
                  <span className="text-sm">الخلاصة</span>
                </a>
              </nav>
            </div>
            <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                  <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                  <p className="text-white font-bold">8 دقائق للقراءة</p>
                  <p className="text-neutral-500 text-xs">وقت القراءة</p>
                </div>
                <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                  <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                  <p className="text-white font-bold text-sm">١٥ يناير</p>
                  <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
              <div className="text-center">
                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-envelope text-orange-500 text-xl" />
                </div>
                <h3 className="font-bold text-white mb-2">لا تفوّت جديدنا</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  اشترك للحصول على أحدث المقالات
                </p>
                <a
                  className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                  href="/blog"
                  data-discover="true"
                >
                  تصفح المزيد
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
