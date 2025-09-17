function ContactForm() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Left Side - Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-8 md:col-span-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Address:</h3>
            <p className="text-gray-600 mb-6">
              4035 Heavens, Los Angeles, California
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone:</h3>
            <p className="text-gray-600">+707 355-633-755</p>
            <p className="text-gray-600 mb-6">+707 355-633-777</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email:</h3>
            <p className="text-gray-600">info@example.com</p>
            <p className="text-gray-600">support@example.com</p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 md:col-span-2">
            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
