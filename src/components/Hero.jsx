import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center bg-gradient-to-b from-blue-900 via-black to-blue-800 text-white min-h-screen">
      <nav className="flex justify-between items-center w-full px-10 py-5">
        <img src={logo} alt="sumz_logo" className="w-32 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/KARTIKEY-KATYAL/Article-Bliss-",
              "_blank"
            )
          }
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          View on GitHub
        </button>
      </nav>

      <div className="text-center mt-10 px-4">
        <h1 className="text-5xl font-bold leading-snug">
          Revolutionize Reading with <br className="hidden md:block" />
          <span className="text-blue-400">AI-Powered Summarization</span>
        </h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Transform dense articles into precise, digestible insights with our
          advanced GPT-4 summarization tool. Save time and stay informed
          effortlessly.
        </p>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">
        Say Goodbye to Information Overload!
      </h2>
      <p className="mt-4 text-base max-w-lg text-gray-300 text-center">
        Summize empowers readers by condensing lengthy content into actionable
        knowledge, making research and learning faster and more efficient than
        ever.
      </p>
    </header>
  );
};

export default Hero;
