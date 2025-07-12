import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase";
import { Education } from "@/utils/interface";

export async function getEducation(): Promise<Education[]> {
  try {
    if (!db) {
      throw new Error("Firebase Firestore is not initialized");
    }
    const educationRef = collection(db, "education");
    const querySnapshot = await getDocs(educationRef);

    const data: Education[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Education, "id">)
    }));

    return data;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw error;
  }
}
