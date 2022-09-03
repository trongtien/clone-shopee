import { BrowserRouter } from 'react-router-dom'
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <div className="main-root h-screen">
        <Header />
      </div>
    </BrowserRouter>

  );
}

export default App;
