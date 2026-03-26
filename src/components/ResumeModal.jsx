import React from "react";
import image from "../assets/himanshu.pdf";
import { FaWindowClose } from "react-icons/fa";

function ProfileModal({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60">

      <div className="flex flex-col bg-white h-[90vh] w-[90%] max-w-4xl rounded-2xl overflow-hidden">

        {/* HEADER */}
        <div className="h-[8vh] w-full flex justify-between items-center px-5 border-b-2 border-black bg-red-400">
          <div className="text-xl text-gray-100">
            C:\himanshu\resume
          </div>

          <button
            onClick={closeModal}
            className="hover:bg-red-700 p-2 rounded"
          >
            <FaWindowClose className="text-yellow-200" size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="relative flex-1 bg-[#915EFF] border-x-2 border-b-2 border-black">

          {/* DOWNLOAD BUTTON */}
          <div className="absolute top-2 right-2 z-10">
            <a
              href={image}
              download
              className="px-3 py-1 text-sm bg-[#646a45] text-white rounded"
            >
              Download
            </a>
          </div>

          {/* PDF VIEW */}
          <iframe
            src={`${image}#toolbar=0`}
            title="Resume"
            className="w-full h-full"
          ></iframe>

        </div>
      </div>
    </div>
  );
}

export default ProfileModal;