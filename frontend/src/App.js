import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UploadItemPage, HomePage, CreateOutfitPage, FavouritesPage } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <DndProvider backend={HTML5Backend}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createoutfit" element={<CreateOutfitPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/uploaditem" element={<UploadItemPage />} />
        </Routes>
      </DndProvider>
    </Router>
  );
}

export default App;