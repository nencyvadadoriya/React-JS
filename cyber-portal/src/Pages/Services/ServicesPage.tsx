import { FaShieldAlt, FaUserShield, FaLock, FaNetworkWired, FaMicrochip, FaCloud } from "react-icons/fa";

function Services() {
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

  return (
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
  );
}

export default Services;
