import React, { useContext,useState }from "react";
import NoteContext from "../context/notes/noteContext";
const Addnote = () => {
  const context = useContext(NoteContext);
  const { addnote } = context;

  const [ note, setnote ] = useState({
        title: " ",
        description:" ",
        tag:""
    })
    const handleClick = (e) => {
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
     };
    const onChange = (e) => {
        setnote({...note,[e.target.name]:e.target.value})
    }
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
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
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
            id="exampleInputPassword1"
            onChange={onChange}
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
            id="exampleInputPassword1"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
