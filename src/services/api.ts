import { Note } from '../types';

const API_BASE_URL = 'http://localhost:3001/api'; // Backend API URL

export const fetchAllTasks = async (): Promise<Note[]> => {
  const response = await fetch(`${API_BASE_URL}/tasks/fetchAllTasks`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to fetch tasks' }));
    throw new Error(errorData.message || 'Failed to fetch tasks');
  }
  const tasks: Note[] = await response.json();
  tasks.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  return tasks;
};

export const addTaskApi = async (content: string): Promise<Note> => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });
  if (!response.ok) {
     const errorData = await response.json().catch(() => ({ message: 'Failed to add task due to network or server error.' }));
     throw new Error(errorData.message || 'Failed to add task');
  }
  return response.json();
};