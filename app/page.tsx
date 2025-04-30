"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { MdOutlineArrowOutward } from "react-icons/md";

const stories = [
  {
    id: 1,
    title: "The Heart That Raised Us",
    excerpt: "Explore the emotional journey of a mother's sacrifices, shaping generations with her unconditional love and wisdom.",
    category: "Stories",
    image: "storiesimg4.jpg"
  },
  {
    id: 2,
    title: "Self-Care Tips for Every Mom",
    excerpt: "Being a mom is a full-time job. Discover simple ways mothers can nourish their mind, body, and soul every day.",
    category: "Health",
    image: "storiesimg5.jpg"
  },
  {
    id: 3,
    title: "Everyday Heroes: Moms Who Inspire",
    excerpt: "Meet mothers who turned everyday struggles into extraordinary stories of courage, leadership, and hope.",
    category: "Inspiration",
    image: "storiesimg6.jpg"
  }
];


const articles = [
  {
    id: 1,
    title: "A Mother's Endless Love",
    excerpt:
      "Maria's story is a beautiful reminder of how a mother’s sacrifices and silent strength can transform the lives of her children, giving them a future filled with hope, opportunity, and love.",
    category: "Stories",
    readingTime: 5,
    image: "cardsimg1.jpg",
    description:
      "Maria, a single mother in a small village, faced relentless hardships after her husband’s passing. Despite financial struggles and societal pressure, she worked tirelessly as a seamstress to educate her children. Her days were long and filled with quiet resilience, choosing their future over her own comfort. From sewing late into the night to skipping meals to feed them, her unwavering devotion became the foundation of her children’s success. This story is a heartfelt tribute to the countless mothers whose unconditional love and unseen sacrifices pave the way for a better tomorrow. Maria’s love was truly endless—and deeply transformative.",
  },
  {
    id: 2,
    title: "Staying Healthy as a Busy Mom",
    excerpt:
      "Between school runs, cooking, and work, moms often forget themselves. These easy, time-saving health tips can help mothers care for their own well-being without compromising their responsibilities or peace of mind.",
    category: "Health",
    readingTime: 4,
    image: "cardsimg3.jpg",
    description:
      "Health often takes a backseat when you're juggling motherhood, chores, and possibly a full-time job. This article offers simple yet powerful tips to integrate wellness into your daily routine. From 10-minute home workouts to nutritious meal prepping and stress management techniques like mindful breathing, every suggestion respects your time and energy. You’ll also find encouragement to set boundaries and schedule personal check-ins. Because staying healthy isn’t selfish—it’s essential for sustaining the strength motherhood demands. Even the busiest mom deserves to feel vibrant, balanced, and cared for. These steps help reclaim your health one manageable moment at a time.",
  },
  {
    id: 3,
    title: "Inspiring Moms Who Lead",
    excerpt:
      "Meet extraordinary moms who turned adversity into leadership. Their powerful stories show how love, grit, and vision can reshape communities—and redefine what it means to lead while nurturing a family.",
    category: "Inspiration",
    readingTime: 6,
    image: "cardsimg2.jpg",
    description:
      "Leadership comes in many forms—and motherhood often shapes some of the strongest. This article highlights real moms who rose above personal setbacks to lead social movements, launch businesses, and inspire change. From Sarah, a former shelter resident who created a nonprofit for homeless families, to Asha, who became the first female mayor of her town while raising two kids, each story speaks of courage and transformation. These women prove that motherhood is not a limitation—it’s a strength. Their journeys offer a reminder that impactful leadership doesn’t require perfection, just a heart determined to uplift others while walking their own path.",
  },
  {
    id: 4,
    title: "The Gift of Time",
    excerpt:
      "A touching Mother’s Day story about a daughter who surprises her mom with a weekend together—where shared memories, heartfelt conversations, and long-forgotten laughter begin to heal their strained relationship.",
    category: "Stories",
    readingTime: 3,
    image: "cardsimg6.jpg",
    description:
      "Time is the most precious gift we can give—and this story captures that truth beautifully. After years of growing apart, a daughter returns home on Mother’s Day to spend a quiet weekend with her aging mother. As they prepare meals, revisit old photo albums, and walk through familiar parks, long-buried emotions rise to the surface. Through both silence and laughter, they begin to rebuild their bond. This narrative isn’t just about celebration—it’s about reflection, healing, and the rediscovery of love. 'The Gift of Time' reminds us that it’s never too late to reconnect with the ones who matter most.",
  },
];

