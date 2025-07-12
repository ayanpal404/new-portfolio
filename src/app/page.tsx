"use client";

import Education from "@/components/Education";
import WorkExp from "@/components/WorkExp";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Contuct from "@/components/Contuct";
import { useData } from "@/context/DataContext";
import LoadingComponent from "@/components/Loading";

export default function Home() {

  const { loading } = useData();

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen max-w-2xl mx-auto">
      <LoadingComponent type="dots" size="lg" />
    </div>
  );

  return (
    <main className="flex flex-col font-inter items-center justify-start min-h-screen overflow-hidden mb-32 sm:pt-0 pt-5">
      <Intro/>
      <WorkExp />
      <Education />
      <Skills />
      <Projects />
      <Contuct />
    </main>
  );
}
