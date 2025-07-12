"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  Info,
  Education,
  WorkExp,
  Skill,
  Project,
} from "@/utils/interface";
import { getInfo } from "@/services/getInfo";
import { getEducation } from "@/services/getEducation";
import { getWorkExp } from "@/services/getWorkExp";
import { getAllSkills } from "@/services/getSkills";
import { getWorks, getAllProjects } from "@/services/getprojects";

interface DataContextProps {
  info: Info | null;
  education: Education[] | null;
  workExperience: WorkExp[] | null;
  skills: Skill | null;
  projects: Project[] | null;
  allProjects: Project[] | null;
  loading: boolean;
  error: Error | null;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [info, setInfo] = useState<Info | null>(null);
  const [education, setEducation] = useState<Education[] | null>(null);
  const [workExperience, setWorkExperience] = useState<WorkExp[] | null>(null);
  const [skills, setSkills] = useState<Skill | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [allProjects, setAllProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [info, edu, work, skills, proj, allProj] = await Promise.all([
          getInfo(),
          getEducation(),
          getWorkExp(),
          getAllSkills(),
          getWorks(),
          getAllProjects(),
        ]);
        setInfo(info || null);
        setEducation(edu || null);
        setWorkExperience(work || null);
        setSkills(skills || null);
        setProjects(proj || null);
        setAllProjects(allProj || null);
        console.log("Data fetched successfully",allProj);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        info,
        education,
        workExperience,
        skills,
        projects,
        allProjects,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
