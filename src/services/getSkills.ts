import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/db/firebase";
import { Skill } from "@/utils/interface"; // your interface

export async function getAllSkills(): Promise<Skill | undefined> {
  try {
    if (!db) {
      throw new Error("Firebase Firestore is not initialized");
    }
    const skillsRef = collection(db, "skills");

    // Create a query to filter where type === "all"
    const q = query(skillsRef, where("type", "==", "all"));

    const querySnapshot = await getDocs(q);

    // You said only one document is present
    const firstDoc = querySnapshot.docs[0];
    if (firstDoc) {
      return firstDoc.data() as Skill;
    }

    return undefined;
  } catch (error) {
    console.error("Error fetching skill with type=all:", error);
    throw error;
  }
}
