import './App.css';
import HomePage from './components/homepage';
import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
<div>

<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </BrowserRouter>

</div>
  );
}

export default App;
