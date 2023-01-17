import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 hover:text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="bg-gray-600 opacity-50 fixed top-0 right-0 w-full h-full flex flex-col justify-center items-center lg:hidden ">
          <button onClick={()=>setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white fixed top-[18px] right-[23px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Dialog.Title className="text-4xl text-white">Menu</Dialog.Title>
          <ul className=" mt-3 flex flex-col gap-2 items-center">
                <a className="text-xl text-white hover:text-black" href="/">About</a>
                <a  className="text-xl text-white hover:text-black" href="">Blog</a>
                <a className="text-xl text-white hover:text-black" href="/contact-us">Contact Us</a>
          </ul>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
