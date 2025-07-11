"use client";

import React from "react";
import { projects } from "@/services/getprojects";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  duration: string; // e.g., "July 2024 - Sept 2024"
  techStack: string[];
  showOnProfile: boolean;
};

// Sort the projects by end date
const sortedProjects = [...projects].sort((a, b) => {
  const endA = new Date(a.duration.split(" - ")[1]).getTime();
  const endB = new Date(b.duration.split(" - ")[1]).getTime();

  const isEndANaN = isNaN(endA);
  const isEndBNaN = isNaN(endB);

  // Push NaN (e.g., "Present") to the top
  if (isEndANaN && !isEndBNaN) return -1;
  if (!isEndANaN && isEndBNaN) return 1;

  return endB - endA;
});

const AllProjectsPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1">All Projects</h1>
      <p className="text-gray-600 dark:text-gray-300 leading-snug mb-5">
        A collection of projects I&#39;ve built over time — including full-stack
        applications, UI demos, and real-world tools. Click to explore the code
        or live preview.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-md text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">GitHub</th>
              <th className="px-4 py-2">Live</th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((project: Project, index: number) =>
              project.showOnProfile ? (
                <tr
                  key={index}
                  className="border-t border-gray-300 dark:border-gray-700"
                >
                  <td className="px-4 py-2">
                    {(() => {
                      const end = project.duration.split(" - ")[1];
                      const year = new Date(end).getFullYear();
                      return isNaN(year) ? new Date().getFullYear() : year;
                    })()}
                  </td>
                  <td className="px-4 py-2">{project.title}</td>
                  <td className="px-4 py-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-900 dark:text-gray-100 hover:underline"
                      >
                        <LuGithub size={16} />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FiExternalLink size={16} />
                        <span className="sr-only">Live</span>
                      </a>
                    )}
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProjectsPage;
