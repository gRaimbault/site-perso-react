import './styles/main.css';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Root from "./routes/Root";

import Home from './routes/Home'

import Presentation from "./routes/presentation/Presentation";
import Work from "./routes/presentation/work/Work";
import Hina from "./routes/presentation/work/Hina";
import WACFashion from "./routes/presentation/work/WACFashion";
import Terramars from "./routes/presentation/work/Terramars";
import Nopex from "./routes/presentation/work/Nopex";
import Contact from "./routes/presentation/Contact";
import About from "./routes/presentation/About";

import Topics from "./routes/topics/Topics";
import Introduction from "./routes/topics/Introduction";

import Atelier from "./routes/atelier/Atelier";
import Entrance from "./routes/atelier/Entrance";
import MainContent from './components/MainContent';


function App() {
  const [columnVisibility, updateColumnVisibility] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility}/>} />
            
          <Route path="/presentation" element={<Presentation columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility}/>} >
            <Route index element={<MainContent columnVisibility={columnVisibility} />} />
            <Route path="work" element={<Work />} />
            <Route path="work/hina" element={<Hina />} />
            <Route path="work/wacfashion" element={<WACFashion />} />
            <Route path="work/terramars" element={<Terramars />} />
            <Route path="work/nopex" element={<Nopex />} />
              
            
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/topics" element={<Topics columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility}/>} >
          <Route path="introduction" element={<Introduction />} />
          </Route>
          <Route path="/atelier" element={<Atelier columnVisibility={columnVisibility} updateColumnVisibility={updateColumnVisibility}/>} > 
            <Route path="entrance" element={<Entrance />} />
          </Route>         

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
