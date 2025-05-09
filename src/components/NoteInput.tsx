import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface NoteInputProps {
  onAddNote: (content: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onAddNote }) => {
  const [noteContent, setNoteContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedContent = noteContent.trim();
    if (!trimmedContent || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onAddNote(trimmedContent);
      setNoteContent('');
    } catch (error) {
      console.error("NoteInput: submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6"> 
      <input
        type="text"
        placeholder="New Note..."
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        className="input-base" 
        aria-label="New note input"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        className="btn btn-primary" 
        aria-label="Add note"
      >
        <span className="btn-icon-adornment"> 
          <Plus size={11} strokeWidth={3} />
        </span>
        Add
      </button>
    </form>
  );
};

export default NoteInput;