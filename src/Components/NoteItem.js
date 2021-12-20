import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quia rerum odio veniam animi velit? Doloribus nam
            adipisci deleniti voluptate labore officia quaerat modi suscipit
            ipsam! Dolores nesciunt rem facilis pariatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
