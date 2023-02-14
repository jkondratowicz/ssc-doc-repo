import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from '../pages/Home';
import { MapPage } from '../pages/Map';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mapa" element={<MapPage />} />
      </Route>
      {/*@todo 404*/}
    </Routes>
  );
}

export default App;
