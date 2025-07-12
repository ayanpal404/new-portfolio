"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import clsx from "clsx";
import { useData } from "@/context/DataContext";

function WorkExp() {
  const [showImage, setShowImage] = useState(false);
  const { workExperience } = useData();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleDescription = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl px-4 sm:px-6 py-4 flex flex-col items-start justify-start">
      <h1 className="font-bold mb-2 sm:mb-4 px-3 sm:px-0 text-xl sm:text-2xl">
        Work Experience
      </h1>
      <div className="space-y-6 w-full px-2">
        {(workExperience ?? []).map((job, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="flex flex-col items-start cursor-pointer group"
              onClick={() => toggleDescription(index)}
            >
              <div className="flex gap-4 items-start cursor-pointer group w-full">
              {/* Logo or Initial */}
              <div className="min-w-[45px] min-h-[45px] flex items-center bg-blue-100 justify-center border-2 border-[#4ED7F1]/60 dark:border-[#03C988] rounded-full overflow-hidden">
                {showImage && job?.logo ? (
                  <Image
                    src={job.logo}
                    alt={`${job.company[0]} logo`}
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-2xl font-semibold text-[#4ED7F1] dark:text-[#03C988]">
                    {job.company[0]}
                  </span>
                )}
              </div>

              {/* Job Info */}
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="mr-4">
                    <h2 className="text-sm sm:text-base font-semibold flex items-center gap-1 group">
                      {job.role}
                      <span
                        className={clsx(
                          "transform transition-all duration-300 translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                          isExpanded ? "rotate-90" : ""
                        )}
                      >
                        <FaAngleRight />
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-semibold dark:text-gray-400">
                    {job.duration}
                  </p>
                </div>
              </div>
            </div>
              {/* Description collapsible section */}
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500",
                  isExpanded ? "max-h-40 mt-2" : "max-h-0"
                )}
              >
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExp;
