import React, { useState } from "react";

function CreateArea(props) {
  // const [newTitle, setNewTitle] = useState("");
  // const [newContent, setNewContent] = useState("");
  // function useAdd(event) {
  //   props.setNotes((prevNotes) => [
  //     ...prevNotes,
  //     {
  //       title: newTitle,
  //       content: newContent,
  //     },
  //   ]);
  //   event.preventDefault();
  // }
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function useAdd(event) {
    props.setNotes((prevNotes) => [...prevNotes, newNote]);
    event.preventDefault();
    setNewNote({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={useAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
