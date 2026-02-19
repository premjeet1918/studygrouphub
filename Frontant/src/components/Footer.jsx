
import { motion } from "framer-motion";
import Logo from "../assets/LOGO.JPG";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    { icon: FaFacebookF, color: "text-blue-600", href: "#" },
    { icon: FaTwitter, color: "text-sky-400", href: "#" },
    { icon: FaInstagram, color: "text-pink-500", href: "#" },
    { icon: FaYoutube, color: "text-red-500", href: "#" },
  ];

  return (
    <footer className="w-full bg-gray-800 text-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Top Grid with Stagger Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center sm:text-left"
        >
          {/* Logo + About */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center sm:items-start"
          >
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/48/2563eb/ffffff?text=LOGO";
                }}
              />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  STUDY
                </h2>
                <p className="text-xs font-bold tracking-[0.3em] text-blue-500">
                  GROUP
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Your one-stop destination for educational resources, exam
              preparation, and career guidance.
            </p>

            {/* Social Icons with individual hover animations */}
            <div className="flex gap-4 mt-5 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} bg-gray-700 p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-600`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Government Exams */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center sm:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Government Exams
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "SSC Exams",
                "Banking Exams",
                "UPSC & PCS",
                "Railway Exams",
                "Defence Exams",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center sm:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Skill Development
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Coding & Programming",
                "Digital Marketing",
                "Graphic Design",
                "Video Editing",
                "Hotel Management",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center sm:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start flex-wrap pt-2">
                <MdEmail className="text-blue-500" size={20} />
                <span className="break-all">support@studygroup.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 sm:mt-10 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-gray-400"
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">STUDY GROUP</span> — All
          rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
