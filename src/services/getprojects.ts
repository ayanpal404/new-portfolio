import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/db/firebase";
import { Project } from "@/utils/interface";

export async function getWorks(): Promise<Project[]> {
  try {
    if (!db) {
      throw new Error("Firebase Firestore is not initialized");
    }
    const projectsRef = collection(db, "works");

    // Create a query to filter where showOnProfile === true
    const q = query(projectsRef, where("showOnProfile", "==", true));

    const querySnapshot = await getDocs(q);

    const data: Project[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Project, "id">)
    }));

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    if (!db) {
      throw new Error("Firebase Firestore is not initialized");
    }
    const projectsRef = collection(db, "works");
    const querySnapshot = await getDocs(projectsRef);

    const data: Project[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Project, "id">)
    }));
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    throw error;
  }
}