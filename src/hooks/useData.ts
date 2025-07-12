"use client";

import { useEffect, useState } from "react";
import { Info, Skill, WorkExp, Education, Project } from "@/utils/interface";
import { getInfo } from "@/services/getInfo";
import { getEducation } from "@/services/getEducation";
import { getWorkExp } from "@/services/getWorkExp";
import { getAllSkills } from "@/services/getSkills";
import { getWorks, getAllProjects } from "@/services/getprojects";

export function useData() {
  const [info, setInfo] = useState<Info | null>(null);
  const [education, setEducation] = useState<Education[] | null>(null);
  const [workExperience, setWorkExperience] = useState<WorkExp[] | null>(null);
  const [skills, setSkills] = useState<Skill | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [allProjects, setAllProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setLoading(true);
        const info = await getInfo();
        const edu = await getEducation();
        const work = await getWorkExp();
        const skills = await getAllSkills();
        const projects = await getWorks();
        const allProjects = await getAllProjects();
        if (info) setInfo(info);
        if (edu) setEducation(edu);
        if (work) setWorkExperience(work);
        if (skills) setSkills(skills);
        if (projects) setProjects(projects);
        if (allProjects) setAllProjects(allProjects);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInfo();
  }, []);

  return { info, education, workExperience, projects, allProjects, skills, loading, error };
}
