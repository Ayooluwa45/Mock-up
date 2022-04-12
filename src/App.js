import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Comment from './components/Comment'

function App(users) {
  return (
  <>
      <Router>
       
        <Comment/>
        <Routes>
         <Route path="/create-comment" element={<createComment/>}/>
        </Routes>
        <main>
          </main> 
          
      </Router>
      </>
  );
}

export default App;
