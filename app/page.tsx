import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


// const stories = [
//     {
//       "id": 1,
//       "title": "A Mother's Endless Love",
//       "excerpt": "Discover the touching story of Maria, a mother whose sacrifices shaped her family’s future.",
//       "category": "Stories",
//       "image": "https://via.placeholder.com/12h-240x600?text=A+Mother's+Endless+Love"
//     },
//     {
//       "id": 2,
//       "title": "Staying Healthy as a Busy Mom",
//       "excerpt": "Learn simple tips for moms to maintain health and balance in their daily lives.",
//       "category": "Health",
//       "image": "https://via.placeholder.com/1200x600?text=Healthy+Mom"
//     },
//     {
//       "id": 3,
//       "title": "Inspiring Moms Who Lead",
//       "excerpt": "Celebrate mothers like Sarah, who turned challenges into opportunities for all.",
//       "category": "Inspiration",
//       "image": "https://via.placeholder.com/1200x600?text=Inspiring+Moms"
//     },
//     {
//       "id": 4,
//       "title": "The Gift of Time",
//       "excerpt": "A heartwarming tale of a mother and daughter reconnecting through simple moments.",
//       "category": "Stories",
//       "image": "https://via.placeholder.com/1200x600?text=Gift+of+Time"
//     },
//     {
//       "id": 5,
//       "title": "Mindfulness for Moms",
//       "excerpt": "Explore how mindfulness helps mothers find peace amidst the chaos.",
//       "category": "Health",
//       "image": "https://via.placeholder.com/1200x600?text=Mindfulness"
//     }
// ]

const articles = [
    {
      "id": 1,
      "title": "A Mother's Endless Love",
      "excerpt": "A touching story of Maria, whose sacrifices gave her children a brighter future.",
      "category": "Stories",
      "readingTime": 5,
      "image": "https://via.placeholder.com/300x200?text=A+Mother's+Endless+Love"
    },
    {
      "id": 2,
      "title": "Staying Healthy as a Busy Mom",
      "excerpt": "Simple tips for moms to stay healthy and balanced amidst a hectic schedule.",
      "category": "Health",
      "readingTime": 4,
      "image": "https://via.placeholder.com/300x200?text=Healthy+Mom"
    },
    {
      "id": 3,
      "title": "Inspiring Moms Who Lead",
      "excerpt": "Celebrating mothers like Sarah, who turned challenges into opportunities.",
      "category": "Inspiration",
      "readingTime": 6,
      "image": "https://via.placeholder.com/300x200?text=Inspiring+Moms"
    },
    {
      "id": 4,
      "title": "The Gift of Time",
      "excerpt": "A mother and daughter reconnect through a special Mother’s Day together.",
      "category": "Stories",
      "readingTime": 3,
      "image": "https://via.placeholder.com/300x200?text=Gift+of+Time"
    },
  ]

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* navbar */}
      <nav className="flex items-center w-full h-fit justify-between px-[10vw] py-5 absolute z-100 text-white">
        <ul className="flex items-center justify-between text-2xl">
          <Link href={''}><FiAlignJustify/></Link>
        </ul>
        <ul className="md:flex items-center justify-between text-xl hidden">
          <Link href={''}>Mother’s Day Tribute Blog</Link>
        </ul>
        <ul className="flex items-center justify-between text-2xl">
          <Link href={''}><CiSearch/></Link>
        </ul>
      </nav>

      {/* hero */}
      <div className="w-full h-screen relative z-0">
        <Image alt="" src={'/img1.jpg'} width={2000} height={2000} className="w-full h-full object-cover "/>
        {/* box */}
        <div className="md:h-[50vh] h-[40vh] md:w-[35vw] w-[65vw] bg-black/70 text-white absolute bottom-0 left-[10vw]">
          <div className="hidden md:flex items-center absolute top-0 right-0 translate-x-[50%]">
            <div className="h-20 w-20 bg-white flex items-center justify-center text-black">
              <span className="rotate-180 text-2xl"><IoIosArrowForward /></span>
            </div>
            <div className="h-20 w-20 bg-black flex items-center justify-center text-white">
              <span className=" text-2xl"><IoIosArrowForward /></span>
            </div>  
          </div>
          <div className="h-full p-10 flex flex-col gap-5">
            <h5 className="text-base sm:text-sm">Stories</h5>
            <h1 className="lg:text-4xl md:text-2xl text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit ?</h1>
            <h3 className="text-base hidden md:block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iure minus omnis!</h3>
            <button className="bg-white text-black px-4 py-3 w-fit border-none">Read More</button>
          </div>
        </div>

      </div>
      <div className="h-full w-full ">
        {/* expore */}
        <div className="px-[10vw] py-10 flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl">Explore by catagory</h2>
            <div className="md:flex items-center gap-1 hidden">
              <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
                <span className="rotate-180 text-xl"><IoIosArrowForward /></span>
              </div>
              <div className="h-10 w-10 bg-black flex items-center justify-center text-white">
                <span className=" text-xl"><IoIosArrowForward /></span>
              </div>  
            </div>
          </div>
          <div className="w-full h-fit flex items-center gap-10 shrink-0 overflow-x-auto overflow-y-hidden">
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
            <div className="bg-black h-[35vh] md:h-[30vh] w-full md:w-[30vh] text-lg flex items-center justify-center shrink-0">
              <div className="flex flex-col text-white items-center gap-2">
                <div className="bg-white h-1 w-20"></div>
                <h2>Lorem</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* recent article */}
      <div className="min-h-screen w-full px-[10vw] py-10">
          <h5 className="text-2xl">Recent articles</h5>
          <div className="lg:flex-row lg:flex flex flex-col items-start h-full w-full py-5">
            <div className="w-full h-full flex flex-col gap-5">
            {
              articles.map((article, id)=>{
                return(
              <div className="w-full h-fit flex" key={id}>
                <div className="bg-black h-[35vh] w-[40%]">

                </div>
                <div className="h-full w-[60%] flex flex-col py-5 gap-4 px-5">
                  <h5 className="text-sm">#{article.category}</h5>
                  <h1 className="text-4xl">{article.title}</h1>
                  <h5>{article.excerpt}</h5>
                  <button className="bg-black text-white px-10 py-3 w-fit">Read more</button>
                </div>
              </div>
                )
              })
            }
              
            </div>
            <div className=" lg:w-1/3 w-full h-screen flex flex-col gap-10 md:mt-0 mt-24">
              <div className="border-2 border-black max-h-[50vh] w-full relative text-center pt-20 pb-10 px-5 flex flex-col gap-3">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-blue-700 rounded-full"></div>
                <h1 className="text-2xl">Jaspreet Bhamari</h1>
                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ad corporis perferendis autem sint, facere aperiam nam vitae quia consequuntur, iure deleniti quae velit nemo odit ipsam fugit rerum voluptate!</h5>
                <h4 className="text-lg font-semibold">Follow me</h4>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="flex gap-3">
                    {
                      [1,2,3,4].map((id)=>{
                        return(
                          <div key={id} className="bg-black h-13 w-13">
                            <Link href={'/'}></Link>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="border-2 border-black h-fit w-full px-10 py-8 flex items-center justify-center">
                <div className="text-center flex flex-col gap-3">
                  <h3 className="text-2xl">Newsletter</h3>
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non esse sit at dignissimos.</h4>
                  <div className="flex flex-col text-left">
                    <label htmlFor="">Email address</label>
                    <input type="email" placeholder="example@gmail.com" className="border-none " />
                    <button className="bg-black px-4 py-3 text-white mt-5">subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="bg-blue-100 h-screen w-full">

      </div>
    </div>
  );
}
