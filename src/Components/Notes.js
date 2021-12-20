import React, { useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import NoteItem from "./NoteItem";
import { useEffect } from "react";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <NoteItem note={ note}/>;
        })}
      </div>
    </>
  );
};
