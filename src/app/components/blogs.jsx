import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Strategies for Business Growth in 2024",
      excerpt: "Discover the key strategies that successful businesses are implementing to drive growth and stay competitive in today's dynamic market.",
      category: "Business Strategy",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/next.svg", // Placeholder - you can replace with actual blog images
      featured: true
    },
    {
      id: 2,
      title: "Digital Transformation: A Complete Guide for SMEs",
      excerpt: "Learn how small and medium enterprises can successfully navigate digital transformation and leverage technology for business success.",
      category: "Digital Marketing",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "/vercel.svg",
      featured: false
    },
    {
      id: 3,
      title: "Building a Strong Company Culture: Best Practices",
      excerpt: "Explore proven strategies for creating and maintaining a positive company culture that attracts top talent and drives productivity.",
      category: "Leadership",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/file.svg",
      featured: false
    },
    {
      id: 4,
      title: "Financial Planning Tips for Business Owners",
      excerpt: "Essential financial planning strategies that every business owner should know to ensure long-term sustainability and growth.",
      category: "Finance",
      author: "David Thompson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "/window.svg",
      featured: false
    },
    {
      id: 5,
      title: "Customer Experience: The Key to Business Success",
      excerpt: "How focusing on customer experience can differentiate your business and create loyal, long-term customers.",
      category: "Customer Service",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/globe.svg",
      featured: false
    },
    {
      id: 6,
      title: "Innovation in Business: Staying Ahead of the Curve",
      excerpt: "Practical approaches to fostering innovation within your organization and staying competitive in rapidly changing markets.",
      category: "Innovation",
      author: "Robert Kim",
      date: "March 3, 2024",
      readTime: "9 min read",
      image: "/next.svg",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Business Strategy", 
    "Digital Marketing",
    "Leadership",
    "Finance",
    "Customer Service",
    "Innovation"
  ];

  return (
    <section id="blogs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Business Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, strategies, and insights from industry experts to help your business thrive.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h3>
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                                 <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    width={200}
                    height={200}
                    className="w-32 h-32 opacity-80"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">{blogPosts[0].readTime}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h4>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{blogPosts[0].author}</p>
                      <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="w-20 h-20 opacity-60"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs ml-3">{post.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{post.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
                 <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 opacity-90">
            Get the latest business insights and strategies delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
