import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-20 flex flex-col items-center px-4 md:px-0 gap-10"
      id="Contact"
    >
      <h1 className="text-4xl text-white font-bold">Contact Me</h1>
      <div className="w-full md:w-[calc(33.333%+16rem+5rem)] max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 p-8 flex flex-col items-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15">
            <h2 className="text-3xl text-white font-bold mb-8">
              Let's Connect!
            </h2>
            <div className="flex flex-col items-center gap-8">
              <a
                href="mailto:isidro.trevinl@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors text-lg"
              >
                <FiMail className="w-8 h-8" />
                <span>isidro.trevinl@gmail.com</span>
              </a>
              <a
                href="tel:+528115669600"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors text-lg"
              >
                <FiPhone className="w-8 h-8" />
                <span>+52 81 1165 3953</span>
              </a>
              <div className="flex gap-6 mt-4">
                <a
                  href="https://github.com/IsidroTrevino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-colors"
                >
                  <FiGithub className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/isidro-trevino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-colors"
                >
                  <FiLinkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 p-8 bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-xl rounded-3xl border border-gray-500/15"
          >
            <div className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-300 text-sm mb-2 block"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 rounded-xl bg-purple-500/10 border border-gray-500/15 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-300 text-sm mb-2 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 rounded-xl bg-purple-500/10 border border-gray-500/15 text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-gray-300 text-sm mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 rounded-xl bg-purple-500/10 border border-gray-500/15 text-white focus:outline-none focus:border-purple-500 h-32 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 rounded-xl bg-purple-500 text-white font-bold hover:bg-purple-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
