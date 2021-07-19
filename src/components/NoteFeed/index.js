import { Link } from 'react-router-dom';

import Note from '../Note';

import { NoteWrapper } from './styles';

export default function NoteFeed({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteWrapper key={note.id}>
          <Note note={note} />
          <Link to={`note/${note.id}`}>Permalink</Link>
        </NoteWrapper>
      ))}
    </div>
  );
}
