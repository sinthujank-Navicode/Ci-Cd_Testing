"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingSocialButton() {
  const whatsappLink = "https://wa.me/yourphonenumber"; // Replace with your WhatsApp number in international format (e.g., 91xxxxxxxxxx)

  return (
    <div className="fixed bottom-5 left-5 flex flex-col items-end gap-3 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
