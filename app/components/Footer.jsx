// import Image from "next/image"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="h-full w-full">
            <div className="md:px-[10vw] w-full h-fit">
              <div className="bg-black text-white md:w-[45vh] flex items-center px-4 py-3 justify-between">
                <h2>Follow me on Instagram</h2>
                <div className="text-2xl">
                    <FaInstagram/>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full overflow-x-auto lg:overflow-x-hidden">
              {
                [1,2,3,4,5,6].map((i)=>{
                  return( 
                    <div key={i} className="bg-black h-[33vh] w-[33vh] shrink-0 relative overflow-hidden"> 
                      <Image alt="" about="" fill priority src={ `/fimg${i}.jpg`} className="object-cover"/>
                    </div>
                  )
                })
              }
            </div>
            <div className="px-[10vw] md:py-5 py-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h4 className="md:text-2xl font-mono text-xl">Tribute Blog</h4>
                  <h5 className="md:text-sm text-xs text-zinc-500">Copyrights &#169; 2020 All Rights Reserved</h5>
                </div>
                <div className="md:flex items-center gap-5 hidden text-zinc-500">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/aboutme"}>About</Link>
                  <Link href={"/categories"}>Categories</Link>
                  <Link href={"/contact"}>Contact</Link>
                </div>
              </div>
            </div>
          </div>
  )
}
