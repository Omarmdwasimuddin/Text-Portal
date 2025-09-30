import Link from "next/link";

export const blogs = [
  {
    id: "1",
    title: "ভ্যাট আইন ২০১২ এর গুরুত্বপূর্ণ ধারাসমূহ",
    slug: "vat-act-2012-important-sections",
    excerpt: "ভ্যাট আইন ২০১২ এর গুরুত্বপূর্ণ ধারাসমূহের সারসংক্ষেপ।",
    author: {
      name: "Abu Sufian",
      role: "Tax Consultant",
      href: "#",
      imageUrl: "https://imgur.com/W5WiuLd.png",
    },
    publishedAt: "2025-09-01",
    datetime: "2025-09-01",
    coverImage: "https://imgur.com/nIowmno.png",
    category: { title: "Taxation", href: "#" },
  },
  {
    id: "2",
    title: "কাস্টমস রুলস ২০২৩ এর সংক্ষিপ্ত ব্যাখ্যা",
    slug: "customs-rules-2023-summary",
    excerpt: "কাস্টমস আইন ও বিধিমালা ২০২৩ এর সংক্ষিপ্ত ও সহজ ব্যাখ্যা।",
    author: {
      name: "Abdul Kader",
      role: "Content Creator",
      href: "#",
      imageUrl: "https://imgur.com/W5WiuLd.png",
    },
    publishedAt: "2025-08-25",
    datetime: "2025-08-25",
    coverImage: "https://imgur.com/vPMV2Mm.png",
    category: { title: "Customs", href: "#" },
  },
  {
    id: "3",
    title: "আয়কর অধ্যাদেশ ১৯৮৪ এর মূল বিষয়সমূহ",
    slug: "income-tax-ordinance-1984-key-points",
    excerpt: "আয়কর অধ্যাদেশ ১৯৮৪ এর প্রধান ধারা ও নিয়মাবলীর সংক্ষিপ্ত বিবরণ।",
    author: {
      name: "AKM Asaduzzaman",
      role: "Tax Analyst",
      href: "#",
      imageUrl: "https://imgur.com/W5WiuLd.png",
    },
    publishedAt: "2025-08-15",
    datetime: "2025-08-15",
    coverImage: "https://imgur.com/Wq2J8j4.png",
    category: { title: "Taxation", href: "#" },
  },
];

export default function BlogListPage() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-950" id="blogs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
            সর্বশেষ ব্লগ
          </h2>
          <p className="mt-4 text-xl text-gray-300 leading-relaxed">
            ভ্যাট, কাস্টমস, আয়করসহ বিভিন্ন আইন ও বিধিমালার বিশ্লেষণ, আপডেট এবং সহজ ব্যাখ্যা পড়ুন আমাদের বিশেষজ্ঞদের লেখায়।
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#1a2d2f] border border-green-900/30 shadow-2xl hover:shadow-green-900/20 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="flex-1 p-6 sm:p-8">
                {/* Meta Information */}
                <div className="flex items-center justify-between mb-4">
                  <time 
                    dateTime={blog.datetime} 
                    className="text-sm text-gray-400 font-medium"
                  >
                    {new Date(blog.publishedAt).toLocaleDateString('bn-BD')}
                  </time>
                  <Link
                    href={blog.category.href}
                    className="inline-flex items-center rounded-full bg-green-900/50 px-4 py-2 text-sm font-medium text-green-200 hover:bg-green-800 hover:text-white transition-colors duration-200 border border-green-700/30"
                  >
                    {blog.category.title}
                  </Link>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200 mb-3 line-clamp-2 leading-tight">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="hover:no-underline"
                  >
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-green-900/30">
                  <div className="relative">
                    <img
                      src={blog.author.imageUrl}
                      alt={blog.author.name}
                      className="h-12 w-12 rounded-full border-2 border-green-700/50 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a2d2f]"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      <Link 
                        href={blog.author.href}
                        className="hover:text-green-400 transition-colors duration-200"
                      >
                        {blog.author.name}
                      </Link>
                    </p>
                    <p className="text-sm text-gray-400 truncate">{blog.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-xl hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
          >
            সকল ব্লগ দেখুন
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}