export default function Home() {

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[index];

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* hero */}
       <div className="w-full h-screen relative z-0">
      <Image
        alt={story.title}
        src={`/${story.image}`}
        fill
        priority
        className="w-full h-full object-cover"
      />

      {/* Content box */}
      <div className="h-fit md:w-[45vw] lg:w-[40vw] w-[65vw] bg-white text-black absolute bottom-0 left-[10vw]">
        {/* Arrows */}
        <div className="flex items-center absolute top-0 right-0 translate-x-[50%] z-10">
          <div
            onClick={handlePrev}
            className="cursor-pointer lg:h-20 md:h-14 lg:w-20 md:w-14 h-10 w-10 bg-black flex items-center justify-center text-white"
          >
            <span className="rotate-180 text-2xl">
              <IoIosArrowForward />
            </span>
          </div>
          <div
            onClick={handleNext}
            className="cursor-pointer lg:h-20 md:h-14 lg:w-20 md:w-14 h-10 w-10 bg-black flex items-center justify-center text-white"
          >
            <span className="text-2xl">
              <IoIosArrowForward />
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="h-full md:p-10 p-8 flex flex-col lg:gap-5 gap-4">
          <h5 className="text-sm md:text-xs lg:text-base font-semibold lowercase">#{story.category}</h5>
          <h1 className="lg:text-5xl md:text-3xl leading-none text-3xl font-mono tracking-tight">
            {story.title}
          </h1>
          <h3 className="text-sm lg:text-base text-zinc-500">
            {story.excerpt}
          </h3>
          <button className="bg-black text-white px-5 py-3 w-fit border-none md:text-sm lg:text-base text-base">
            Read More
          </button>
        </div>
      </div>
    </div>
      <div className="h-full w-full ">
        {/* expore */}
        <div className="px-[10vw] py-10 flex flex-col gap-5">
          <div className="flex items-start justify-between ">
            <div className="flex items-center md:gap-2 gap-1">
            <h2 className="text-2xl">Explore by catagory</h2>
            <span className="text-2xl"><MdOutlineArrowOutward/></span>
            </div>
            <div className="md:flex items-center gap-1 hidden">
              <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
                <span className="rotate-180 text-xl">
                  <IoIosArrowForward />
                </span>
              </div>
              <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
                <span className=" text-xl">
                  <IoIosArrowForward />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex items-center gap-10 shrink-0 overflow-x-auto overflow-y-hidden">
            <div className="relative h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/catimg1.jpg"
                alt="Stories"
                fill
                className="object-cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>{" "}
              {/* optional dark overlay */}
              <div className="relative flex flex-col text-white items-center gap-2 z-10">
                <div className="bg-white h-1 w-20"></div>
                <h2 className="font-mono">Stories</h2>
              </div>
            </div>

            <div className="relative h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/catimg2.jpg"
                alt="Stories"
                fill
                className="object-cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>{" "}
              {/* optional dark overlay */}
              <div className="relative flex flex-col text-white items-center gap-2 z-10">
                <div className="bg-white h-1 w-20"></div>
                <h2 className="font-mono">Health</h2>
              </div>
            </div>

            <div className="relative h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/catimg3.jpg"
                alt="Stories"
                fill
                className="object-cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>{" "}
              {/* optional dark overlay */}
              <div className="relative flex flex-col text-white items-center gap-2 z-10">
                <div className="bg-white h-1 w-20"></div>
                <h2 className="font-mono">Inspiration</h2>
              </div>
            </div>

            <div className="relative h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/catimg4.jpg"
                alt="Stories"
                fill
                className="object-cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>{" "}
              {/* optional dark overlay */}
              <div className="relative flex flex-col text-white items-center gap-2 z-10">
                <div className="bg-white h-1 w-20"></div>
                <h2 className="font-mono">Love</h2>
              </div>
            </div>
            <div className="relative h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src="/catimg5.jpg"
                alt="Stories"
                fill
                className="object-cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>{" "}
              {/* optional dark overlay */}
              <div className="relative flex flex-col text-white items-center gap-2 z-10">
                <div className="bg-white h-1 w-20"></div>
                <h2 className="font-mono">Care</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recent article */}
      <div className="min-h-screen w-full px-[10vw] md:py-5 py-5">
        <div className="flex items-center md:gap-2 gap-1">
          <h5 className="text-2xl">Recent articles</h5>
          <span className="text-2xl"><MdOutlineArrowOutward/></span>
        </div>
        <div className="lg:flex-row lg:flex flex flex-col items-start h-full w-full py-5">
          <div className="w-full h-full flex flex-col gap-10 md:gap-5">
            {articles.map((article, id) => {
              return (
                <div
                  className="w-full md:h-[35vh] md:flex-row flex flex-col"
                  key={id}
                >
                  <div className="bg-black md:h-[35vh] h-[20rem] md:w-[40%] w-full relative overflow-hidden">
                    <Image
                      alt=""
                      about=""
                      src={`/${article.image}`}
                      priority
                      fill
                      quality={75}
                      className="object-cover"
                    />
                  </div>
                  <div className="max-h-[35vh] md:w-[60%] w-full flex flex-col lg:gap-4 md:gap-3 gap-2 md:px-5">
                    <div className="flex items-center gap-2 pt-2">
                      <h5 className=" text-xs md:text-sm font-semibold lowercase">
                        #{article.category}
                      </h5>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-zinc-500"></div>
                        <h5 className=" text-xs md:text-sm text-zinc-500">
                          {article.readingTime} minutes reading
                        </h5>
                      </div>
                    </div>
                    <h1 className="lg:text-4xl md:text-3xl text-[1.6rem] leading-[1.1] font-semibold font-mono">
                      {article.title}
                    </h1>
                    <h5 className="text-zinc-500 lg:text-base text-sm hidden md:block">
                      {article.excerpt}
                    </h5>
                    <button className="bg-black text-white px-10 py-3 w-fit text-sm lg:text-base">
                      Read more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" lg:w-1/3 w-full h-fit flex flex-col gap-10 md:mt-0 mt-28">
            <div className="border-[1px] border-black max-h-[50vh] w-full relative text-center pt-20 pb-10 px-5 flex flex-col gap-3">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-white rounded-full overflow-hidden">
                <Image
                  alt=""
                  src={"/aboutimg1.jpg"}
                  about=""
                  className="object-cover"
                  fill
                  priority
                  quality={75}
                />
              </div>
              <h1 className="text-2xl">Jaspreet Bhamari</h1>
              <h5 className="text-zinc-500">
              A passionate frontend developer and storyteller. I created this blog as a heartfelt space to honor the love, resilience, and inspiration that mothers bring into our lives.I aim to craft meaningful experiences.
              </h5>
              <h4 className="text-lg font-semibold">Follow me</h4>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((id) => {
                    return (
                      <div key={id} className="bg-black h-13 w-13">
                        <Link href={"/"}></Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border-[1px] border-black h-fit w-full px-10 py-8 flex items-center justify-center">
              <div className="text-center flex flex-col gap-3">
                <h3 className="text-2xl font-mono">Newsletter</h3>
                <h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  esse sit at dignissimos.
                </h4>
                <div className="flex flex-col text-left">
                  <label htmlFor="">Email address</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="border-none "
                  />
                  <button className="bg-black px-4 py-3 text-white mt-5">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
