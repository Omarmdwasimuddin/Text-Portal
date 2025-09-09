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
    <div className="bg-gradient-to-b from-[#0f2027] via-[#2c5364] to-[#203a43] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Latest Blogs
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Learn about taxation and customs with our expert insights.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto mt-10 grid max-w-none grid-cols-1 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col overflow-hidden rounded-xl bg-[#1a2d2f] border border-green-900/30 shadow-lg hover:shadow-xl hover:translate-y-1 transition-all"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6">
                {/* Date + Category */}
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.datetime} className="text-gray-400">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </time>
                  <a
                    href={blog.category.href}
                    className="rounded-full bg-green-900 px-3 py-1.5 font-medium text-green-200 hover:bg-green-800"
                  >
                    {blog.category.title}
                  </a>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-lg font-semibold text-white hover:text-green-400">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-2 line-clamp-3 text-sm text-gray-300">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    src={blog.author.imageUrl}
                    alt={blog.author.name}
                    className="h-10 w-10 rounded-full border border-green-800"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-white">
                      <a href={blog.author.href}>{blog.author.name}</a>
                    </p>
                    <p className="text-gray-400">{blog.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}