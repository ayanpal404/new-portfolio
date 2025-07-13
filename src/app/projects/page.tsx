"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Project } from "@/utils/interface";
import { useData } from "@/context/DataContext";
import LoadingComponent from "@/components/Loading";

const AllProjectsPage: React.FC = () => {
  const router = useRouter();
  const { allProjects, loading } = useData();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen max-w-2xl mx-auto">
        <LoadingComponent type="dots" size="lg" />
      </div>
    );
  }

  if (!allProjects || allProjects.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          No projects found.
        </p>
      </div>
    );
  }

  // sort projects base on duration last 4 characters
  const sortedProjects = [...allProjects].sort((a, b) => {
    const aDuration = a.duration.slice(-4);
    const bDuration = b.duration.slice(-4);
    return bDuration.localeCompare(aDuration);
  });

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <button
        onClick={() => window.history.back()}
        className="font-semibold text-lg mb-2"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-1">All Projects</h1>
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
              <th className="px-4 py-2"> </th>
              <th className="px-4 py-2"> </th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.map((project: Project, index: number) => (
              <tr
                key={index}
                onClick={() => router.push(`/projects/${project.id}`)}
                className="border-t border-gray-300 dark:border-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-2">
                  {(() => {
                    const end = project.duration.split(" - ")[1];
                    const year = new Date(end).getFullYear();
                    return isNaN(year) ? (project.duration.slice(-4)==="sent"?"Present":<span>{project.duration.slice(-4)}</span>) : year;
                  })()}
                </td>
                <td className="px-4 py-2">{project.title}</td>
                <td className="px-4 py-2 flex items-center justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="z-20 inline-flex items-center gap-1 text-gray-900 dark:text-gray-100 hover:scale-125 transition-transform duration-200 hover:underline rounded-full p-1 hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-700"
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
                      onClick={(e) => e.stopPropagation()}
                      className="z-20 inline-flex items-center gap-1 text-blue-600 dark:text-[#03C988] hover:scale-125 transition-transform duration-200 hover:underline rounded-full p-1 hover:bg-blue-600 hover:text-gray-100 dark:hover:bg-[#03C988] dark:hover:text-gray-100"
                    >
                      <FiExternalLink size={16} />
                      <span className="sr-only">Live</span>
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProjectsPage;
