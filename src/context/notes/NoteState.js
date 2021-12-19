import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61bec2f26d49fba983348c8d",
      user: "61bd89966cfacda013dd780b",
      title: "First task",
      description: "The title is 123456 good",
      tag: "general",
      date: "2021-12-19T05:28:18.512Z",
      __v: 0,
    },
    {
      _id: "61bec2f26d49fba983348c8d",
      user: "61bd89966cfacda013dd780b",
      title: "First task",
      description: "The title is 123456 good",
      tag: "general",
      date: "2021-12-19T05:28:18.512Z",
      __v: 0,
    },
    {
      _id: "61bec2f26d49fba983348c8d",
      user: "61bd89966cfacda013dd780b",
      title: "First task",
      description: "The title is 123456 good",
      tag: "general",
      date: "2021-12-19T05:28:18.512Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes,setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
