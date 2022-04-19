import Landing from './components/landing/Landing';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
