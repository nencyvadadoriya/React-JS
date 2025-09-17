import bannerRight from "../../assets/home-font.png";
import bannerBg from "../../assets/dot-shape.png";
import { CheckCircle } from "lucide-react";
import { FaShieldAlt, FaUserShield, FaLock, FaNetworkWired, FaMicrochip, FaCloud } from "react-icons/fa";
import aboutImg from "../../assets/about.jpg";
import eduImg1 from "../../assets/tab-solution-1.jpg";
import eduImg2 from "../../assets/tab-solution-2.jpg";
import eduImg3 from "../../assets/tab-solution-3.jpg";
import eduImg4 from "../../assets/tab-solution-4.jpg";
import eduImg5 from "../../assets/tab-solution-5.jpg";
import { User, Calendar } from "lucide-react";
import Blog1 from "../../assets/blog-1.jpg"
import Blog2 from "../../assets/blog-2.jpg"
import Blog3 from "../../assets/blog-3.jpg"
import { useState } from "react";
function Banner() {
    

    const services = [
        {
            icon: <FaShieldAlt className="w-12 h-12 text-[#ff5722]" />,
            title: "Managed Firewall",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
            link: "#",
        },
        {
            icon: <FaUserShield className="w-12 h-12 text-[#ff5722]" />,
            title: "Virtual CISO",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
            link: "#",
        },
        {
            icon: <FaLock className="w-12 h-12 text-[#ff5722]" />,
            title: "Endpoint Security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
            link: "#",
        },
        {
            icon: <FaNetworkWired className="w-12 h-12 text-[#ff5722]" />,
            title: "Networking Security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
            link: "#",
        },
        {
            icon: <FaMicrochip className="w-12 h-12 text-[#ff5722]" />,
            title: "Security Operations",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
            link: "#",
        },
        {
            icon: <FaCloud className="w-12 h-12 text-[#ff5722]" />,
            title: "Cloud Security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
            link: "#",
        },
    ];
    const industries = [
        {
            name: "Financial",
            title: "Financial Cybersecurity",
            desc: "We protect your financial data and systems with advanced solutions and fraud detection.",
            points: [
                "Prevent online fraud and phishing attacks",
                "Advanced encryption for transactions",
                "24/7 monitoring & instant alerts",
            ],
            img: eduImg1,
        },
        {
            name: "Healthcare",
            title: "Healthcare Data Protection",
            desc: "Safeguarding sensitive healthcare information with HIPAA-compliant solutions.",
            points: [
                "HIPAA compliant security systems",
                "Secure patient records & portals",
                "Advanced ransomware protection",
            ],
            img: eduImg2,
        },
        {
            name: "Real Estate",
            title: "Real Estate Solutions",
            desc: "Protect real estate businesses from digital threats and data breaches.",
            points: [
                "Secure client data & property info",
                "Digital contracts protection",
                "Fraud detection AI tools",
            ],
            img: eduImg3,
        },
        {
            name: "Manufacturing",
            title: "Industrial Cybersecurity",
            desc: "Robust security for manufacturing plants, supply chains, and IoT devices.",
            points: [
                "Protect IoT-enabled machinery",
                "Secure supply chain systems",
                "Prevent downtime from cyberattacks",
            ],
            img: eduImg4,
        },
        {
            name: "Education",
            title: "Higher Education Facilities",
            desc: "Empowering universities and schools with strong cybersecurity measures.",
            points: [
                "Protect your business with our leading solutions",
                "Future developments of AI in education",
                "Serving global enterprises & in-house IT teams",
            ],
            img: eduImg5,
        },
    ];
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
    const [active, setActive] = useState(industries[4]);
    return (
        <>
            {/* banner  */}
            <section className="bg-[#0b0c2a] text-white py-20 bg-cover bg-center  h-[710px]" style={{ backgroundImage: `url(${bannerBg})` }} >
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            World's Leading Cyber <br /> Security Company
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl">
                            We are the world's leading cybersecurity company, protecting businesses from digital threats.
                        </p>
                        <div className="flex space-x-6">
                            <button className="bg-white text-[#0b0c2a] px-8 py-3 rounded-full font-semibold hover:bg-[#ff5722] transition">
                                Get Started
                            </button>
                            <button className="bg-[#ff5722] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e64a19] transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img src={bannerRight} alt="Cyber Illustration" className="w-full" />
                    </div>

                </div>
            </section>

            {/* about  */}
            <section className="py-20 bg-white">
                <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                    {/* Left Side Image */}
                    <div className="md:w-1/2">
                        <img src={aboutImg} alt="About Cyber Security" className="w-full" />
                    </div>

                    {/* Right Side Content */}
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-[#ff5722] font-semibold uppercase tracking-wide">
                            Welcome to Cyberspace
                        </p>
                        <h4 className="text-4xl md:text-4xl font-bold text-[#0b0c2a] leading-snug">
                            Managed Cybersecurity <br /> Operations That Protect<br /> Your Business
                        </h4>
                        <p className="text-gray-600 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-[#ff5722] w-5 h-5" />
                                Security Analysts & Engineers
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-[#ff5722] w-5 h-5" />
                                Intrusion Detection Specialists
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="text-[#ff5722] w-5 h-5" />
                                Security Implementation Specialists
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* services  */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-[1320px] mx-auto px-6 text-center">
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b0c2a] mb-12">
                        Our Services
                    </h2>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
                            >
                                <div className="flex justify-center mb-6">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-[#0b0c2a] mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <a
                                    href={service.link}
                                    className="text-[#ff5722] font-semibold hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* pages  */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Industries We Serve
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {industries.map((ind, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(ind)}
                                className={`px-6 py-3 rounded-md font-medium shadow-sm transition-all ${active.name === ind.name
                                    ? "bg-[#e64a19] text-white"
                                    : "bg-white text-gray-800 hover:bg-[#e64a19] hover:text-white"
                                    }`}
                            >
                                {ind.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">{active.title}</h3>
                            <p className="text-gray-600 mb-6">{active.desc}</p>

                            <ul className="space-y-3 mb-6">
                                {active.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700"> {point}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div>
                            <img
                                src={active.img}
                                alt={active.title}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* blogs  */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center mb-12">Blog & Article</h2>

                    {/* Blogs */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden group"
                            >
                                {/* Image */}
                                <img src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
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
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

            {/* contact  */}
            <div
                className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center p-8 mb-20"
                style={{ backgroundImage: "url('https://barakahit.net/html/cyberspace/assets/img/banner-bg.jpg'" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl text-white text-center">

                    {/* Stat 1 */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold">23+</h2>
                        <p className="text-lg mt-2 opacity-80">Years of Experience</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold">500</h2>
                        <p className="text-lg mt-2 opacity-80">Complete Projects</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold">100+</h2>
                        <p className="text-lg mt-2 opacity-80">Employees</p>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold">300+</h2>
                        <p className="text-lg mt-2 opacity-80">5 Star Rating</p>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Banner;
