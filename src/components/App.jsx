import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea notes={notes} setNotes={setNotes} />
      {notes.map((reminder, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={reminder.title}
            content={reminder.content}
            setNotes={setNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
