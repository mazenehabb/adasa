import React from "react";

export default function ArticaleDetalisHero({ post }) {
  console.log("this is artical hero");

  const urlImage = post.image;
  const title = post.title;
  console.log(post.image);

  console.log("This iss end aricale hero");

  return (
    <>
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          src={urlImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />
        <div className="absolute top-8 right-8 left-8">
          <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
            <a
              className="text-white/70 hover:text-white transition-colors"
              href="/"
              data-discover="true"
            >
              <i className="fa-solid fa-home" />
            </a>
            <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
            <a
              className="text-white/70 hover:text-white transition-colors"
              href="/blog"
              data-discover="true"
            >
              المدونة
            </a>
            <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
            <span className="text-orange-400 font-medium truncate max-w-[200px]">
              إضاءة
            </span>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                href="/blog?category=إضاءة"
                data-discover="true"
              >
                إضاءة
              </a>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <i className="fa-regular fa-calendar" />
                  ١٥ يناير ٢٠٢٦
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-regular fa-clock" />8 دقائق للقراءة
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {title}
            </h1>
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
              <img
                alt="سالم أحمد"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              />
              <div>
                <p className="font-bold text-white">سالم أحمد</p>
                <p className="text-sm text-white/60">مصور محترف</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
