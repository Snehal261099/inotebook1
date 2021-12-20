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

    const json = await response.json();
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
    const note = await response.json();
    setNotes(notes.concat(note));
    // console.log(note);
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
    const json = await response.json();

    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };

  const editNote = async (id, title, description, tag) => {
    //API CALLS

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMDFhZGEzZmY1MThlZTQ5NzIzODE4In0sImlhdCI6MTYzOTk3OTc5MH0.2LTg9espt18r81Y6UIdkZUt9EoRV7dVL_CeWOd48trQ",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json();


    //LOGIC TO EDIT NOTE
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }

    setNotes(newNote);
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
