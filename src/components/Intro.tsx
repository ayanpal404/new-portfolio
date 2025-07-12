import Image from "next/image";
import { useData } from "@/context/DataContext";

export default function Intro() {
  const { info, loading } = useData();

  if (loading) return <p className="text-gray-500">Loading...</p>;

  return (
    <section className="flex flex-col font-inter items-center justify-start overflow-hidden sm:pt-0 pt-5">
      <div className="flex items-center max-w-2xl w-full px-6 sm:pr-10 sm:px-2">
        <div className="flex items-end gap-0 justify-between w-full flex-row-reverse px-1 sm:px-4">
          {/* Image Container - Fixed positioning */}
          <div className="relative rounded-full overflow-hidden border-2 border-[#4ED7F1] dark:border-[#03C988] mt-5 w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <Image
              src={info?.profilePic || "/default-profile.png"}
              alt="profile pic"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 6rem, (max-width: 768px) 9rem, (max-width: 1024px) 10rem, 12rem"
            />
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-start justify-start flex-1">
            <p className="text-3xl sm:text-4xl font-black bg-[#4ED7F1] dark:bg-[#03C988] bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 cursor-default select-none hover:animate-none relative  duration-200 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600/20 before:via-purple-600/20 before:to-indigo-600/20 dark:before:from-blue-400/20 dark:before:via-purple-400/20 dark:before:to-pink-400/20 before:blur-xl before:rounded-lg before:-z-10 before:opacity-0 before:transition-opacity before:duration-500 tracking-tight leading-none pb-2 sm:pb-4 ">
              Hi, folks✨
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-800 dark:text-gray-100 leading-tight pb-2 sm:pb-2">
              I&#39;m Ayan Pal
            </h1>
          </div>
        </div>
      </div>
      <p className="text-base sm:text-lg text-slate-800 max-w-2xl dark:text-gray-300 mt-2 px-7 sm:px-6 leading-tight sm:leading-snug ">
        {info?.intro}
      </p>
      <div className="max-w-2xl px-6 mt-4 sm:mt-6">
        <h1 className="text-xl sm:text-2xl font-bold text-start">About</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 sm:mt-2 text-justify leading-tight sm:leading-snug">
          {info?.about1}
          <br />
          <br />
          {info?.about2}
        </p>
      </div>
    </section>
  );
}
