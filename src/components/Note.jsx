import React from "react";

function Note(props) {
  function deleteItem(id) {
    props.setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          deleteItem(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
