import {
    collection,
    doc,
    getDoc,
    getDocs,
    increment,
    orderBy,
    query,
    updateDoc,
  } from "firebase/firestore/lite";
  import { firestore } from "../firebase.config";
  import { Game } from "../models";
  
  export async function incrementGameCounter(gameId: string) {
    const db = firestore;
  
    const docRef = doc(db, "games", gameId);
  
    // Select a shard of the counter at random
    const counterId = Math.floor(Math.random() * 3).toString();
    const counterRef = doc(docRef, "counters", counterId);
  
    // Update count
    await updateDoc(counterRef, {
      counter: increment(1),
    });
  }
  
  export async function getGame(gameId: string) {
    const db = firestore;
    const snapshot = await getDoc(doc(db, "games", gameId));
  
    if (!snapshot.exists()) {
      return null;
    }
  
    return { ...snapshot.data(), id: snapshot.id } as Game;
  }
  
  export async function getGames() {
    const db = firestore;
  
    const dataQuery = query(
      collection(db, "games"),
      orderBy("displayOrder", "asc")
    );
    const snapshot = await getDocs(dataQuery);
  
    const games: Game[] = [];
    const len = snapshot.docs.length;
    for (let i = 0; i < len; i++) {
      const snp = snapshot.docs[i];
      // const counterQuery = query(collection(snp.ref, "counters"));
      // const counterSnapshot = await getDocs(counterQuery);
      // const playCount = counterSnapshot.docs
      //   .map((s) => {
      //     const data = s.data();
      //     if (typeof data.count === "number") {
      //       return data.count;
      //     }
      //     return 0;
      //   })
      //   .reduce((a, b) => a + b, 0);
  
      games.push({
        ...snp.data(),
        id: snp.id,
      } as Game);
    }
  
    return games;
  }
  