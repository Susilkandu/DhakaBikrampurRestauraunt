import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-gradient-to-br from-[#f5f5f4] to-[#7a9cbd] backdrop-blur-2xl
">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you – Reach out for reservations or feedback!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 transition-all duration-500 hover:shadow-2xl animate-slide-in-left">
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Map & Info */}
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.125575146426!2d46.716812735935676!3d24.782812101878342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd006048830b%3A0x674ea9f5a0cb82e0!2sDhaka%20Bikrampur%20Restaurant!5e0!3m2!1sen!2sin!4v1744913995050!5m2!1sen!2sin"
                width="100%"
                height="280"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-64 border-0"
              ></iframe>
            </div>

            <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
  <i className="bi bi-geo-alt-fill text-xl text-blue-600"></i>
  <a
    href="https://www.google.com/maps?q=Al+Hussein+Ibn+Ali,+RHZA3512,+Riyadh+Saudi+Arabia"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black hover:underline"
  >
    Al Hussein Ibn Ali, RHZA3512, Riyadh Saudi Arabia
  </a>
</div>

              <div className="flex items-center gap-3">
  <i className="bi bi-telephone-fill text-xl text-blue-600"></i>
  <a
    href="tel:+966597228270"
    className="text-black hover:underline"
  >
    +966 59 722 8270
  </a>
</div>

              <div className="flex items-center gap-3">
  <i className="bi bi-envelope-fill text-xl text-blue-600"></i>
  <a
    href="mailto:DhakaBikrampurRestaurant@gmail.com"
    className="text-black hover:underline"
  >
    DhakaBikrampurRestaurant@gmail.com
  </a>
</div>

<div className="flex items-center gap-5 text-2xl pt-4">
  <a href="https://www.facebook.com/DhakaBikrampurRstrnt" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-facebook hover:text-blue-700 cursor-pointer transition-all"></i>
  </a>
  <a href="https://www.instagram.com/DhakaBikrampurRstrnt" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-instagram hover:text-pink-600 cursor-pointer transition-all"></i>
  </a>
  <a href="https://wa.me/+966597228270" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-whatsapp hover:text-green-500 cursor-pointer transition-all"></i>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* Custom Tailwind Animations */}
      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-in-out;
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-in-out;
          }
          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-in-out;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
