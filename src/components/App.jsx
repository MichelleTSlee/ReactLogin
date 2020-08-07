import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <div className="flex-container">
        {notes.map((note) => {
          return (
            <Note key={note.id} title={note.title} details={note.details} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
