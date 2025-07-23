"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import clsx from "clsx";
import { useData } from "@/context/DataContext";

function Education() {
  const { education } = useData();
  const [showImage, setShowImage] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  //sort education base on complect year duration string last 4 characters
  const sortedEducation = [...(education ?? [])].sort((a, b) => {
    const yearA = parseInt(a.duration.slice(-4));
    const yearB = parseInt(b.duration.slice(-4));
    return yearB - yearA; // Sort in descending order
  });

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
      <h1 className="font-bold mb-4 px-3 sm:px-0 text-xl sm:text-2xl">
        Education
      </h1>
      <div className="space-y-6 w-full">
        {(sortedEducation ?? []).map((edu, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={clsx(
                "rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer",
                "flex gap-4 items-start cursor-pointer group px-1",
                "hover:border-[#4ED7F1]/60 dark:hover:border-[#03C988]",
                isExpanded &&
                  "border-[#4ED7F1]/60 dark:border-[#03C988] shadow-md"
              )}
              onClick={() => toggleDescription(index)}
            >
              {/* Logo or Initial */}
              <div className="min-w-[45px] min-h-[45px] flex items-center bg-blue-50 justify-center border-2 border-[#4ED7F1]/60 dark:border-[#03C988] rounded-full overflow-hidden p-">
                {showImage && edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institute[0]} logo`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-xl font-semibold text-[#4ED7F1] dark:text-[#03C988]">
                    {edu.institute[0]}
                  </span>
                )}
              </div>

              {/* Job Info */}
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="mr-4">
                    <h2 className="text-sm sm:text-base font-semibold flex items-center gap-1 group">
                      {edu.degree}
                      <span
                        className={clsx(
                          "sm:flex hidden transform transition-all duration-300 translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                          isExpanded ? "rotate-90" : ""
                        )}
                      >
                        <FaAngleRight />
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {edu.institute}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-semibold dark:text-gray-400">
                    {edu.duration}
                  </p>
                </div>

                {/* Description collapsible section */}
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-500",
                    isExpanded ? "max-h-40 mt-2" : "max-h-0"
                  )}
                >
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-justify font-semibold">
                    {edu.grade ? `Grade: ${edu.grade}` : "Grade: Not specified"}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>

                <div className="sm:hidden mt-1 text-center">
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {isExpanded ? (
                      <div className="flex items-center pt-2 justify-start gap-2">
                        <p>Tap to collapse</p>
                        <FaAnglesUp className="size-3 animate-bounce" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-start gap-2">
                        <p>Tap to expand</p>
                        <FaAnglesDown className="size-3 animate-bounce" />
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
