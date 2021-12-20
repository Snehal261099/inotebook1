import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getNote = async () => {
    //TODO API call;
    const response = await fetch(`${host}/api/notes/fetchonnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMDFhZGEzZmY1MThlZTQ5NzIzODE4In0sImlhdCI6MTYzOTk3OTc5MH0.2LTg9espt18r81Y6UIdkZUt9EoRV7dVL_CeWOd48trQ",
      },
      // body: JSON.stringify({ title, description, tag }),
    });

    //ADD NOTES
    // console.log("Note added");
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    //TODO API call;
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMDFhZGEzZmY1MThlZTQ5NzIzODE4In0sImlhdCI6MTYzOTk3OTc5MH0.2LTg9espt18r81Y6UIdkZUt9EoRV7dVL_CeWOd48trQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    //ADD NOTES
    const json = response.json();
    console.log(json);
    console.log("Note added");
    const note={
      "user": "61c01ada3ff518ee49723818",
      "title": title,
      "description":description,
      "tag": tag,
      "_id": "61c026ef3df57a3bc3b13e55",
      "date": "2021-12-20T06:47:11.816Z",
      "__v": 0
    }
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMDFhZGEzZmY1MThlZTQ5NzIzODE4In0sImlhdCI6MTYzOTk3OTc5MH0.2LTg9espt18r81Y6UIdkZUt9EoRV7dVL_CeWOd48trQ",
      },
      // body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json();
    console.log(json);
    console.log("note deleted" + id);
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };

  const editNote = async (id, title, description, tag) => {
    //API CALLS

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMDFhZGEzZmY1MThlZTQ5NzIzODE4In0sImlhdCI6MTYzOTk3OTc5MH0.2LTg9espt18r81Y6UIdkZUt9EoRV7dVL_CeWOd48trQ",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    //LOGIC TO EDIT NOTE

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, getNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
