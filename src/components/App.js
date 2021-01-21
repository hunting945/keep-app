import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes"


function App() {
  const [notes, setNotes] = useState(defaultNotes);

  return (
    <div>
      <Header />
      <h1>Change!</h1>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
