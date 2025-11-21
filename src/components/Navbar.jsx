import React from "react";

const Navbar = () => {
  const MenuLinkes = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="w-full flex justify-between items-center px-4  ">
      <a href="/">
        <img src="logo.svg" alt="Logo" className="w-full h-full" />
      </a>

      <div className="flex gap-8 items-center ">
        {MenuLinkes.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.name}
          </a>
        ))}

        <button
          className="[text-shadow:0px_1px_1px_rgba(0,_0,_0,_0.16)] shadow-[0px_1px_4px_-1px_rgba(30,_31,_37,_0.38)] hover:bg-[#2262C7] active:bg-[#215BB9] 
        transition-background duration-150 ease-in-out bg-[#2679F3] text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          Get Stated
        </button>
      </div>
    </div>
  );
};

export default Navbar;
