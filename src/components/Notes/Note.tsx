import { NoteProps } from "./notes-types";

const Note = (props: NoteProps) => {
  return <div className={`note ${props.priority}`}>{props.text}</div>;
};

export default Note;
