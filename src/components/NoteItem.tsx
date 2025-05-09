import React from 'react';
import { Note } from '../types';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div className="list-item"> 
      <p className="list-item-content">{note.content}</p> 
    </div>
  );
};

export default NoteItem;