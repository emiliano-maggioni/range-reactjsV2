import React  from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';
import Routing from "./routes/Routing";

const App = () => {
  return (
            <BrowserRouter>
            <main>
              <Routing />
            </main>
        </BrowserRouter>
  );
}  

const root = createRoot(document.getElementById("root"));
root.render(<App />);
