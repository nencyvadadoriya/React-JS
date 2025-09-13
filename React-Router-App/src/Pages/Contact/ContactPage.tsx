export default function Contact() {
  return (
    <section className="w-full bg-[#fdfaf6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif text-[#333333] mb-4 mt-5">
          Contact Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We'd love to hear from you. Send us a message, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col items-center">
        <form className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first name  */}
            <input type="text" placeholder="Enter First Name" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b78a6e]"
            />
            {/* last name  */}
            <input type="text" placeholder="Enter Last Name" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b78a6e]"
            />
            {/* email  */}
            <input type="email" placeholder="Your Email" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b78a6e]"
            />
            {/*  password */}
          <input type="text" placeholder="Your Password" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b78a6e]"/>
          </div>
          
          {/* Phone Number */}
          <input type="tel" placeholder="Your Phone Number" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b78a6e]"/>
          {/*  Address */}
          <textarea placeholder="Your Message" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b78a6e]">
          </textarea>
          <div className="flex justify-center">
            <button type="submit" className="bg-[#b78a6e] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#a57e62] transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}