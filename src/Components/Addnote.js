import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
const Addnote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setnote] = useState({
    title: " ",
    description: " ",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({
      title: " ",
      description: " ",
      tag: " ",
    });
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            className="form-control"
            onChange={onChange}
            minLength={5}
            required
            value={note.tag}
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
