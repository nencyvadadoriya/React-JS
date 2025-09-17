import { User, Calendar } from "lucide-react";
import Blog1 from "../../assets/blog-1.jpg";
import Blog2 from "../../assets/blog-2.jpg";
import Blog3 from "../../assets/blog-3.jpg";

export default function Blog() {
  const blogs = [
    {
      img: Blog1,
      title: "Cybersecurity Should be an Issue for Every Board of Directors",
      date: "17 June 2022",
      author: "Author",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt",
    },
    {
      img: Blog2,
      title: "Technology, Microlearning, and its Impact on Users and Cybersecurity",
      date: "17 June 2022",
      author: "Author",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt",
    },
    {
      img: Blog3,
      title: "Cybercriminals Go to College with New Phishing Attacks",
      date: "17 June 2022",
      author: "Author",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt",
    },
  ];

  return (
    <>
      {/* Blog Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12">
            Blog & Article
          </h2>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                {/* Image */}
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Content */}
                <div className="p-6">
                  {/* Author & Date */}
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                    <span className="flex items-center gap-1 text-[#e64a19]">
                      <User size={14} /> {blog.author}
                    </span>
                    <span className="flex items-center gap-1 text-[#e64a19]">
                      <Calendar size={14} /> {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#e64a19] transition">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 mb-4">{blog.desc}</p>

                  {/* Button */}
                  <button className="bg-[#e64a19] text-white px-5 py-2 rounded-full font-medium hover:bg-[#d84315] transition">
                    Continue Reading
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
