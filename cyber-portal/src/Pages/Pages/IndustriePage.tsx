import { useState } from "react";
import eduImg1 from "../../assets/tab-solution-1.jpg";
import eduImg2 from "../../assets/tab-solution-2.jpg";
import eduImg3 from "../../assets/tab-solution-3.jpg";
import eduImg4 from "../../assets/tab-solution-4.jpg";
import eduImg5 from "../../assets/tab-solution-5.jpg";

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

export default function Industries() {
  const [active, setActive] = useState(industries[4]);

  return (
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
              className={`px-6 py-3 rounded-md font-medium shadow-sm transition-all ${
                active.name === ind.name
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
  );
}
