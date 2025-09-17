import { CheckCircle } from "lucide-react";
import aboutImg from "../../assets/about.jpg";

function About() {
  return (
    <>

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
    </>
  );
}

export default About;
