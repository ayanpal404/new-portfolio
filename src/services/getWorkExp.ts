import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase";
import { WorkExp } from "@/utils/interface";

export async function getWorkExp(): Promise<WorkExp[]> {
  try {
    if (!db) {
      throw new Error("Firebase Firestore is not initialized");
    }
    const workExpRef = collection(db, "workExp");
    const querySnapshot = await getDocs(workExpRef);

    const data: WorkExp[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<WorkExp, "id">)
    }));

    return data;
  } catch (error) {
    console.error("Error fetching work experience:", error);
    throw error;
  }
}
