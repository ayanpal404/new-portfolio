"use client";

import React from "react";
import { useData } from "@/context/DataContext";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import ReactMarkdown from "react-markdown";
import { TbReportAnalytics } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa6";
import LoadingComponent from "@/components/Loading";

type ProjectPageProps = {
  params: { id: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { allProjects, loading } = useData();
  if (loading){
      return (
        <div className="flex items-center justify-center min-h-screen max-w-2xl mx-auto">
          <LoadingComponent type="dots" size="lg" />
        </div>
      );
  }
  const project = allProjects?.find((p) => p.id === params.id);

  const getProjectImage = () => {
    if (project?.image) return project.image;
    if (project?.title && project.title.length % 2 === 0) {
      return "/project1.png";
    }
    return "/project2.png";
  };

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-8 text-center">
        <button
        onClick={() => window.history.back()}
        className="font-semibold text-lg mb-2"
      >
        ← Back
      </button>
        <p className="text-red-500 text-lg">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-4 pb-32">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="font-semibold text-lg mb-2"
      >
        ← Back
      </button>

      {/* Project Image */}
      <Image
        src={getProjectImage()}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 rounded-tl-3xl rounded-br-3xl"
        width={500}
        height={200}
      />

      {/* Title and Duration */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-base font-semibold text-gray-700 dark:text-gray-300 text-end">
          {project.duration}
        </p>
      </div>

      {/* Status */}
      <p className="text-sm text-green-600 dark:text-green-400">
        Status: {project?.status ?? "Completed"}
      </p>

      {/* Description */}
      <ReactMarkdown>
        {project.longDescription ?? project.description}
      </ReactMarkdown>
      {/* <p className="prose dark:prose-inverttext-sm text-gray-700 dark:text-gray-300">
        {project.longDescription ?? project.description}
      </p> */}

      {/* Features */}
      {project.features?.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-2">Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div>
        <p className="font-semibold text-lg mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.techStack.map((skill, index) => (
            <span
              key={index}
              className="text-xs text-gray-50 bg-slate-900 px-2 py-1 rounded-md hover:bg-[#4ED7F1] hover:dark:bg-[#03C988] transition-all duration-300 cursor-context-menu hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Deployment Info */}
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Deployed via: <strong>Vercel</strong> | CI/CD:{" "}
        <strong>GitHub Actions</strong>
      </p>

      {/* Links */}
      {/* Links */}
<div className="flex flex-wrap gap-3 mt-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
    >
      <LuGithub size={18} />
      GitHub
    </a>
  )}
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all"
    >
      <FiExternalLink size={18} />
      Live
    </a>
  )}
  {project.reportLink && (
    <a
      href={project.reportLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
    >
      <TbReportAnalytics size={18} />
      Report
    </a>
  )}
  {project.demoVideoLink && (
    <a
      href={project.demoVideoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-all"
    >
      <FaYoutube size={18} />
      Demo Video
    </a>
  )}
</div>

      
    </div>
  );
}

