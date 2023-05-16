import "./App.css";
import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  useEffect(
    () =>
      onSnapshot(collection(db, "Users"), (snapshot) => {
        snapshot.docs.map((doc) => doc.data());
      }),
    []
  );

  return "anidebashmir";
}

export default App;
