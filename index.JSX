import React from 'react';
import { createRoot } from 'react-dom/client';

function Greeting() {
  const name = 'Calvins';
  return (
    <h1 className="title">
      Hello {name}, welcome to creating your first React program.
    </h1>
  );
}

const container = document.getElementById('root');
if (!container) throw new Error("No element with id 'root' found. Add <div id=\"root\"></div> to index.html");
createRoot(container).render(<Greeting />);
