import React, { useState, useEffect, useCallback } from 'react';

import * as api from '../services/api';
import { Note } from '../types';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

const sortNotesByDate = (notes: Note[]): Note[] => {
  return [...notes].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
};

const NoteApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadNotes = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedNotes = await api.fetchAllTasks();
      setNotes(sortNotesByDate(fetchedNotes)); 
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while fetching notes.';
      setError(errorMessage);
      console.error('Failed to load notes:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleAddNote = async (content: string) => {
   

    try {
      setError(null);

      const addedNote = await api.addTaskApi(content);
      
      setNotes(prevNotes => {
     
        return sortNotesByDate([...prevNotes, addedNote]);
      });
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while adding the note.';
      setError(errorMessage);
      console.error('Failed to add note:', err);
      
    }
  };

  return (
    <div className="card w-full max-w-md mx-auto"> 
      <NoteHeader />
      <NoteInput onAddNote={handleAddNote} />
      
      {error && <p className="error-text">{error}</p>}
      
      {isLoading ? (
        <p className="loading-text">Loading notes...</p>
      ) : (
        <NoteList notes={notes} />
      )}
    </div>
  );
};

export default NoteApp;