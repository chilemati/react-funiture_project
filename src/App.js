import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mainpage from "./components/Mainpage/Mainpage";
import About from "./components/about/About";
import Collections from "./components/collections/Collections";
import Contacts from "./components/contacts/Contacts"
import Catalog from './components/catalog/Catalog'
import Inspiration from './components/inspiration/Inspiration'
import Error from "./components/404/Error";
import '../src/App.css'
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collections />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
