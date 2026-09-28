import React from "react";

export default function ArticleListCards() {
  return (
    <>
      <div className="mt-20 pt-12 border-t border-[#262626]">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
              <i className="fa-solid fa-images text-orange-500 text-xl" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
              <p className="text-neutral-500 text-sm">
                استكشف المزيد من المحتوى المميز
              </p>
            </div>
          </div>
          <a
            className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
            href="/blog"
            data-discover="true"
          >
            عرض الكل
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            href="/blog/night-photography-techniques"
            data-discover="true"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt="تصوير الليل والنجوم: دليلك لالتقاط سماء الليل"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
              <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                إضاءة
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                تصوير الليل والنجوم: دليلك لالتقاط سماء الليل
              </h3>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <img
                    alt="خالد الفيصل"
                    className="w-6 h-6 rounded-full"
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
                  />
                  خالد الفيصل
                </span>
                <span>11 دقائق للقراءة</span>
              </div>
            </div>
          </a>
          <a
            className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            href="/blog/long-exposure-photography"
            data-discover="true"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt="التعريض الطويل: كيف تصور الحركة والزمن"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
              <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                إضاءة
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                التعريض الطويل: كيف تصور الحركة والزمن
              </h3>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <img
                    alt="باسم المصري"
                    className="w-6 h-6 rounded-full"
                    src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face"
                  />
                  باسم المصري
                </span>
                <span>8 دقائق للقراءة</span>
              </div>
            </div>
          </a>
          <a
            className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            href="/blog/flash-photography-basics"
            data-discover="true"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt="أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
              <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                إضاءة
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة
              </h3>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <img
                    alt="ماجد القحطاني"
                    className="w-6 h-6 rounded-full"
                    src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face"
                  />
                  ماجد القحطاني
                </span>
                <span>8 دقائق للقراءة</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
