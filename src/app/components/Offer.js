// components/Offer.js
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import Image from "next/image";

const Offer = ({ offer }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between">
      {/* Car Image */}
      <div className="w-full h-72 mb-4">
        <Image
          src={offer.image}
          alt={offer.model}
          className="object-cover rounded-lg w-full h-full"
          width={300}
          height={200}
        />
      </div>

      {/* Brand, Model, and Prices Section */}
      <div className="flex justify-between w-full items-center mb-10">
        {/* Brand and Model (Left Aligned) */}
        <div className="flex flex-col text-left">
          <h3 className="text-lg font-semibold text-gray-900">{offer.marca}</h3>
          <p className="text-sm text-gray-600">{offer.model}</p>
        </div>

        {/* Prices (Right Aligned) */}
        <div className="text-right">
          <p className="text-sm text-gray-500 line-through">
            {offer.pretLista} EUR
          </p>
          <p className="text-xl font-bold text-red-500">
            {offer.ofertaSpeciala} EUR
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex w-full justify-between items-center space-x-2">
        <a
          href={offer.link}
          className="flex items-center justify-center bg-gray-100 text-gray-900 py-2 px-4 rounded-xl flex-grow text-sm font-medium hover:bg-gray-200"
        >
          <MdInfo className="mr-2 h-5 w-5" /> Vezi detalii
        </a>
        <a
          href="tel:+0219229"
          className="flex items-center justify-center bg-gray-900 text-white py-2 px-3 rounded-xl hover:bg-gray-700"
        >
          <FaPhone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/?text=I'm interested in your offer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white py-2 px-3 rounded-xl hover:bg-green-600"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Offer;
