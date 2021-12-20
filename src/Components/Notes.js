import React, { useContext, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import NoteItem from "./NoteItem";
import { useEffect } from "react";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  useEffect(() => {
    getNote();
  }, []);

  const [note, setnote] = useState({
    etitle: " ",
    edescription: " ",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const refClosed = useRef(null);
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.tag);
    refClosed.current.click();
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Addnote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="etitle"
                    name="etitle"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    id="edescription"
                    name="edescription"
                    className="form-control"
                    value={note.edescription}
                    onChange={onChange}
                    required
                    minLength={5}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    id="etag"
                    name="etag"
                    className="form-control"
                    value={note.etag}
                    onChange={onChange}
                    required
                    minLength={5}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClosed}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 5 || note.edescription.elength < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-1">
          {notes.length === 0 && `No Notes To display`}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
