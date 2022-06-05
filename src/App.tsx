import React  from 'react'
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
        <>
            <h1>React Project</h1>
        </>
  );
}  

const root = createRoot(document.getElementById("root"));
root.render(<App />);
