import React from "react";

const NoteItem = (props) => {
  const { notes } = props;
  return (
    <div className="col-md-3">
      <div class="card  border-primary my-3">
        <div class="card-body">
          <h5 class="card-title">{notes.title}</h5>
          <p className="card-text">
            {notes.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor explicabo in ducimus qui similique, saepe
            dicta fugit debitis repellat natus quia voluptas. Doloremque,
            excepturi soluta. Magni esse laudantium at id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
