import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      {/* background blur circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Contact <span className="text-blue-600">StudyGroupHub</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are here to help you. Connect with us anytime via phone, email,
            WhatsApp, or send us a message directly.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition duration-300">

              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h2>

              {/* phone */}
              <ContactItem
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 8127938279"
                color="blue"
              />

              {/* email */}
              <ContactItem
                icon={<FaEnvelope />}
                title="Email"
                value="help@studygrouphub.com"
                color="green"
              />

              {/* location */}
              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Lucknow, Uttar Pradesh, India"
                color="purple"
              />

              {/* whatsapp */}
              <ContactItem
                icon={<FaWhatsapp />}
                title="WhatsApp"
                value="+91 8127938279"
                color="emerald"
              />

            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden shadow-xl border">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[260px]"
              ></iframe>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Message
            </h2>

            <form className="space-y-5">

              <FloatingInput label="Full Name" type="text" />

              <FloatingInput label="Email Address" type="email" />

              <FloatingInput label="Subject" type="text" />

              <FloatingTextarea label="Message" />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}


/* CONTACT ITEM */
function ContactItem({ icon, title, value, color }) {
  return (
    <div className="flex items-center gap-4 mb-5 group">

      <div
        className={`bg-${color}-100 text-${color}-600 p-3 rounded-xl group-hover:scale-110 transition`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>

    </div>
  );
}


/* FLOATING INPUT */
function FloatingInput({ label, type }) {
  return (
    <div className="relative">

      <input
        type={type}
        required
        className="peer w-full border rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder=" "
      />

      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
        {label}
      </label>

    </div>
  );
}


/* FLOATING TEXTAREA */
function FloatingTextarea({ label }) {
  return (
    <div className="relative">

      <textarea
        rows="4"
        required
        className="peer w-full border rounded-xl px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder=" "
      ></textarea>

      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
        {label}
      </label>

    </div>
  );
}
