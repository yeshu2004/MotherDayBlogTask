import Image from "next/image";
import {
  FaFacebookF,
  FaFingerprint,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="w-full h-screen relative z-0">
        <Image
          alt=""
          src={"/newabout.jpg"}
          priority
          fill
          className="object-cover "
        />
      </div>
      <div className="h-screen w-full px-[10vw] relative">
        <div className="bg-white min-h-screen w-[80vw] absolute -top-1/2 left-[10vw] py-10">
          <div className="flex flex-col md:gap-2 ">
            <h1 className="text-center md:text-4xl text-2xl">My name is</h1>
            <h1 className="text-center md:text-4xl font-mono text-2xl">Jaspreet Bhamari</h1>
          </div>
          <div>
            <div className="flex gap-3 mt-5 md:mt-10  justify-center ">
              <FaFacebookF className="md:w-14 w-10 h-10 md:h-14 md:p-3 p-2 text-2xl bg-black text-white" />
              <FaInstagram className="md:w-14 w-10 h-10 md:h-14 md:p-3 p-2 text-2xl bg-black text-white" />
              <FaYoutube className="md:w-14 w-10 h-10 md:h-14 md:p-3 p-2 text-2xl bg-black text-white" />
              <FaFingerprint className="md:w-14 w-10 h-10 md:h-14 md:p-3 p-2 text-2xl bg-black text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center w-full ">
            <hr className="w-[25vh] md:w-[30rem] mt-10 border-gray-300" />
            <p className="italic text-gray-700 mt-6 md:text-xl max-w-[28rem] px-3">
              Some beautiful paths can&apos;t be discovered without getting lost.
            </p>
            <hr className="w-[25vh] md:w-[30rem] mt-6 mb-10 border-gray-300" />

            {/* Description */}
            <p className="max-w-lg text-gray-800 px-7 italic md:px-3 pb-10 text-left text-sm md:text-base">
              For as long as I can remember I&apos;ve been obsessed with the idea of
              travel. I was always that person who was forever daydreaming of
              foreign lands and unfamiliar cultures; coming up with travel
              itineraries that would challenge my perceptions and help me gain a
              deeper understanding of the world.
            </p>
          </div>
          <div className="md:flex md:flex-row flex flex-col items-center lg:px-[15vw] gap-5">
            <div className="relative h-[60vh] w-full bg-red-300 overflow-hidden">
              <Image
                alt="About Section Image"
                src="/aboutimg1.jpg"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="hidden md:block relative h-[60vh] w-full bg-blue-300 overflow-hidden">
            <Image
                alt="About Section Image"
                src="/aboutimg2.jpg"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
