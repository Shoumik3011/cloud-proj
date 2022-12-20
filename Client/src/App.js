import logo from './logo.svg';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom"
//import { v4 as uuidv4 } from 'uuid'
import './App.css';
import TextEditor from './TextEditor';
function App() {
  return <TextEditor />
    // <Router>
    //     <Routes>
    //        <Route path="/" exact>
    //           <Navigate to={'/documents/${uuidv4()}'} />
    //        </Route>
    //        <Route path="/documents/:id">
    //            <TextEditor />
    //        </Route>
    //     </Routes>
    // </Router>
  
}

export default App;
