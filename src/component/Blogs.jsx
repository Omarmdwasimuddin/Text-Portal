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
    <section className="py-16 sm:py-20" id="blogs">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
        
          <p className="mt-4 text-lg leading-relaxed text-black">
            ভ্যাট, কাস্টমস, আয়করসহ বিভিন্ন আইন ও বিধিমালার বিশ্লেষণ, আপডেট এবং সহজ ব্যাখ্যা পড়ুন আমাদের বিশেষজ্ঞদের লেখায়।
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
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
                  className="object-cover w-full h-64 transition-transform duration-300 rounded-t-2xl group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
              </div>

              {/* Content Container */}
              <div className="flex-1 p-6 sm:p-8">
                {/* Meta Information */}
                <div className="flex items-center justify-between mb-4">
                  <time 
                    dateTime={blog.datetime} 
                    className="text-sm font-medium text-gray-400"
                  >
                    {new Date(blog.publishedAt).toLocaleDateString('bn-BD')}
                  </time>
                  <Link
                    href={blog.category.href}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-200 transition-colors duration-200 border rounded-full bg-green-900/50 hover:bg-green-800 hover:text-white border-green-700/30"
                  >
                    {blog.category.title}
                  </Link>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-tight text-white transition-colors duration-200 group-hover:text-green-400 line-clamp-2">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="hover:no-underline"
                  >
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mb-6 text-sm leading-relaxed text-gray-200 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-green-900/30">
                  <div className="relative">
                    <img
                      src={blog.author.imageUrl}
                      alt={blog.author.name}
                      className="object-cover w-12 h-12 border-2 rounded-full border-green-700/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a2d2f]"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">
                      <Link 
                        href={blog.author.href}
                        className="transition-colors duration-200 hover:text-green-400"
                      >
                        {blog.author.name}
                      </Link>
                    </p>
                    <p className="text-xs text-gray-400 truncate">{blog.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}