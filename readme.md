# Full Stack To-Do List - Frontend

This is the frontend part for the Full Stack To-Do List. It's built with React, Vite, TypeScript, and styled with Tailwind CSS. It provides a user interface to add and view to-do items.

**backend service available at: [Backend Repository Link](https://github.com/prathyu116/fullstack_task_Prathyu-server-)**

## Features

*   **Add Tasks:** Input field to add new to-do items.
*   **View Tasks:** Displays a list of all to-do items fetched from the backend.
*   **Responsive Design:** The UI is designed to work well on desktop, tablet, and mobile screens.
*   **Reusable Components ans style classes:** Reusable UI components and style classes.
*   **Optimistic Updates (for adding tasks):** Provides immediate feedback when adding a new task.

## Tech Stack

*   **React:** JavaScript library for building user interfaces.
*   **Vite:** Fast frontend build tool and development server.
*   **TypeScript:** Superset of JavaScript that adds static typing.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Lucide React:** Library for beautiful and consistent icons.
*   **Axios (or Fetch API):** For making HTTP requests to the backend API. 


## Project Setup

1.  **Clone the repository (if applicable, otherwise navigate to the frontend directory):**
    ```bash
    git clone <your-repo-url>
    cd repo
    ```

2.  **Install dependencies:**
    ```bash
    npm install

    ```
3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory. 
    ```env
    VITE_API_URL=http://localhost:3001/api


## Available Scripts

*   **`npm run dev`**
    Starts the development server (usually on `http://localhost:5173` or the next available port). The app will automatically reload if you change any of the source files.

*   **`npm run build`**
    Bundles the app into static files for production. The build artifacts will be stored in the `dist/` directory.

*   **`npm run lint`**
    Lints the codebase using ESLint (if configured).

*   **`npm run preview`**
    Locally previews the production build from the `dist/` directory.

