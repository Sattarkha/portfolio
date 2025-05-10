import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Map & Contact Info */}
        <div className="lg:w-2/3 w-full relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-96 sm:h-[500px]"
            frameBorder="0"
            title="Google Map"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.822634725926!2d67.1452785744324!3d24.9381114421478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33860c5066957%3A0x5ef98f0d8fd46049!2sJohar%20Complex%2C%20Gulzar-e-Hijri%20Rizwan%20Chs%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075300%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729228299416!5m2!1sen!2s"
            style={{ filter: 'contrast(1.2) opacity(0.5)' }}
          ></iframe>

          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-md flex flex-col sm:flex-row w-[90%] sm:w-[85%]">
            <div className="sm:w-1/2 mb-4 sm:mb-0">
              <h2 className="text-xs font-semibold text-gray-700">ADDRESS</h2>
              <p className="text-gray-600">Johar Complex, Karachi</p>
            </div>
            <div className="sm:w-1/2">
              <h2 className="text-xs font-semibold text-gray-700">EMAIL</h2>
              <a href="mailto:abdulsattar10te07@gmail.com" className="text-blue-600">
                abdulsattar10te07@gmail.com
              </a>
              <h2 className="text-xs font-semibold text-gray-700 mt-2">PHONE</h2>
              <p className="text-gray-600">+92 308 3366991</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/3 w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 mb-6">Feel free to reach out to me!</p>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(0,201,255)] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
