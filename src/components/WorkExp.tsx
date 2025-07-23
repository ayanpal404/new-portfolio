"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import clsx from "clsx";
import { useData } from "@/context/DataContext";

export default function WorkExp() {
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
      <div className="space-y-2 w-full px-2">
        {(workExperience ?? []).map((job, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={clsx(
                "rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer",
                "hover:border-[#4ED7F1]/60 dark:hover:border-[#03C988]",
                isExpanded &&
                  "border-[#4ED7F1]/60 dark:border-[#03C988] shadow-md"
              )}
              onClick={() => toggleDescription(index)}
            >
              <div className="flex gap-4 items-start w-full group">
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
                <div className="flex-1 min-w-0 group">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm sm:text-base font-semibold flex items-center gap-1 group">
                        {job.company}
                        <span
                          className={clsx(
                            "transform sm:flex hidden transition-all duration-300 translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                            isExpanded ? "rotate-90" : ""
                          )}
                        >
                          <FaAngleRight />
                        </span>
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 truncate">
                        {job.role}  &#9679; {"Full-time"}  &#9679; {"Hybrid"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <p className="text-xs sm:text-sm text-gray-500 font-semibold dark:text-gray-400">
                        {job.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description collapsible section */}
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
              {/* Mobile-specific tap indicator */}
              <div className="sm:hidden mt-0 text-center duration-200 ease-linear">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {isExpanded ? (
                    <div className="flex items-center justify-start gap-2 pt-2">
                      <p>Tap to collapse</p>
                      <FaAnglesUp
                        className="size-3 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-start gap-2 pl-[60px]">
                      <p>Tap to expand</p>
                      <FaAnglesDown
                        className="size-3 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      />
                    </div>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
