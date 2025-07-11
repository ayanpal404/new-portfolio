"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import clsx from "clsx";


function Education() {
  const [showImage, setShowImage] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const educations = [
    {
      image: "https://upload.wikimedia.org/wikipedia/en/0/05/Adamas_University_Logo.png",
      institution: "Adamas University",
      degree: "Bachelor of Computer Applications(BCA)",
      grade: "8.91 CGPA",
      duration: "Aug 2022 - Jun 2025",
      description:
        "Pursuing a Bachelor's degree in Computer Applications with a focus on software development, data structures, and algorithms. Achieved a CGPA of 8.91.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_Gb0T7Z-2r-SPmdMotFtMlhrq0HY0Cie9g&s",
      institution: "Karimpur Jagannath High School(H.S)",
      degree: "Higher Secondary",
      grade: "86.4%",
      duration: "2022",
      description:
        "Completed Higher Secondary education with a focus on Science, achieving a high percentage.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_Gb0T7Z-2r-SPmdMotFtMlhrq0HY0Cie9g&s",
      institution: "Karimpur Jagannath High School(H.S)",
      degree: "Secondary",
      grade: "64.4%",
      duration: "2020",
      description:
        "",
    },
  ];

  const toggleDescription = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl px-4 sm:px-6 py-4 flex flex-col items-start justify-start">
      <h1 className="font-bold mb-4 px-3 sm:px-0 text-xl sm:text-2xl">Education</h1>
      <div className="space-y-6 w-full">
        {educations.map((edu, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="flex gap-4 items-start cursor-pointer group px-1"
              onClick={() => toggleDescription(index)}
            >
              {/* Logo or Initial */}
              <div className="min-w-[50px] min-h-[50px] flex items-center bg-blue-50 justify-center border-2 border-blue-500 dark:border-blue-700 rounded-full overflow-hidden p-">
                {showImage && edu.image ? (
                  <Image
                    src={edu.image}
                    alt={`${edu.institution} logo`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-xl font-semibold text-blue-600 dark:text-blue-300">
                    {edu.institution[0]}
                  </span>
                )}
              </div>

              {/* Job Info */}
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="mr-4">
                    <h2 className="text-base sm:text-lg font-semibold flex items-center gap-1 group">
                      {edu.degree}
                      <span
                        className={"transform transition-all duration-300 translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }
                      >
                        <FaAngleRight />
                      </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.institution}
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
                  <p className="text-gray-700 dark:text-gray-300 text-justify font-semibold">
                    {edu.grade ? `Grade: ${edu.grade}` : "Grade: Not specified"}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
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
