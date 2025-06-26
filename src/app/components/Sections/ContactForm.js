"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully!");
      e.target.reset();
      setTimeout(() => {
        setStatus("");
      }, 2000);
    } else {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-extrabold text-red-600 text-center mb-8">
            Contact Me
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="c5bf9310-ebff-46b8-ba1c-4537352ea2bf"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-red-600 font-semibold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 text-black"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-red-600 font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 text-black"
                placeholder="abcd@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-red-600 font-semibold mb-2"
              >
                Select Service
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 text-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="Wedding Photography">Wedding Photography</option>
                <option value="Portrait Session">Portrait Session</option>
                <option value="Event Coverage">Event Coverage</option>
                <option value="Product Shoot">Product Shoot</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-red-600 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 text-black"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-pink-600 font-medium mt-4">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-full flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.037672666367!2d80.00782704776165!3d9.669956936816428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1748248761846!5m2!1sen!2slk"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}