import About from "@/components/About";
import Education from "@/components/Education";
import WorkExp from "@/components/WorkExp";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen overflow-hidden mb-32">
      <ThemeToggle />

      <section className="flex items-center max-w-2xl w-full">
        <div className="flex items-end gap-0 justify-between w-full flex-row-reverse px-1 sm:px-4">
          {/* Image Container - Fixed positioning */}
          <div className="flex-shrink-0 border-2 border-blue-500 p-1 dark:border-blue-700 rounded-full overflow-hidden mt-5">
            <Image
              className="rounded-full"
              src="https://pbs.twimg.com/profile_images/1941713297256087552/-vIKgybY_400x400.jpg"
              alt="profile pic"
              width={160}
              height={160}
            />
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-start justify-start flex-1">
            <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-default select-none animate-pulse hover:animate-none relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600/20 before:via-purple-600/20 before:to-indigo-600/20 dark:before:from-blue-400/20 dark:before:via-purple-400/20 dark:before:to-pink-400/20 before:blur-xl before:rounded-lg before:-z-10 before:opacity-0 before:transition-opacity before:duration-500 tracking-tight leading-none pb-2 sm:pb-4 ">
              Hi, folks✨
            </p>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 dark:text-gray-100 leading-tight pb-2 sm:pb-2">
              I&#39;m Ayan Pal
            </h1>
          </div>
        </div>
      </section>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl dark:text-gray-300 mt-2 px-7 sm:px-6 leading-tight sm:leading-snug">
        Full-stack web developer & BCA student passionate about problem-solving and building impactful projects. Solved 290+ LeetCode problems (C++, SQL) — currently mastering Java for coding interviews.
      </p>
      <About />
      <WorkExp />
      <Education />
    </main>
  );
}
