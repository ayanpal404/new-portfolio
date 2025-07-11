"use client";

import { projects } from "@/services/getprojects";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import Image from "next/image";
import React from "react";

// ✅ Define the Project Type
interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  duration: string;
  techStack: string[];
  showOnProfile: boolean;
}

const Projects: React.FC = () => {
  // Helper function to get fallback image
  const getProjectImage = (project: Project): string => {
    if (project.image) return project.image;
    return project.title.length % 2 === 0 ? "/project1.png" : "/project2.png";
  };

  return (
    <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold mb-1 sm:px-0 text-xl sm:text-2xl">
          Check Out My Work
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 text-justify leading-tight sm:leading-snug">
          I&#39;ve built a range of projects — from clean, responsive websites to feature-rich web and mobile applications. My work includes admin dashboards, real-time platforms, and AI-integrated tools, all crafted with performance, usability, and modern tech stacks in mind.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className={`${project.showOnProfile ? "group" : "hidden"}`}
          >
            {project.showOnProfile && (
              <div className="overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={getProjectImage(project)}
                    alt={project.title}
                    className="w-full h-28 object-cover transition-transform duration-300"
                    width={500}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="pb-4 px-1 pt-2">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-0">
                    {project.title}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1 font-semibold">
                    {project.duration}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="text-xs sm:text-xs text-gray-300 bg-slate-900 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium text-sm group/link"
                      >
                        <span>GitHub</span>
                        <LuGithub className="w-4 h-4 transition-transform duration-200 group-hover/link:scale-110" />
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium text-sm group/link"
                      >
                        <span>Live</span>
                        <FiExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/link:scale-110" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Projects Link */}
      <p className="w-full text-center flex items-center justify-center pt-5">
        <a
          href="/projects"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:scale-105 transition-all duration-200 font-medium text-sm group/link"
        >
          <span>View all projects</span>
          <FiExternalLink className="w-4 h-4 transition-all duration-200 group-hover/link:scale-110" />
        </a>
      </p>
    </div>
  );
};

export default Projects;
