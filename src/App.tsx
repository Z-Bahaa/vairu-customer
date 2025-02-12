import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Campaign from './pages/Campaign';
import Campaigns from './pages/Campaigns';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Campaigns />} />
          <Route path="campaign" element={<Campaign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;