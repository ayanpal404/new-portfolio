// Fetch from Firebase
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/db/firebase";
import { Info } from "@/utils/interface";

export async function getInfo() {
  try {
    if (!db) {
      throw new Error("Firebase Firestore is not initialized");
    }
    const querySnapshot = await getDocs(collection(db, "info"));
    let data: Info | undefined;

    const firstDoc = querySnapshot.docs[0];
    if (firstDoc) {
      data = firstDoc.data() as Info;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching info:", error);
    throw error;
  }
}
