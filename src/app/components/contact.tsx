import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
        <section className="text-gray-600 body-font relative bg-slate-200">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.822634725926!2d67.1452785744324!3d24.9381114421478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33860c5066957%3A0x5ef98f0d8fd46049!2sJohar%20Complex%2C%20Gulzar-e-Hijri%20Rizwan%20Chs%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075300%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729228299416!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-8 px-3 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Johar Complex,Karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-500 leading-relaxed">abdulsattar10te07@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+923083366991</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel free to Contact
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-[rgb(0,201,255)] border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
        Button
      </button>
      <p className="text-xs text-gray-500 mt-3">
        
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
