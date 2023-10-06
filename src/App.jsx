import './App.css'
import { AppProvider } from './Components/MyContext';
import Home from './Components/Home';


function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
