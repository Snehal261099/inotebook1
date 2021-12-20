import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial =[
    {
      "_id": "61bf5ca16796a565f70d4a3d",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq123 task1234444",
      "description": "Th1111e title is 123456 good11",
      "tag": "general123",
      "date": "2021-12-19T16:24:01.350Z",
      "__v": 0
    },
    {
      "_id": "61bf5d2b6796a565f70d4a48",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq111123 task1234444",
      "description": "Clean your room",
      "tag": "general123",
      "date": "2021-12-19T16:26:19.242Z",
      "__v": 0
    },
    {
      "_id": "61bf5d3d6796a565f70d4a4a",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq111123 task1234444",
      "description": "Clean your room123",
      "tag": "general123",
      "date": "2021-12-19T16:26:37.707Z",
      "__v": 0
    },
    {
      "_id": "61bf5d436796a565f70d4a4c",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq111123 task1234444",
      "description": "Clean your room1234",
      "tag": "general123",
      "date": "2021-12-19T16:26:43.147Z",
      "__v": 0
    },
    {
      "_id": "61bf5d466796a565f70d4a4e",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq111123 task1234444",
      "description": "Clean your room12345",
      "tag": "general123",
      "date": "2021-12-19T16:26:46.396Z",
      "__v": 0
    },
    {
      "_id": "61bf5d4a6796a565f70d4a50",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq111123 task1234444",
      "description": "Clean your room123457",
      "tag": "general123",
      "date": "2021-12-19T16:26:50.210Z",
      "__v": 0
    },
    {
      "_id": "61bf5d4e6796a565f70d4a52",
      "user": "61bf5c576796a565f70d4a38",
      "title": "Firstqqqq111123 task1234444",
      "description": "Clean your room123457",
      "tag": "general123",
      "date": "2021-12-19T16:26:54.947Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes,setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
