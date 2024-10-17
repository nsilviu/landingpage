// pages/index.js
"use client";
import { useState } from "react";
import Offer from "./components/Offer";
import offers from "./data/offers";
import brands from "./data/brands"; // Import the brands data
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/solid";
import { FaFacebookF, FaEnvelopeOpen, FaCar } from "react-icons/fa";
import ConsentDialog from "./components/ConsentDialog";

export default function Home() {
  const handleBrandClick = (brand) => {
    // If the clicked brand is already selected, reset to "All"
    if (selectedBrand === brand) {
      setSelectedBrand("All");
    } else {
      setSelectedBrand(brand); // Otherwise, set the selected brand
    }
  };
  // State to track selected brand
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Filter offers based on selected brand
  const filteredOffers = offers.filter((offer) => {
    if (selectedBrand === "All") return true; // Show all cars if no brand is selected
    if (selectedBrand === "Other") {
      // Show cars that don't match any of the main brands
      return !["Volkswagen", "Škoda", "SEAT", "Cupra", "Audi"].includes(
        offer.marca
      );
    }
    return offer.marca === selectedBrand; // Show cars matching the selected brand
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        {/* Banner Section
      <section className="relative bg-gray-900 flex-grow">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover opacity-30"
            src="/vignetta_toamna.png"
            alt="Dealership"
            width={2680}
            height={1080}
            priority={false}
          />
        </div>

        <div className="relative container mx-auto px-6 py-10">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <a href="#">
              <Image
                src="/logos/pialogo.png"
                className="w-16"
                alt="Porsche Inter Auto Logo"
                width={120}
                height={120}
              />
            </a>
            <h1 className="text-3xl p-5 text-white">Porsche Inter Auto</h1>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">
            PIA Auto Rulate
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Black friday a venit mai devreme la Porsche Inter Auto
          </p>
          <button className="bg-orange-400 rounded-xl items-center align-middle">
            <Link
              href={"tel:0219229"}
              className="inline-block bg-primary text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-primary-dark hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              021 9229
            </Link>
          </button>
        </div>
      </section> */}
      </div>
      <div className="flex flex-wrap justify-center align-middle">
        <div className="flex flex-col items-center justify-center text-center w-screen bg-black px-5 pt-5">
          <a href="#">
            <Image
              src="/logos/pialogo.png"
              className="w-16"
              alt="Porsche Inter Auto Logo"
              width={120}
              height={120}
            />
          </a>
          <h1 className="text-xs font-light p-5 text-white">
            Porsche Inter Auto
          </h1>
        </div>
        <div className="flex justify-center align-middle w-[300px] object-contain sm:w-[600px] items-center text-center rounded-sm mt-3 mb-10">
          <Image
            className="rounded-xl shadow-2xl shadow-red-600"
            src="/vignetta_toamna.png"
            alt="Dealership"
            width={500}
            height={1080}
            priority={false}
          />
        </div>
        {/* <div className="flex flex-col gap-3 font-bold items-center align-middle justify-center">
          <h1>Suna acum!</h1>
          <button className="bg-orange-400 rounded-xl items-center align-middle">
            <Link
              href={"tel:0219229"}
              className="inline-block bg-primary text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-primary-dark hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              021 9229
            </Link>
          </button>
        </div> */}
      </div>
      {/* Brand Filter Section */}

      <section className="container mx-auto px-6 py-6">
        <h1 className="text-center text-xl font-extralight roboto mb-5">
          Filtreaza dupa marca
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              onClick={() => handleBrandClick(brand.name)}
              className={`flex items-center justify-center w-32 h-32 shadow-xl rounded-2xl cursor-pointer ${
                selectedBrand === brand.name ? "ring-4 ring-primary" : ""
              }`}
            >
              {/* Render icon for "Other", image for other brands */}
              {brand.name === "Other" ? (
                <span>
                  <FaCar className="h-10 w-10 text-gray-500" />
                  Other
                </span>
              ) : (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16"
                  width={100}
                  height={100}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-10 flex-grow">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            PIA Auto Rulate - Early Black Friday
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-2">
            {filteredOffers.map((offer, index) => (
              <Offer key={index} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Porsche Inter Auto Romania. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="mailto:pia@porsche.ro"
              className="hover:text-white transition"
            >
              <FaEnvelopeOpen className="h-6 w-6" />
            </a>
            <a
              alt="buton_suna_footer"
              href="tel:+0219229"
              className="hover:text-white transition"
            >
              <PhoneIcon className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/piaromania"
              className="hover:text-white transition"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
      <ConsentDialog />
    </div>
  );
}
