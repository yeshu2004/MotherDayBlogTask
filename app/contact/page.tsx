// import { MenuIcon, SearchIcon, CameraIcon } from '@heroicons/react/solid';
// "use client"
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-50 h-full">
      <section className="px-[10vw] md:py-[8vw]  pt-[20vw] pb-[10vw]">
        <h2 className="text-4xl font-semibold mb-8">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-200 relative h-64 md:h-96 overflow-hidden">
              <Image alt="" src={'/contactimg.jpg'} fill priority className="object-cover" />
            </div>
            <p className="mt-4 text-gray-700 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo asperiores quas impedit nihil explicabo placeat ipsum quidem non odio, blanditiis modi beatae. Velit odit itaque asperiores at, maxime obcaecati.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border-b-[1px] border-b-gray-500 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border-b-[1px] border-b-gray-500 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border-b-[1px] border-b-gray-500 placeholder-gray-500"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-2 border-b-[1px] border-b-gray-500 placeholder-gray-500 h-32"
            ></textarea>
            <button
              type="button"
              className="bg-black text-white px-10 py-2"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}