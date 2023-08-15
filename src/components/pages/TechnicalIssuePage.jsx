import React from "react";
import logo from "@assets/logo.svg";
import iconInstagram from "@icons/instagram.svg";
import grimReaper from "@icons/grim-reaper.svg";

const TechnicalIssuePage = () => {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center flex-col gap-4 overflow-hidden">
      <img className="w-[250px]" src={logo} alt="حمامة شيراتون" />
      <h1
        className="text-2xl text-center"
        style={{
          lineHeight: "2.3rem",
        }}
      >
        باسل بوظ الموقع غصب عنه 😞
        <br />
        بنحاول نحل الموضوع دلوقتي
      </h1>
      <a
        className="flex items-center mt-5 gap-2 px-5 py-2 rounded-md"
        href="https://www.instagram.com/fcisbroskies/"
        target="_blank"
        rel="noreferrer"
        style={{
          background:
            "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        }}
      >
        <img className="w-8 h-8" src={iconInstagram} />
        fcisbroskies
      </a>

      <img
        className="absolute bottom-[-5%] right-0 min-w-[350px] w-[40vw] -z-10 opacity-30"
        src={grimReaper}
        alt=""
      />
    </div>
  );
};

export default TechnicalIssuePage;
