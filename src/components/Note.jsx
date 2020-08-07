import React from "react";

function Note(props) {
  return (
    <div class="note">
      <h4>{props.title}</h4>
      <p>{props.details}</p>
    </div>
  );
}

export default Note;
