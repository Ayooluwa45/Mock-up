import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";

function App() {
  return (
  
      <Router>
         <Header/>
        <Routes>
         <Route path="/create-comment" element={<createComment/>}/>
          <main>

          </main>
        </Routes>
      </Router>
  );
}

export default App;
