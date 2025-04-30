import { notFound } from "next/navigation";
import Image from "next/image";
import {
  FaFacebookF,
  FaFingerprint,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";


export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}

export default async function Page({ params }:{ params: { id: string }}) {
    const articles = [
        {
          id: 1,
          title: "A Mother's Endless Love",
          excerpt: "Maria's story is a beautiful reminder of how a mother’s sacrifices and silent strength can transform the lives of her children, giving them a future filled with hope, opportunity, and love.",
          category: "Stories",
          readingTime: 5,
          subImage: "artimg1.jpg",
          image: "cardsimg1.jpg",
          description: "Maria, a single mother in a small village, faced relentless hardships after her husband’s passing. Despite financial struggles and societal pressure, she worked tirelessly as a seamstress to educate her children. Her days were long and filled with quiet resilience, choosing their future over her own comfort. From sewing late into the night to skipping meals to feed them, her unwavering devotion became the foundation of her children’s success."
        },
        {
          id: 2,
          title: "Staying Healthy as a Busy Mom",
          excerpt: "Between school runs, cooking, and work, moms often forget themselves. These easy, time-saving health tips can help mothers care for their own well-being without compromising their responsibilities or peace of mind.",
          category: "Health",
          readingTime: 4,
          subImage: "artimg2.jpg",
          image: "cardsimg3.jpg",
          description: "Health often takes a backseat when you're juggling motherhood, chores, and possibly a full-time job. This article offers simple yet powerful tips to integrate wellness into your daily routine. From 10-minute home workouts to nutritious meal prepping and stress management techniques like mindful breathing, every suggestion respects your time and energy. You’ll also find encouragement to set boundaries and schedule personal check-ins. Because staying healthy isn’t selfish—it’s essential for sustaining the strength motherhood demands."
        },
        {
          id: 3,
          title: "Inspiring Moms Who Lead",
          excerpt: "Meet extraordinary moms who turned adversity into leadership. Their powerful stories show how love, grit, and vision can reshape communities—and redefine what it means to lead while nurturing a family.",
          category: "Inspiration",
          readingTime: 6,
          subImage: "artimg4.jpg",
          image: "catimg2.jpg",
          description: "Leadership comes in many forms—and motherhood often shapes some of the strongest. This article highlights real moms who rose above personal setbacks to lead social movements, launch businesses, and inspire change. From Sarah, a former shelter resident who created a nonprofit for homeless families, to Asha, who became the first female mayor of her town while raising two kids, each story speaks of courage and transformation. These women prove that motherhood is not a limitation—it’s a strength."
        },
        {
          id: 4,
          title: "The Gift of Time",
          excerpt: "A touching Mother’s Day story about a daughter who surprises her mom with a weekend together—where shared memories, heartfelt conversations, and long-forgotten laughter begin to heal their strained relationship.",
          category: "Stories",
          readingTime: 3,
          subImage: "artimg3.jpg",
          image: "cardsimg6.jpg",
          description: "Time is the most precious gift we can give—and this story captures that truth beautifully. After years of growing apart, a daughter returns home on Mother’s Day to spend a quiet weekend with her aging mother. As they prepare meals, revisit old photo albums, and walk through familiar parks, long-buried emotions rise to the surface. Through both silence and laughter, they begin to rebuild their bond. This narrative isn’t just about celebration—it’s about reflection, healing, and the rediscovery of love. 'The Gift of Time' reminds us that it’s never too late to reconnect with the ones who matter most."
        }
      ];
  
    const articleId = parseInt(params.id); 
    const article = articles.find((a) => a.id === articleId);
  
    if (!article) return notFound();
  return (
    <div className="min-h-screen w-full relative">
      <div className="w-full h-screen relative z-0">
        <Image
          alt=""
          src={`/${article.image}`}
          priority
          fill
          className="object-cover "
        />
      </div>
      <div className="min-h-screen w-full px-[10vw] relative">
        <div className="h-fit w-[80vw] absolute -top-1/2 left-[10vw] py-10 flex flex-col items-center gap-10 md:px-[20vw] bg-white">
          <h1 className="text-center md:text-5xl font-mono text-3xl">
            {article.title}
          </h1>
          <div className="flex  flex-col md:flex-row items-center md:gap-32 gap-10">
            <div className="flex items-center gap-2">
              <h4>{article.category}</h4>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-zinc-500"></div>
                <h5 className="text-zinc-500">
                  {article.readingTime} minute reading
                </h5>
              </div>
            </div>
            <div className="flex gap-3">
              <FaFacebookF className="w-10 h-10 p-2 text-2xl bg-black text-white" />
              <FaInstagram className="w-10 h-10 p-2 text-2xl bg-black text-white" />
              <FaYoutube className="w-10 h-10 p-2 text-2xl bg-black text-white" />
              <FaFingerprint className="w-10 h-10 p-2 text-2xl bg-black text-white" />
            </div>
          </div>
          <div className="w-full h-[1px] bg-zinc-500"></div>
          <p className="text-gray-800 px-7 italic md:px-3  text-center text-lg md:text-2xl">
            {article.excerpt}
          </p>
          <div className="">
            <div className="md:h-[50vh] h-[40vh] w-full relative overflow-hidden">
                <Image alt="" src={`/${article.subImage}`} fill priority className="object-cover" />
            </div>
            <p className="md:text-lg text-sm pt-10">{article.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
