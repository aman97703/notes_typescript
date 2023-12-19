import Note from "./Note";
import "./notes.css";
import { NotesData } from "./data";

const Notes = () => {
  return (
    <div className="App">
      <h2>Notes App</h2>
      <div className="note_root">
        {NotesData.map((note) => (
          <Note text={note.text} priority={note.priority} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
