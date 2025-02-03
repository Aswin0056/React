import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/homepage';
import "./App.css";
import Page from './component/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;