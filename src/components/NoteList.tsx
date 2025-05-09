import React from 'react';
import { Note } from '../types';
import NoteItem from './NoteItem';

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  if (notes.length === 0) {
    return <div className="empty-state-text">No notes yet. Start adding some!</div>;
  }

  return (
    <div className="mt-4"> 
      <h2 className="subtitle">Your Notes</h2> 
      <hr className="my-2 border-gray-200" /> 
      
      <div className="scrollable-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;