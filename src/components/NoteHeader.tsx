import React from 'react';
import { Notebook } from 'lucide-react';

const NoteHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-6"> 
      <Notebook className="icon-primary" size={30} />
      <h1 className="title-main">Note App</h1>
    </div>
  );
};

export default NoteHeader;