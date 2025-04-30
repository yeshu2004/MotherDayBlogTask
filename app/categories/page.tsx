import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
  
const cards = [
  {
    cat: 'Guides',
    timeRead: "3",
    title: "Coventry City Guide Including Coventry Hotels",
    subtitle: "The disease from hotel rooms and travellers wound infection.",
    img: "cardsimg1.jpg",
  },
  {
    cat: 'Guides',
    timeRead: "8",
    title: "Planning a Trip to Japan in the Time of Covid",
    subtitle: "When planning a trip opens the question of safety.",
    img: "cardsimg2.jpg",
  },
  {
    cat: 'Guides',
    timeRead: "10",
    title: "How to Choose an African Safari (That’s Right for You)",
    subtitle: "Safari opening the question of safety.",
    img: "cardsimg3.jpg",
  },
  {
    cat: 'Guides',
    timeRead: "3",
    title: "Coventry City Guide",
    subtitle: "The disease from hotel rooms and travellers wound infection.",
    img: "cardsimg4.jpg",
  },
  {
    cat: 'Guides',
    timeRead: "5",
    title: "Planning a Trip to Japan in the Time of Covid",
    subtitle: "When planning a trip opens the question of safety.",
    img: "cardsimg5.jpg",
  },
  {
    cat: 'Guides',
    timeRead: "8",
    title: "Coventry City Hotels",
    subtitle: "The disease from hotel rooms and travellers wound infection.",
    img: "cardsimg6.jpg",
  },
];

export default function page() {
  return (
    <div className="relative min-h-screen pt-10">
      <main className="relative z-10 px-[10vw] pt-[4vw] pb-[2vw]">
        <h1 className="text-2xl">Catagories</h1>
        <div className="py-5 ">
          <Section subheading="Stories" cards={cards} />
          <Section subheading="Inspiration" cards={cards} />
          <Section subheading="Health" cards={cards} />
        </div>
      </main>
    </div>
  );
}

function Section({subheading, cards} ) {
  return (
    <section className="relative pb-5">
      <div className="flex items-start justify-between">
        <p className="text-black text-xl font-mono">{subheading}</p>
        <div className="hidden md:flex items-center gap-1">
          <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
            <span className="rotate-180 text-2xl">
              <IoIosArrowForward />
            </span>
          </div>
          <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
            <span className=" text-2xl">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-2 overflow-y-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative md:w-1/4 w-full shrink-0">
            <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                <Image alt="" src={`/${card.img}`} about="" fill priority className="object-cover" quality={75} />
            </div>
            <div className="py-2 text-black w-full">
              <div className="flex items-center justify-between w-full text-xs py-2">
                <h4 className="font-semibold">#{card.cat}</h4>
                <h5 className="text-zinc-500">{card.timeRead} minutes reading</h5>
              </div>
              <h3 className="font-semibold">{card.title}</h3>
              <p className="font-sans text-zinc-500 text-sm pb-2">{card.subtitle}</p>
              <button className="font-sans px-5 py-2 bg-black text-white">
                <Link href={''}>Read more</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FollowSection() {
  return (
    <div className="my-8">
      <div className="bg-black p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-white">
          <span className="font-sans">Follow me on instagram</span>
          {/* <CameraIcon className="h-6 w-6" /> */}
        </div>
      </div>
      <div className="mt-4 bg-gray-200 h-64 max-w-4xl mx-auto"></div>
    </div>
  );
}
